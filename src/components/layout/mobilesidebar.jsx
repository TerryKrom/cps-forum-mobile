import React, { useState, useRef } from 'react';
import { Modal, StyleSheet, Text, Pressable, View, Animated } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Ícones do Expo
import { Button } from '../../components/ui/button'; // Ajuste conforme necessário
import { Logo } from '../../components/header/header'; // Ajuste a importação se necessário
import LeftSidebar from './leftsidebar'; // Ajuste o caminho conforme necessário
import AntDesign from '@expo/vector-icons/AntDesign';

export default function MobileSidebar({ className, ...props }) {
    // Controle de visibilidade do modal e animação
    const [modalVisible, setModalVisible] = useState(false);
    const translateX = useRef(new Animated.Value(-1500)).current; // Inicializar fora da tela

    const openModal = () => {
        setModalVisible(true);
        Animated.timing(translateX, {
            toValue: 0, // Traz o modal para o centro da tela
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const closeModal = () => {
        Animated.timing(translateX, {
            toValue: -1500, // Volta para fora da tela
            duration: 300,
            useNativeDriver: true,
        }).start(() => setModalVisible(false));
    };

    return (
        <View style={styles.container}>
            {/* Botão de abrir o modal */}
            <Button onPress={openModal} variant="outline" size="icon" style={[styles.button, className]} {...props}>
                <Feather name="menu" size={20} color="black" />
                <Text style={styles.buttonText}>Abrir menu lateral</Text>
            </Button>

            {/* Modal com animação de slide */}
            <Modal
                transparent
                visible={modalVisible}
                animationType="none" // Desativa a animação padrão do Modal
                onRequestClose={closeModal}
            >
                <View style={styles.overlay}>
                    <Animated.View style={[styles.modalView, { transform: [{ translateX }] }]}>
                        <Logo style={styles.logo} />
                        <LeftSidebar />
                        <Pressable style={styles.buttonClose} onPress={closeModal}>
                         <AntDesign name="closesquareo" size={24} color="black" />
                        </Pressable>
                    </Animated.View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        borderRadius: 5,
        backgroundColor: 'transparent',
        border: 'none',
    },
    buttonText: {
        display: 'none',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo transparente escuro
        justifyContent: 'center',
    },
    modalView: {
        backgroundColor: 'white',
        paddingHorizontal: 30,
        paddingVertical: 5,
        width: '75%', // Tela cheia
        height: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        position: 'absolute',
        overflow: 'scroll',
    },
    logo: {
        width: 125,
        height: 125,
        marginLeft: 5,
    },
    buttonClose: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 35,
        right: 20,
        width: 20,
        height: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: '#555555',
    },
});
