import { graphConfig } from "./authConfig";

export async function getUserData(msalInstance) {
  const token = await getCurrentToken(msalInstance);
  if (token) {
    const response = await fetch(graphConfig.graphMeEndpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const userData = await response.json();
    return userData; // Retorna os dados do usuário (nome, e-mail)
  } else {
    console.error("No token found");
  }
}
