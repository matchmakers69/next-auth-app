import { routes } from "./routes";

export const appLinkLabels = {
	HOME: "Home",
	LOGIN: "Login",
	REGISTER: "Register",
	SETTINGS: "Settings",
	ISSUES: "Issues",
	SIGN_OUT: "Sign out",
	HEALTH_SCREENINGS: {
		cancelButton: "Cancel",
		uploadMoreButton: "Upload more files",
		goToHealthScreenings: "View all screenings",
		startUploadingButton: "Start uploading",
		uploadingFiles: "Uploading files...",
		closeButton: "Close",
	},
};

export const headerLabels = {
	MENU: "Menu",
};

export const actionMessages = {
	REGISTER: {
		emailConfirmation: "Thank you. Please check your email. We just sent a verification link.",
	},
	LOGIN: {
		emailNotExist: "Email does not exist",
		confirmationEmailSent: "Confirmation email sent! Please check your inbox.",
		invalidFields: "Invalid fields!",
		invalidCredentials: "Invalid credentials!",
		loginWentWrong: "Something went wrong with login!",
		invalidCode: "Invalid code!",
		codeExpired: "Code has expired!",
	},
	VERIFICATION: {
		tokenNonExist: "Token does not exist!",
		tokenHasExpired: "Token has expired!",
		userNonExist: "Email does not exist!",
		emailVerified: "Email verified!",
		missingToken: "Missing token!",
		errorMsg: "Something went wrong!",
	},

	RESET_PASSWORD: {
		emailNotFound: "Email not found!",
		invalidEmailAddress: "Invalid email address",
		resetEmailSent: "Reset email sent! Check your inbox!",
	},

	NEW_PASSWORD: {
		missingToken: "Missing token!",
		invalidFields: "Invalid fields!",
		invalidToken: "Invalid token!",
		tokenExpired: "Token has expired!",
		emailNotExist: "Email does not exist!",
		successPasswordUpdated: "Congrats!, Your password has been updated!",
	},

	SETTING: {
		unauthorized: "Unauthorized",
		emailAlreadyInUse: "Email already in use!",
	},
	ISSUES: {
		unauthorized: "Unauthorized",
		emailAlreadyInUse: "Email already in use!",
	},
};

export const validationRules = {
	REGISTER: {
		nameRequired: "Name is required",
		emailRequired: "Email is required",
		nameMaxLength: "Name must be a maximun 30 characters",
		nameOneSpace: "Spaces are not allowed",
		invalidEmailAddress: "Invalid email address",
		passwordMin: "Password must be at least 6 characters long",
		passwordMax: "Password must be a maximun 30 characters",
		passwordUppercase: "Password must conatain an uppercase character",
		passwordWithNumber: "Password must contain a number",
		passwordWithSpecialCharacter: "Password must contain a special character",
	},
	LOGIN: {
		emailRequired: "Email is required",
		invalidEmailAddress: "Invalid email address",
		passwordMin: "Password must be at least 2 characters long",
		invalidCodeFormat: "Code must include only digits",
		codeMin: "Code must be at least 6 digits",
		codeMax: "Code cannot be longer then 6 digits",
	},
	RESET_PASSWORD: {
		emailRequired: "Email is required",
		invalidEmailAddress: "Invalid email address",
	},
	SETTINGS: {
		nameRequired: "Name is required",
		nameMaxLength: "Name must be a maximun 30 characters",
		nameOneSpace: "Spaces are not allowed",
		emailRequired: "Email is required",
		invalidEmailAddress: "Invalid email address",
		passwordMin: "Password must be at least 6 characters long",
		passwordMax: "Password must be a maximun 30 characters",
		passwordUppercase: "Password must conatain an uppercase character",
		passwordWithNumber: "Password must contain a number",
		passwordWithSpecialCharacter: "Password must contain a special character",
	},
	ISSUES: {
		titleRequired: "Title is required",
		descriptionRequired: "Description is required",
		titleMaxLength: "Title must be a maximun 30 characters",
		descriptionMaxLength: "Description must be a maximun 500 characters",
		titleMin: "Title must be at least 2 characters long",
		descriptionMin: "Description must be at least 10 characters long",
	},
	TEST_RESULTS: {
		name: "Test result name is required",
		noteRequired: "Note is required",
		nameMaxLength: "Title must be a maximun 30 characters",
		noteMaxLength: "Note must be a maximun 500 characters",
		nameMin: "Title must be at least 2 characters long",
		noteMin: "Note must be at least 8 characters long",
		urlRequired: "File's url is required",
		formatRequired: "File's format is required",
	},
};

export const pagesText = {
	AUTH_PAGES: {
		LOGIN: {
			title: "Login",
			subtitle: "Welcome to That Festival Site!",
			noAccountText: "Don't have an account?",
			signInButton: "Login",
			confirmButtonLabel: "Confirm",
			forgotPasswordButtonLabel: "Forgot password?",
			loginFormError: "Something went wrong with your login request!",
		},

		REGISTER: {
			cardTitle: "Fill in your details below and click Register to create an account:",
			backButtonLabel: "Already have an account?",
			existingUserError: "Email already in use!",
			invalidFieldsError: "Invalid fields!",
		},

		VERIFICATION: {
			title: "User verification",
			subtitle: "Confirming your verification",
			backButtonLabel: "Back to login",
			backButtonHref: routes.LOGIN,
		},

		PASSWORD_RESET: {
			title: "Forgot password?",
			forgotPassword: "We'll send you a link to create a new password.",
			backButtonLabel: "Back to login",
			backButtonHref: routes.LOGIN,
			buttonSubmitReset: "Send reset email",
		},

		ERROR: {
			title: "Sorry, error occured!",
			cardTitle: "Oops! Something went wrong!",
			backButtonLabel: "Back to login",
			OAuthAccountError: "Email already in use. Please login with form.",
		},
		NEW_PASSWORD: {
			title: "Password reset",
			newPasswordCardTitle: "Enter a new password",
			buttonSubmitResetPassword: "Reset password",
		},
	},
};
