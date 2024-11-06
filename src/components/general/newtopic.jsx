import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { cn } from '../../lib/utils'; // Certifique-se de que 'cn' está funcionando como esperado
import { buttonVariants } from '../../components/ui/button';

export default function NewTopicButton() {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
    onPress={() => navigation.navigate('criar')}
    style={{ backgroundColor: 'blue', padding: 10 }}
>
    <Text style={{ color: 'white' }}>Novo tópico</Text>
</TouchableOpacity>

    );
}
