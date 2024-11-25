import NextAuth, { AuthOptions } from "next-auth";
import Keycloak from "next-auth/providers/keycloak";

const authOptions: AuthOptions = {
  providers: [
    Keycloak({
      clientId: process.env.KEYCLOAK_ID ?? "",
      clientSecret: process.env.KEYCLOAK_SECRET ?? "",
      issuer: process.env.KEYCLOAK_ISSUER,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
