import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { initialized } from "@/service/msal/MyMsalProvider";
import AccountButton from "./accountBtn";
// import { RequestProfileData } from "/service/msal/graph";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useSession } from '../../../service/msauth/SessionProvider';

function AccountArea() {
  const [picurl, setPicurl] = React.useState(null);
  const navigation = useNavigation();
  const {session, user} = useSession();

  // async function setData() {
  //   const { graphData, url } = await RequestProfileData();
  //   setGraphData(graphData);
  //   setPicurl(url);
  // }

  // React.useEffect(() => {
  //   if (isAuthenticated && initialized) {
  //     // setData();
  //   }
  // }, [isAuthenticated, initialized]);

  return (
    session && user ? (
      <Text>{user.surname}</Text>
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
