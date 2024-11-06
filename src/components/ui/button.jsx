import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const buttonVariants = {
    default: {
        backgroundColor: 'blue', // Cor primária
        color: 'white',
        padding: 10,
    },
    destructive: {
        backgroundColor: 'red',
        color: 'white',
        padding: 10,
    },
    outline: {
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'transparent',
        padding: 10,
    },
    secondary: {
        backgroundColor: 'green',
        color: 'white',
        padding: 10,
    },
    ghost: {
        backgroundColor: 'transparent',
        color: 'blue',
        padding: 10,
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
        padding: 10,
    },
    forum: {
        backgroundColor: 'blue', // Cor primária
        color: 'white',
        padding: 10,
    },
};

const Button = React.forwardRef(({ variant = 'forum', size = 'default', children, onPress, style, ...props }, ref) => {
    const variantStyles = buttonVariants[variant];
    const sizeStyles = size === 'sm' ? styles.sm : size === 'lg' ? styles.lg : styles.default;

    return (
        <TouchableOpacity
            style={[variantStyles, sizeStyles, style]}
            onPress={onPress}
            ref={ref}
            {...props}
        >
            <Text style={{ color: variantStyles.color }}>
                {children}
            </Text>
        </TouchableOpacity>
    );
});

Button.displayName = "Button";

const styles = StyleSheet.create({
    default: {
        height: 40,
        paddingHorizontal: 16,
    },
    sm: {
        height: 32,
        paddingHorizontal: 16,
    },
    lg: {
        height: 44,
        paddingHorizontal: 32,
    },
});

export { Button, buttonVariants };
