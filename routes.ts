import paths from "@/utils/paths";

/**
 * An array of routes that are accesible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes: string[] = [paths.home(), paths.newVerification()];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged users to settings
 * @type {string[]}
 */
export const authRoutes = [
  paths.login(),
  paths.register(),
  paths.error(),
  paths.passwordReset(),
  paths.newPassword(),
];

/**
 * The prefix for API authentication routes
 * @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = paths.settings();
