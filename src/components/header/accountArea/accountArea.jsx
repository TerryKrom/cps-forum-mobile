import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useIsAuthenticated } from "@azure/msal-react";
import { useNavigation } from '@react-navigation/native';
import { initialized } from "@/service/msal/MyMsalProvider";
import AccountButton from "./accountBtn";
import { RequestProfileData } from "@/service/msal/graph";

function AccountArea() {
  const [graphData, setGraphData] = React.useState(null);
  const [picurl, setPicurl] = React.useState(null);
  const isAuthenticated = useIsAuthenticated();
  const navigation = useNavigation();

  async function setData() {
    const { graphData, url } = await RequestProfileData();
    setGraphData(graphData);
    setPicurl(url);
  }

  React.useEffect(() => {
    if (isAuthenticated && initialized) {
      setData();
    }
  }, [isAuthenticated, initialized]);

  return (
    isAuthenticated ? (
      <AccountButton picurl={picurl} graphData={graphData} />
    ) : (
      <TouchableOpacity 
        onPress={() => navigation.navigate('SignIn')} 
        style={{ height: 32, width: 150, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text style={{ color: 'hsl(var(--foreground))' }}>Entre em sua conta</Text>
      </TouchableOpacity>
    )
  );
}

export default AccountArea;
