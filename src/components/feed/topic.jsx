import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Linking } from "react-native";
import { dayjs } from "../../components/data/dayjs"; // Certifique-se de que essa função seja compatível com o React Native
import { User } from "../../components/data/topic-data";
import { Badge } from "../../components/ui/badge"; // Adapte a implementação do Badge para React Native
import globalStyles from '../../globalStyles'; // Importe o estilo global
import { useNavigation } from "@react-navigation/native";

export const Topic = ({ item }) => {
    const regex = /[^\p{L}\p{N}\s.,!?()-[\]]/giu;
    const filteredBody = item.text.replace(regex, '');
    const author = User.find(user => user.id == item.userid);
    const navigation = useNavigation();

    // Função para verificar e truncar o título
    const getTruncatedTitle = (title) => {
        if (title.length > 30) {
            return title.substring(0, 30) + '...'; // Trunca o título se tiver mais de 25 caracteres
        }
        return title;
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                console.log('Navegando para topicView com id:', item.id);
                navigation.navigate('topicView', { id: item.id });
            }}
        >
            <View style={styles.header}>
                <View style={styles.titleContainer}>
                    {/* Aplica a função getTruncatedTitle ao título */}
                    <Text style={[styles.title, globalStyles.text]}>
                        {getTruncatedTitle(item.title)}
                    </Text>
                </View>
                {!item.read && <View style={styles.indicator} />}
                <Text style={[styles.date, globalStyles.text]}>
                    {dayjs(item.date).fromNow()}
                </Text>
            </View>
            <TouchableOpacity onPress={() => Linking.openURL(`/perfil/${author.id}/${author.slug}`)}>
                <Text style={[styles.author, globalStyles.text]}>{author.name}</Text>
            </TouchableOpacity>
            <Text style={[styles.body, globalStyles.text]} numberOfLines={2}>
                {filteredBody.substring(0, 300)}
            </Text>
            {item.labels.length > 0 && (
                <View style={styles.badgesContainer}>
                    {item.labels.map((label, i) => (
                        <Badge key={i} variant={getBadgeVariantFromLabel(label)}>
                            <Text onPress={() => Linking.openURL(`/tag/${label}`)} style={globalStyles.text}>
                                {label}
                            </Text>
                        </Badge>
                    ))}
                </View>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 15,
        borderRadius: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        marginVertical: 5,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 3,
    },
    indicator: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: '#007bff',
        marginLeft: 10,
    },
    date: {
        fontSize: 12,
        color: 'gray',
    },
    author: {
        fontSize: 14,
        color: '#007bff',
        marginBottom: 3,
    },
    body: {
        fontSize: 12,
        color: 'gray',
    },
    badgesContainer: {
        flexDirection: 'row',
        marginTop: 5,
    },
});

function getBadgeVariantFromLabel(label) {
    if (["work"].includes(label.toLowerCase())) {
        return "default";
    }

    if (["personal"].includes(label.toLowerCase())) {
        return "outline";
    }

    return "secondary";
}
