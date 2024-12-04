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
