import apiFetch from "./api-fetch";

export async function getUser() {
  const user = await apiFetch("profile");
  return user;
}

export async function createUser(credentials) {
  const response = await apiFetch("signup", {
    body: credentials
  });
  return response;
}

