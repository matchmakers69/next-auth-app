import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";

import type { NextAuthConfig } from "next-auth";
import { loginSchema } from "./components/authentication/schemas/loginSchema";
import { getUserByEmail } from "@/data/user";

const AUTH_GOOGLE_ID = process.env.AUTH_GOOGLE_ID;
const AUTH_GOOGLE_SECRET = process.env.AUTH_GOOGLE_SECRET;

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

const FACEBOOK_CLIENT_ID = process.env.FACEBOOK_CLIENT_ID;
const FACEBOOK_CLIENT_SECRET = process.env.FACEBOOK_CLIENT_SECRET;

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
  throw new Error("Missing GitHub OAuth credentials");
}

if (!AUTH_GOOGLE_ID || !AUTH_GOOGLE_SECRET) {
  throw new Error("Missing Google OAuth credentials");
}

if (!FACEBOOK_CLIENT_ID || !FACEBOOK_CLIENT_SECRET) {
  throw new Error("Missing Facebook OAuth credentials");
}

export default {
	providers: [
        GitHub({
          clientId: GITHUB_CLIENT_ID,
          clientSecret: GITHUB_CLIENT_SECRET,
        }),
        Google({
          clientId: AUTH_GOOGLE_ID,
          clientSecret: AUTH_GOOGLE_SECRET,
        }),
        Facebook({
          clientId: FACEBOOK_CLIENT_ID,
          clientSecret: FACEBOOK_CLIENT_SECRET,
        }),
        Credentials({
          async authorize(credentials) {
            const validatedFields = loginSchema.safeParse(credentials);
            if (validatedFields.success) {
              const { email, password } = validatedFields.data;
              // We want to check if email is connected with any email in database
              const user = await getUserByEmail(email);
              if (!user?.password) {
                return null;
              }
              const passwordsMatch = await bcrypt.compare(password, user.password); // compare password hash
              if (passwordsMatch) return user;
            }
            return null;
          },
        }),
      ],
} satisfies NextAuthConfig;