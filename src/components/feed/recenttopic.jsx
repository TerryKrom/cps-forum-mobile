import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { dayjs } from "../../components/data/dayjs"; // Certifique-se de que a importação funcione em React Native
import { Badge } from "../../components/ui/badge"; // Certifique-se de que o componente Badge seja compatível
import { User } from "../../components/data/topic-data";

export default function RecentTopic({ item }) {
    const author = User.find(user => user.id === item.userid);

    return (
        <TouchableOpacity
            onPress={() => {/* Navegação para o tópico */}}
            style={styles.container}
        >
            <View style={styles.innerContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={styles.authorContainer}>
                    <TouchableOpacity onPress={() => {/* Navegação para o perfil do autor */}}>
                        <Text style={styles.author}>{author.name}</Text>
                    </TouchableOpacity>
                    <Text style={styles.date}>
                        {dayjs(item.date).fromNow()}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 8,
        borderRadius: 8,
        borderColor: '#ccc', // Cor da borda
        borderWidth: 1,
        padding: 12,
        marginVertical: 8,
        backgroundColor: 'white', // Cor de fundo
    },
    innerContainer: {
        flexDirection: 'column',
        width: '100%',
        gap: 4,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontWeight: '600',
        fontSize: 14,
    },
    authorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    author: {
        fontSize: 12,
        fontWeight: '500',
        color: '#007bff', // Cor do texto do autor
    },
    date: {
        marginLeft: 'auto',
        fontSize: 12,
        color: 'gray',
    },
});
