import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { useIsAuthenticated } from "@azure/msal-react";
import { useNavigation } from '@react-navigation/native';
import { initialized } from "@/service/msal/MyMsalProvider";
import AccountButton from "./accountBtn";
import { RequestProfileData } from "@/service/msal/graph";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

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
        onPress={() => navigation.navigate('signin')} 
      >
        <MaterialCommunityIcons style={styles.accountBtn} name="account-outline" size={30} color="#454545"/>
      </TouchableOpacity>
    )
  );
}

const styles = StyleSheet.create({
  accountBtn: {
    borderWidth: 2,
    borderColor: '#252525',
    borderStyle: 'solid',
    borderRadius: 100,
    marginRight: 10,
  }
});

export default AccountArea;
