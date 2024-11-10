import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SignInButton from '../../components/signin/signinbutton';
import { useIsAuthenticated } from '@azure/msal-react';

export default function AuthenticationPage() {
    const navigation = useNavigation();
    const isAuthenticated = useIsAuthenticated();

    useEffect(() => {
        if (isAuthenticated) {
            navigation.navigate('Home'); // Navega para a Home se autenticado
        }
    }, [isAuthenticated]);

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                {/* Background ou imagem personalizada */}
                <Image
                    source={require('../../../assets/bg404.png')}
                    style={StyleSheet.absoluteFill}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.signInContainer}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Entre em sua conta</Text>
                        <Text style={styles.subtitle}>
                            Para acessar o fórum, entre com seu e-mail institucional.
                        </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <SignInButton />
                    </View>
                    <Text style={styles.termsText}>
                        Ao clicar em entrar, você concorda com os&nbsp;
                        <TouchableOpacity onPress={() => navigation.navigate('Terms')}>
                            <Text style={styles.link}>Termos de Uso</Text>
                        </TouchableOpacity>
                        &nbsp;e a&nbsp;
                        <TouchableOpacity onPress={() => navigation.navigate('Privacy')}>
                            <Text style={styles.link}>Política de Privacidade</Text>
                        </TouchableOpacity>
                        .
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    leftContainer: {
        flex: 3,
        display: 'none', // Oculta em telas pequenas
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    rightContainer: {
        flex: 2,
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
    },
    signInContainer: {
        alignItems: 'center',
    },
    header: {
        marginBottom: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: '#fff',
    },
    subtitle: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'center',
    },
    buttonContainer: {
        marginVertical: 20,
    },
    termsText: {
        fontSize: 12,
        color: '#fff',
        textAlign: 'center',
        paddingHorizontal: 16,
    },
    link: {
        color: '#a0aec0',
        textDecorationLine: 'underline',
    },
});
