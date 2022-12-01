import React from'react';
import { LoginButton, LoginContainer } from './styles';

const endpoint= 'https://accounts.spotify.com/authorize' ;
const clientID = '09896a4e2e9e497e8039d889683486b7' ;
const redirectUri = 'http://localhost:3000' ;
const scopes = ['user-read-currently-playing',
                'user-read-recently-played',
                'user-read-playback-state',
                'user-top-read',
                'user-modify-playback-state',]

const loginUrl = `${endpoint}?client_id=${clientID}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&show_dialog=true`;

const getToken = () => { 
    return window.location.hash.substring(1).split('&').reduce((initial, item) => {  // window.location.hash -> accede a todo lo que esta despues de # en la url // Substring -> extrae el primer caracter(lo saca), e imprime el resto de la cadena del string
        let parts = item.split('=')  // el metodo split divivde un string en un array de cadenas dividiendo por lo que le pase por parametro 'cadena&string&cadena -> [cadena], [string], [cadena]
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial }, {})
   }

const Login = () => {
   
    return (
    <LoginContainer>
        <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' alt='logo'/>
        <LoginButton href={loginUrl}>Login with spotify </LoginButton>
    </LoginContainer>
    )
}

export {Login, getToken} ;;