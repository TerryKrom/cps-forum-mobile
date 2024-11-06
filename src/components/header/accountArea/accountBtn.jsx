import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { useNavigation } from '@react-navigation/native';
import { handleLogout } from "../../../service/msal/msal";

export default function AccountButton({ picurl, graphData }) {
    const navigation = useNavigation();

    return (
        graphData ? (
            <Popover>
                <PopoverTrigger asChild>
                    <Avatar>
                        {picurl ? (
                            <AvatarImage src={picurl} />
                        ) : null}
                        <AvatarFallback>
                            {graphData.givenName.charAt(0) + graphData.surname.charAt(0)}
                        </AvatarFallback>
                    </Avatar>
                </PopoverTrigger>
                <PopoverContent side={"bottom"} align={"end"}>
                    <View style={{ flexDirection: 'column', marginBottom: 16 }}>
                        <Text style={{ fontSize: 18, fontWeight: '500' }}>{graphData.displayName}</Text>
                        <Text style={{ fontSize: 14, color: '#888' }}>{graphData.mail}</Text>
                    </View>
                    <View style={{ flexDirection: 'column', gap: 8 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Criar')} style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                            <FontAwesome name="pencil-square-o" size={15} color="black" />
                            <Text style={{ fontSize: 14 }}>Enviar mensagem</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Perfil')} style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                            <Feather name="user" size={15} color="black" />
                            <Text style={{ fontSize: 14 }}>Meu perfil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Configuracoes')} style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                            <Feather name="settings" size={15} color="black" />
                            <Text style={{ fontSize: 14 }}>Configurações</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleLogout('redirect')} style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                            <MaterialIcons name="logout" size={15} color="black" />
                            <Text style={{ fontSize: 14 }}>Sair</Text>
                        </TouchableOpacity>
                    </View>
                </PopoverContent>
            </Popover>
        ) : null
    );
}
