import { AuthOptions, getServerSession } from "next-auth";
import Keycloak from "next-auth/providers/keycloak";

export const authOptions: AuthOptions = {
  providers: [
    Keycloak({
      clientId: process.env.KEYCLOAK_ID ?? "next-auth",
      clientSecret: process.env.KEYCLOAK_SECRET ?? "",
      issuer:
        process.env.KEYCLOAK_ISSUER ??
        "http://35.228.220.223:8080/realms/sport-matchmaking",
    }),
  ],
  callbacks: {
    jwt: async ({ token, account }) => {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.userId = account.userId;
      }
      return token;
    },
  },
  secret: "testsecret",
};

export const getSession = getServerSession(authOptions);
