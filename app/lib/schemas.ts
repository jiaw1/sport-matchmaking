import { z, ZodSchema } from "zod";
import { IKeycloakUser } from "./definitions";

export const keycloakUsersSchema: ZodSchema<IKeycloakUser[]> = z.array(
  z.object({
    id: z.string(),
    firstName: z.string(),
    username: z.string(),
  })
);
