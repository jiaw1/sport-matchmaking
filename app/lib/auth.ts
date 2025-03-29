import { AuthOptions } from "next-auth";
import Keycloak from "next-auth/providers/keycloak";

export const authOptions: AuthOptions = {
  providers: [
    Keycloak({
      clientId: process.env.KEYCLOAK_ID ?? "",
      clientSecret: process.env.KEYCLOAK_SECRET ?? "",
      issuer: process.env.KEYCLOAK_ISSUER ?? "",
    }),
  ],
  cookies: {
    sessionToken: {
      name: `__Secure-next-auth.session-token`,
      options: {
        httpOnly: true,
        secure: true,  // Forces secure cookie
        sameSite: "none", // Required for cross-origin authentication
      },
    },
  },
  useSecureCookies: true,
  debug: true,  // Enable for debugging
  callbacks: {
    jwt: async ({ token, account }) => {
      if (account) {
        token.accessToken = account.access_token;
        token.accountId = account.providerAccountId;
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.accessToken = token.accessToken;
      if (token.accountId) {
        session.user.accountId = token.accountId;
      }
      return session;
    },
  },
};
