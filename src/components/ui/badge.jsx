import React from "react";
import { View, Text, StyleSheet } from "react-native";

const badgeVariants = {
    default: {
        borderColor: 'transparent',
        backgroundColor: '#3b82f6', // bg-primary
        color: '#ffffff', // text-primary-foreground
    },
    secondary: {
        borderColor: 'transparent',
        backgroundColor: '#f59e0b', // bg-secondary
        color: '#000000', // text-secondary-foreground
    },
    destructive: {
        borderColor: 'transparent',
        backgroundColor: '#ef4444', // bg-destructive
        color: '#ffffff', // text-destructive-foreground
    },
    outline: {
        borderColor: '#000000', // text-foreground
        backgroundColor: 'transparent',
        color: '#000000', // text-foreground
    },
};

function Badge({ variant = "default", className, children }) {
    const variantStyles = badgeVariants[variant];

    return (
        <View style={[styles.badge, variantStyles, className]}>
            <Text style={[styles.text, { color: variantStyles.color }]}>
                {children}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    badge: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 3,
        textAlign: 'center',
    },
    text: {
        fontSize: 12,
        fontWeight: '600',
    },
});

export { Badge };
