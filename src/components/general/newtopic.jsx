import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NewTopicButton() {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('criar')} // Nome ajustado para coincidir com o Stack
            style={{ backgroundColor: 'blue', padding: 10 }}
        >
            <Text style={{ color: 'white' }}>Novo Tópico</Text>
        </TouchableOpacity>
    );
}
