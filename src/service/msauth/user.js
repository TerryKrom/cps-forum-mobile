import * as SecureStore from 'expo-secure-store';
import { getToken } from './token';

export async function getUserInfo(){
    const accessToken = await getToken();
    const request = await fetch('https://graph.microsoft.com/v1.0/me', {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
    });
    const userInfo = await request.json();
    return userInfo;
}