import React, { useState, useRef } from 'react';
import { Modal, StyleSheet, Pressable, View, Animated, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { Button } from '../../components/ui/button'; 
import { Logo } from '../../components/header/header'; 
import LeftSidebar from './leftsidebar'; 
import AntDesign from '@expo/vector-icons/AntDesign';

export default function MobileSidebar({ className, ...props }) {
    const [modalVisible, setModalVisible] = useState(false);
    const translateX = useRef(new Animated.Value(-1500)).current;

    const openModal = () => {
        setModalVisible(true);
        Animated.timing(translateX, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const closeModal = () => {
        Animated.timing(translateX, {
            toValue: -1500,
            duration: 300,
            useNativeDriver: true,
        }).start(() => setModalVisible(false));
    };

    return (
        <View style={styles.container}>
            <Button onPress={openModal} variant="outline" size="icon" style={[styles.button, className]} {...props}>
                <Feather name="menu" size={22} color="black" />
            </Button>

            <Modal
                transparent
                visible={modalVisible}
                animationType="none"
                onRequestClose={closeModal}
            >
                <View style={styles.overlay}>
                    <Animated.View style={[styles.modalView, { transform: [{ translateX }] }]}>
                        <ScrollView 
                            contentContainerStyle={styles.scrollViewContainer}
                            indicatorStyle="white" // Ajuste a cor e estilo da barra de rolagem
                            showsVerticalScrollIndicator={true} // Exibe a barra de rolagem vertical
                        >
                            <Logo style={styles.logo} />
                            <LeftSidebar closeModal={closeModal} />
                            <Pressable style={styles.buttonClose} onPress={closeModal}>
                                <AntDesign name="close" size={24} color="black" />
                            </Pressable>
                        </ScrollView>
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
        width: 100,
        borderWidth: 0,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
    },
    modalView: {
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        paddingVertical: 0,
        width: '75%',
        height: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        position: 'absolute',
    },
    scrollViewContainer: {
        flexGrow: 1,  // Isso garante que o conteúdo ocupe o espaço disponível
        justifyContent: 'flex-start',  // Alinha o conteúdo para o início
    },
    logo: {
        width: 125,
        height: 125,
        marginLeft: 5,
    },
    buttonClose: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 30,
        right: 20,
        width: 20,
        height: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: '#555555',
    },
});
