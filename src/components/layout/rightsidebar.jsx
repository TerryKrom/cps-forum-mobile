import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Topic } from '../../components/data/topic-data';
import RecentFeed from '../feed/recentfeed';
import PageTitle from './pagetitle';

export default function RightSidebar() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.sectionContainer}>
                <PageTitle title="Seções seguidas" />
                <View style={styles.loginPrompt}>
                    <Text style={styles.loginText}>Entre para ver suas seções seguidas</Text>
                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={() => navigation.navigate('SignIn')} // substitua 'SignIn' pelo nome da tela de login
                    >
                        <Text style={styles.loginButtonText}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.sectionContainer}>
                <PageTitle title="Tópicos mais recentes" />
                <RecentFeed items={Topic} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    sectionContainer: {
        marginBottom: 16,
    },
    loginPrompt: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        borderColor: '#ccc',
    },
    loginText: {
        fontSize: 12,
        fontWeight: '600',
    },
    loginButton: {
        height: 24,
        paddingHorizontal: 8,
        backgroundColor: '#007AFF', // ou outra cor que combine com seu tema
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButtonText: {
        fontSize: 12,
        color: '#fff',
    },
});
