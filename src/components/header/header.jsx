import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AccountArea from './accountArea/accountArea';
import MobileSidebar from '../../components/layout/mobilesidebar'; // Verifique se o caminho está correto

export const Logo = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={require('../../../assets/logo-black.png')} style={styles.logo} />
        </TouchableOpacity>
    );
};

function Header() {
    return (
        <View style={styles.shadowHeader}>
            <View style={styles.leftHeader}>
                <MobileSidebar />
                <Logo />
            </View>
            <View style={styles.rightHeader}>
                <AccountArea />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    shadowHeader: {
        height: 56,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginTop: 15,
    },
    leftHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 175
    },
    rightHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    navItem: {
        marginHorizontal: 8,
    },
    navText: {
        fontSize: 16,
        color: '#000',
    },
    logo: {
        height: 75, width: 125
    },
});

export default Header;