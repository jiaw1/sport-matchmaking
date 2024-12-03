"use server";

import { IUserData } from "./definitions";
import { keycloakUsersSchema } from "./schemas";

const KEYCLOAK_BASE_URL = process.env.KEYCLOAK_BASE_URL ?? "";
const KEYCLOAK_REALM = process.env.KEYCLOAK_REALM ?? "";
const KEYCLOAK_ID = process.env.KEYCLOAK_ID ?? "";
const KEYCLOAK_SECRET = process.env.KEYCLOAK_SECRET ?? "";

/**
 * Fetches a permission ticket to manage users.
 * @returns UMA authorization access token
 */
const requestPermissionTicket = async (): Promise<string> => {
  const url = `${KEYCLOAK_BASE_URL}/realms/${KEYCLOAK_REALM}/protocol/openid-connect/token`;

  const params = new URLSearchParams({
    grant_type: "urn:ietf:params:oauth:grant-type:uma-ticket",
    audience: KEYCLOAK_ID,
  });

  const encodedCredentials = Buffer.from(
    `${KEYCLOAK_ID}:${KEYCLOAK_SECRET}`
  ).toString("base64");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${encodedCredentials}`,
    },
    body: params.toString(),
  });

  if (!response.ok) {
    throw new Error(
      `Failed to request permission ticket: ${response.statusText}`
    );
  }

  const data = await response.json();
  return data.access_token;
};

/**
 * Fetches user info from Keycloak by ID.
 * @param ids Array of IDs of the desired users
 * @returns Record where user IDs are mapped to `IUserData`s.
 */
export const fetchUserInfo = async (
  ids: readonly string[]
): Promise<Record<string, IUserData>> => {
  const umaToken = await requestPermissionTicket();

  const url = `${KEYCLOAK_BASE_URL}/admin/realms/${KEYCLOAK_REALM}/users`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${umaToken}`,
    },
  });

  if (!response.ok) {
    console.error(`Failed to fetch Keycloak users: ${response.statusText}`);
    throw new Error("Failed to fetch Keycloak users");
  }

  // Fetch and parse users
  const keycloakUsers: unknown = await response.json();
  const parsedKeycloakUsers = await keycloakUsersSchema.safeParseAsync(
    keycloakUsers
  );
  if (!parsedKeycloakUsers.success) {
    console.error(
      `Failed to parse Keycloak users: ${parsedKeycloakUsers.error.message}`
    );
    throw new Error("Failed to fetch Keycloak users");
  }

  // Filter users to a map required data
  const users = parsedKeycloakUsers
    .data!.filter((u) => ids.includes(u.id))
    .reduce<Record<string, IUserData>>(
      (record, u) => ((record[u.id] = u), record),
      {}
    );

  return users;
};
