import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Votecell({ votesAmount }) {
    const [votes, setVotes] = useState(votesAmount);

    const updateVotes = (value) => {
        if (value === "upvote") {
            setVotes(votesAmount + 1);
        } else if (value === "downvote") {
            setVotes(votesAmount - 1);
        } else {
            setVotes(votesAmount);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => updateVotes("upvote")} style={styles.iconButton}>
                <MaterialCommunityIcons name="chevron-up-circle-outline" size={35} color="black" />
            </TouchableOpacity>
            <Text style={styles.voteCount}>{votes}</Text>
            <TouchableOpacity onPress={() => updateVotes("downvote")} style={styles.iconButton}>
                <MaterialCommunityIcons name="chevron-down-circle-outline" size={35} color="black" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconButton: {
        padding: 5,
    },
    voteCount: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 4,
    },
});
