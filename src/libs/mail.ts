import { Resend } from "resend";
import { routes } from "./routes";

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendVerificationEmail = async (email: string, token: string) => {
	const confirmLink = `${domain}${routes.NEW_VERIFICATION}?token=${token}`;
	await resend.emails.send({
		from: "onboarding@resend.dev", // TODO temporary only
		to: email,
		subject: "Confirm your email",
		html: `<p>Click <a href=${confirmLink}>here</a> to confirm email.</p>`,
	});
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
	const resetLink = `${domain}${routes.NEW_PASSWORD}?token=${token}`;

	await resend.emails.send({
		from: "onboarding@resend.dev", // TODO temporary only
		to: email,
		subject: "Reset your password",
		html: `<p>Click <a href=${resetLink}>here</a> to reset your password.</p>`,
	});
};

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
	await resend.emails.send({
		from: "onboarding@resend.dev", // TODO temporary only
		to: email,
		subject: "2FA Code",
		html: `<p>Your 2FA code: ${token}</p>`,
	});
};
