import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSession } from '../../service/msauth/SessionProvider';
import bgImage from '../../../assets/bg404.png';

export default function AuthenticationPage() {
    const navigation = useNavigation();
    const { signIn, session } = useSession();

    return (
        <View style={styles.container}>
            {/* Imagem de plano de fundo */}
            <Image
                source={bgImage}
                style={styles.backgroundImage}
                resizeMode="cover"
            />
            {/* Conteúdo principal */}
            <View style={styles.contentContainer}>
                <View style={styles.signInContainer}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Entre em sua conta</Text>
                        <Text style={styles.subtitle}>
                            Para acessar o fórum, entre com seu e-mail institucional.
                        </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => signIn()}>
                            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Entrar</Text>
                        </TouchableOpacity>
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
    },
    backgroundImage: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '100%',
    },
    contentContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
