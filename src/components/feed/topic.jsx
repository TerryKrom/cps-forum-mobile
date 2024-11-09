import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Linking } from "react-native";
import { dayjs } from "../../components/data/dayjs"; // Certifique-se de que essa função seja compatível com o React Native
import { User } from "../../components/data/topic-data";
import { Badge } from "../../components/ui/badge"; // Adapte a implementação do Badge para React Native
import globalStyles from '../../globalStyles'; // Importe o estilo global

export const Topic = ({ item }) => {
    const regex = /[^\p{L}\p{N}\s.,!?()-[\]]/giu;
    const filteredBody = item.text.replace(regex, '');
    const author = User.find(user => user.id == item.userid);

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => Linking.openURL(`/topico/${item.id}/${item.slug}`)} // Navegando para o tópico
        >
            <View style={styles.header}>
                <View style={styles.titleContainer}>
                    <Text style={[styles.title, globalStyles.text]}>{item.title}</Text>
                    {!item.read && <View style={styles.indicator} />}
                </View>
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
