import { z } from "zod";


export const usersettingsSchema = z
	.object({
		name: z
			.string()
			.min(2, { message: "Name is required field" })
			.max(30, { message: "Max characters for name field is 30" })
			.refine(
				(value) => {
					// Check if the name contains only one space between words
					return /^\s*\S+(\s+\S+)*\s*$/.test(value);
				},
				{ message: "Spaces are not allowed!"},
			)
			.optional(),
		email: z
			.string()
			.min(1, { message: "Email field is required" })
			.email("Sorry, wrong email format")
			.optional(),
		password: z
			.string()
			.refine((val) => /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test(val), {
				message:
					"Password must be at least 6 characters long and contain at least one uppercase character, one lowercase character, and one special symbol",
			})
			.optional(),
		newPassword: z
			.string()
			.refine((val) => /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test(val), {
				message:
					"New password must be at least 6 characters long and contain at least one uppercase character, one lowercase character, and one special symbol",
			})
			.optional(),
	})
	.refine(
		(data) => {
			if (data.password && !data.newPassword) {
				return false;
			}
			return true;
		},
		{
			message: "New password is required if password is provided!",
			path: ["newPassword"],
		},
	)
	.refine(
		(data) => {
			if (data.newPassword && !data.password) {
				return false;
			}
			return true;
		},
		{
			message: "Password is required if new password is provided!",
			path: ["password"],
		},
	);

export type UserSettingsFormValues = z.infer<typeof usersettingsSchema>;
