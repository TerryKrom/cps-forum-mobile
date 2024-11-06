import React, { useState } from 'react';
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Ícones do Expo
import { Button } from '../../components/ui/button'; // Ajuste conforme necessário
import { Logo } from '../../components/header/header'; // Ajuste a importação se necessário
import LeftSidebar from './leftsidebar'; // Ajuste o caminho conforme necessário

export default function MobileSidebar({ className, ...props }) {
    // Controle de visibilidade do modal
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            {/* Botão de abrir o modal */}
            <Button onPress={() => setModalVisible(true)} variant="outline" size="icon" style={[styles.button, className]} {...props}>
                <Feather name="menu" size={20} color="black" /> {/* Ícone de menu */}
                <Text style={styles.buttonText}>Abrir menu lateral</Text> {/* Texto acessível */}
            </Button>

            {/* Modal com animação de slide */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Logo style={styles.logo} />
                        <LeftSidebar />
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>X</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#f8f8f8',
    },
    buttonText: {
        display: 'none', // Texto acessível
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 0,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 0,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '100%', // Tamanho do modal
        overflow: 'scroll',
        height: '100vh',
        position: 'relative'
    },
    logo: {
        width: 125,
        height: 125,
        alignSelf: 'center',
    },
    buttonClose: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 10,
        right: 10
    },
    textStyle: {
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
