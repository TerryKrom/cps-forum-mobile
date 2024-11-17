import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Markdown from "react-native-markdown-display";
import dayjs from "dayjs";
import { useNavigation } from "@react-navigation/native";
import { Topic, User } from "../../../components/data/topic-data";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Votecell from "../../../components/general/votecell";

export default function TopicView({ route }) {
    const { id } = route.params;
    const topic = Topic.find(topic => topic.id === id);  // Encontra o tópico
    const author = topic ? User.find(user => user.id === topic.userid) : null;  // Encontra o autor
    
    const navigation = useNavigation();
    if (!topic || !author) {
        return <Text>Carregando...</Text>; // Mensagem enquanto os dados são carregados
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{topic.title}</Text>
                    <View style={styles.subtitle}>
                        <Text style={styles.subtitleText}>
                            Postado {dayjs(topic.date).fromNow()}
                        </Text>
                        <Text style={styles.subtitleText}>
                            Visto {topic.views} vezes
                        </Text>
                    </View>
                </View>
                <View style={styles.moreOptions}>
                    <TouchableOpacity style={styles.option}>
                        <MaterialCommunityIcons name="pencil" size={15} color="black" />
                        <Text style={styles.optionText}>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                        <MaterialCommunityIcons name="flag" size={15} color="black" />
                        <Text style={styles.optionText}>Reportar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.mainContent}>
                <Markdown style={styles.markdown}>{topic.text}</Markdown>
                <Votecell votesAmount={topic.votes} />
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Postado por</Text>
                <TouchableOpacity
                    style={styles.authorContainer}
                    onPress={() => navigation.navigate("UserProfile", { userId: author.id })}
                >
                    <Image source={{ uri: author.pic }} style={styles.authorImage} />
                    <Text style={styles.authorName}>{author.name}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#fff",
        flexGrow: 1, // Garante que a tela ocupe a altura toda
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    titleContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: "600",
        color: "#333",
    },
    subtitle: {
        flexDirection: "row",
        marginTop: 4,
    },
    subtitleText: {
        color: "#666",
        fontSize: 12,
        marginRight: 10,
    },
    moreOptions: {
        flexDirection: "row",
    },
    option: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
    },
    optionText: {
        marginLeft: 4,
        color: "#007bff",
    },
    separator: {
        marginVertical: 10,
    },
    mainContent: {
        flexDirection: "column", // Certifique-se de que o conteúdo principal empilhe verticalmente
        marginTop: 10,
    },
    markdown: {
        flex: 1, // Isso garante que o conteúdo Markdown ocupe toda a largura disponível
        paddingLeft: 10,
        marginBottom: 10, // Um pequeno espaço extra após o texto
    },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },
    footerText: {
        fontSize: 12,
        color: "#666",
    },
    authorContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 5,
    },
    authorImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 8,
    },
    authorName: {
        fontSize: 14,
        color: "#007bff",
    },
});
