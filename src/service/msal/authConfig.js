import { LogLevel } from 'react-native-msal';

export const msalConfig = {
  auth: {
    clientId: 'e271fae5-bf1c-4b06-8b1f-eb37ccf8b223', // Seu Client ID
    authority: 'https://login.microsoftonline.com/d848c1d6-0ea1-49bb-b29e-4482027ca5e1', // Seu Tenant ID
    redirectUri: 'https://www.cpsforum.com.br/api/auth/callback/microsoft-entra-id', // A URL de redirecionamento pública
    postLogoutRedirectUri: 'https://www.cpsforum.com.br/api/auth/callback/microsoft-entra-id', // A mesma URL para o logout
  },
  cache: {
    cacheLocation: 'asyncStorage', // Use localStorage ou AsyncStorage no React Native
    storeAuthStateInCookie: false, // Não precisa configurar cookies no React Native
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
        }
      }
    }
  }
};

export const loginRequest = {
  scopes: ["openid", "profile", "User.Read", "User.Read.All"], // Escopos da API que você deseja acessar
};

export const graphConfig = {
  graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me', // Endpoint para acessar o perfil
  graphProfilePicEndpoint: 'https://graph.microsoft.com/beta/me/photo/$value' // Endpoint para acessar a foto de perfil
};
