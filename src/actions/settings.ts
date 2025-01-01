"use server";

import bcrypt from "bcryptjs";
import { getUserByEmail, getUserById } from "@/data/user";
import { currentUser } from "@/libs/auth";
import { UserSettingsFormValues } from "@/components/settings/UserSettingsForm/validation/userSettingsValidationSchema";
import { generateVerificationToken } from "@/libs/tokens";
import { sendVerificationEmail } from "@/libs/mail";
import { db } from "@/libs/db";


export const settings = async (values: UserSettingsFormValues) => {
	const user = await currentUser();
	if (!user || !user.id) {
		return { error: "Sorry, not authorized"};
	}

	const dbUser = await getUserById(user.id);

	if (!dbUser) {
		return { error: "Sorry, not authorized"};
	}

	// It is possibly not necessary checkout - Accountform does not have now 2Factor switcher
	if (user.is0Auth) {
		values.email = undefined;
		values.password = undefined;
		values.newPassword = undefined;
	}

	if (values.email && values.email !== user.email) {
		const existingUser = await getUserByEmail(values.email);
		if (existingUser && existingUser.id !== user.id) {
			return {
				error: "Email already used",
			};
		}

		const verificationToken = await generateVerificationToken(values.email);
		await sendVerificationEmail(verificationToken.email, verificationToken.token);

		return {
			success: "Verification email sent!",
		};
	}

	if (values.password && values.newPassword && dbUser.password) {
		const passwordsMatch = await bcrypt.compare(values.password, dbUser.password);
		if (!passwordsMatch) {
			return { error: "Incorrect password!" };
		}

		// New password needs to be hashed
		const hashedPassword = await bcrypt.hash(values.newPassword, 10);
		values.password = hashedPassword;
		values.newPassword = undefined;
	}

	await db.user.update({
		where: { id: dbUser.id },
		data: {
			...values,
		},
	});

	return { success: "Settings updated!" };
};
