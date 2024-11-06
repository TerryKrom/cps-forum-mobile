import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AccountArea from './accountArea/accountArea';
import MobileSidebar from '../../components/layout/mobilesidebar'; // Verifique se o caminho está correto
import { useTheme } from 'react-native-paper';

export const Logo = () => {
    const navigation = useNavigation();
    const { colors } = useTheme();
    const logoSource = colors.dark ? require('../../../assets/logo-white.svg') : require('../../../assets/logo-black.svg'); // Ajuste o caminho

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={logoSource} style={styles.logo} />
        </TouchableOpacity>
    );
};

function Header() {
    const navigation = useNavigation();

    return (
        <View style={styles.shadowHeader}>
            <View style={styles.leftHeader}>
                <MobileSidebar />
                <Logo />
                <TouchableOpacity style={styles.navItem} onPress={() => {/* lógica para abrir menu */}}>
                    <Text style={styles.navText}>Fórum</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Materiais')}>
                    <Text style={styles.navText}>Materiais</Text>
                </TouchableOpacity>
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
        paddingHorizontal: 16,
    },
    leftHeader: {
        flexDirection: 'row',
        alignItems: 'center',
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
        height: 50, width: 100
    }
});

export default Header;