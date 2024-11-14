import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function NewTopicButton() {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('criar')} // Nome ajustado para coincidir com o Stack
            style={styles.newTopic}
        >
            <Text style={{color: '#fff', fontWeight: '600', fontFamily: 'Geist-200'}}>
            <AntDesign name="form" size={14} color="#fff" style={{marginRight: 8}}/>
                Novo Tópico
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    newTopic: {
        backgroundColor: '#4594ff',
        color: "#ffffff",
        borderRadius: '20px',
        height: '40px',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        fontFamily: 'Geist-200'
    }
})
