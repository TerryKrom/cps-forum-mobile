import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, FlatList } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; // Importando ícones do vector-icons
import { Avatar } from "../../components/ui/avatar"; // Presumindo que você tenha um componente Avatar similar em React Native
import { User } from "../../components/data/topic-data";

const users = User;

export default function NewChatButton() {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedUsers, setSelectedUsers] = useState([]);

    const toggleUserSelection = (user) => {
        if (selectedUsers.includes(user)) {
            setSelectedUsers(selectedUsers.filter((selectedUser) => selectedUser !== user));
        } else {
            setSelectedUsers([...selectedUsers, user]);
        }
    };

    return (
        <>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={{ padding: 10 }}>
                <MaterialIcons name="add" size={24} color="black" />
                <Text style={{ display: 'none' }}>Nova mensagem</Text>
            </TouchableOpacity>
            <Modal
                visible={modalVisible}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 20, marginBottom: 10 }}>Nova mensagem</Text>
                    <Text style={{ marginBottom: 20 }}>Convide um ou mais usuários para uma conversa.</Text>
                    <FlatList
                        data={users}
                        keyExtractor={(user) => user.email}
                        renderItem={({ item: user }) => (
                            <TouchableOpacity
                                onPress={() => toggleUserSelection(user)}
                                style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                                <Avatar src={user.pic} />
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ fontWeight: 'bold' }}>{user.name}</Text>
                                    <Text style={{ color: 'gray' }}>{user.email}</Text>
                                </View>
                                {selectedUsers.includes(user) && (
                                    <MaterialIcons name="check" size={24} color="blue" style={{ marginLeft: 'auto' }} />
                                )}
                            </TouchableOpacity>
                        )}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                        {selectedUsers.length > 0 ? (
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                {selectedUsers.map((user) => (
                                    <Avatar key={user.email} src={user.avatar} />
                                ))}
                            </View>
                        ) : (
                            <Text style={{ color: 'gray' }}>Selecione um usuário para criar a conversa.</Text>
                        )}
                        <TouchableOpacity
                            disabled={selectedUsers.length < 1}
                            onPress={() => {
                                setModalVisible(false);
                                // Continue to chat logic
                            }}
                            style={{
                                backgroundColor: selectedUsers.length < 1 ? 'gray' : 'blue',
                                padding: 10,
                                borderRadius: 5,
                            }}>
                            <Text style={{ color: 'white' }}>Continuar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
}
