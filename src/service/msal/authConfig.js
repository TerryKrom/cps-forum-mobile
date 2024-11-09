import { LogLevel } from 'react-native-msal';  // Alterado para msal-react-native

export const API_SCOPE = "api://" + process.env.NEXT_PUBLIC_ENTRA_ID_CLIENT_ID;

export const msalConfig = {
  auth: {
    clientId: process.env.NEXT_PUBLIC_ENTRA_ID_CLIENT_ID,
    authority: `https://login.microsoftonline.com/${process.env.NEXT_PUBLIC_ENTRA_ID_TENANT_ID}`,
    redirectUri: process.env.NEXT_PUBLIC_ENTRA_ID_REDIRECT_URI,  // Verifique o redirectUri para o React Native
    postLogoutRedirectUri: process.env.NEXT_PUBLIC_ENTRA_ID_REDIRECT_URI,
  },
  cache: {
    cacheLocation: "localStorage", // Use localStorage ou AsyncStorage no React Native
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
  scopes: ["openid", "profile", "User.Read", "User.Read.All"],
};

export const graphConfig = {
  graphMeEndpoint: `https://graph.microsoft.com/v1.0/me`,
  graphProfilePicEndpoint: "https://graph.microsoft.com/beta/me/photo/$value"
};
