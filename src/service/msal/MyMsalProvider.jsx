'use client'

import React, { useEffect } from "react";
import { getToken, initializeMsal, msalInstance } from "../msal/msal";
import { MsalProvider } from "react-native-msal"

export var [initialized, setInitialized] = ''

export default function MyMsalProvider({children}) {
    [initialized, setInitialized] = React.useState(false)
    useEffect(() => {
        initializeMsal()
    }, []);

    return (
        <MsalProvider instance={msalInstance}>
            {children}
        </MsalProvider>
    );
};