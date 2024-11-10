import React, { useState } from 'react';
import { Button } from "../../components/ui/button";
import Spinner from "../../components/ui/spinner";
// import { WebView } from 'react-native-webview';

export default function SignInButton() {
    const [isLoading, setIsLoading] = useState(false);
    const [showWebView, setShowWebView] = useState(false);

    const handleSubmit = () => {
        setIsLoading(true);
    };

    const authUrl = "https://login.microsoftonline.com/d848c1d6-0ea1-49bb-b29e-4482027ca5e1/oauth2/v2.0/authorize?response_type=code&client_id=e271fae5-bf1c-4b06-8b1f-eb37ccf8b223&redirect_uri=https%3A%2F%2Fwww.cpsforum.com.br%2Fapi%2Fauth%2Fcallback%2Fmicrosoft-entra-id&scope=openid+profile+email+User.Read&code_challenge=cHhYdDVoVHYuCOxESdOZt_WesbkGdhvpLgVzIu-uP-o&code_challenge_method=S256";

    // Trocar o código de autorização por um token
    const getToken = async (code) => {
        const tokenUrl = "https://login.microsoftonline.com/d848c1d6-0ea1-49bb-b29e-4482027ca5e1/oauth2/v2.0/token";
        const body = new URLSearchParams({
            client_id: "e271fae5-bf1c-4b06-8b1f-eb37ccf8b223",
            client_secret: "imoEE/SGjTki8qY+e9MoMhqz3kWJ5GkijYBSbda+vsvL", // Coloque o segredo do seu cliente aqui
            code,
            redirect_uri: "https://www.cpsforum.com.br/api/auth/callback/microsoft-entra-id",
            grant_type: "authorization_code",
            code_verifier: "cHhYdDVoVHYuCOxESdOZt_WesbkGdhvpLgVzIu-uP-o", // Esse é o "code_verifier" usado no processo PKCE
        });

        try {
            const response = await fetch(tokenUrl, {
                method: "POST",
                body,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });
            const data = await response.json();
            console.log("Token de acesso:", data.access_token);
            // Aqui você pode armazenar o token de acesso e fazer login no seu sistema
        } catch (error) {
            console.error("Erro ao obter token:", error);
        }
    };

    return (
        <>
            {showWebView ? (
                <Text>teste</Text>
            ) : (
                <Button
                    disabled={isLoading}
                    onClick={handleSubmit}
                    className={"bg-sky-700 text-foreground relative hover:bg-sky-800 text-white"}
                >
                    {isLoading ? (
                        <Spinner />
                    ) : (
                        <>
                            <svg viewBox="6.962 11.584 14 14.035" className="mr-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14.035">
                                <path d="M6.962 11.592h6.757v6.78H6.962z" fill="#f65314" />
                                <path d="M14.129 11.584h6.757v6.78H14.129z" fill="#7cbb00" />
                                <path d="M6.962 18.839h6.757v6.78H6.962z" fill="#00a1f1" />
                                <path d="M14.205 18.839h6.757v6.78h-6.757z" fill="#fb0" />
                            </svg>
                            Entrar com e-mail institucional
                        </>
                    )}
                </Button>
            )}
        </>
    );
}
