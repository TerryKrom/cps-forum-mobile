import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '../../components/ui/button'; // Assegure-se de que o caminho está correto
import { Menu } from 'lucide-react'; // Verifique se você pode usar esta biblioteca no React Native
import { Logo } from '../../components/header/header'; // Ajuste a importação se necessário
import LeftSidebar from './leftsidebar'; // Assegure-se de que o caminho está correto

export default function MobileSidebar({ className, ...props }) {
    // O estado de visibilidade do menu pode ser controlado aqui
    const [isVisible, setIsVisible] = React.useState(false);

    const toggleSidebar = () => {
        setIsVisible(!isVisible);
    };

    return (
        <View style={styles.container}>
            <Button onPress={toggleSidebar} variant="outline" size="icon" style={[styles.button, className]} {...props}>
                <Menu className="h-5 w-5" />
                <Text style={styles.buttonText}>Abrir menu lateral</Text> {/* Texto acessível */}
            </Button>
            {isVisible && (
                <View style={styles.sheetContent}>
                    <Logo style={styles.logo} />
                    <LeftSidebar />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        // Adicione o estilo que você desejar
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#f8f8f8', // Cor do botão
    },
    buttonText: {
        display: 'none', // Para ocultar o texto se você não precisar dele visivelmente
    },
    sheetContent: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '80%', // Ajuste conforme necessário
        height: '100%', // Ajuste conforme necessário
        backgroundColor: '#fff', // Cor de fundo do conteúdo do menu
        padding: 16,
        elevation: 5, // Sombra para o efeito do modal
    },
    logo: {
        width: 125,
        height: 125,
        marginBottom: 20,
        alignSelf: 'center',
    },
});
