
import { useEffect} from 'react';
import './App.css';
import {Login, getToken} from './components/Login/Login';
import Player from './components/Player/Player';
import {useDispatch, useSelector} from 'react-redux'  ;
import {SET_USER, selectUser} from './features/UserSlice'
import SpotifyWebApi from 'spotify-web-api-js';
import { selectToken, SET_TOKEN } from './features/TokenSlice';
import { SET_PLAYLIST, selectPlaylist} from './features/PlaylistSlice';


const spotify = new SpotifyWebApi()

function App() {
 
  const user = useSelector(selectUser)
  const playlist = useSelector(selectPlaylist)
  const token = useSelector(selectToken)
  const dispatch = useDispatch() ;
  

  useEffect(() => {
    
    const hash = getToken() ; 
    const _token = hash.access_token ;
    
   

    if (_token) { 
    dispatch(SET_TOKEN(_token))
    spotify.setAccessToken(_token) ; 
    spotify.getMe().then( user => dispatch(SET_USER(user))) 
    console.log('token =>', token)
    spotify.getPlaylist('2lIihtbDA2mGuG0pn71nWi').then(playlist => dispatch(SET_PLAYLIST(playlist)))}
    

  }, [dispatch, token])

  return (
    <div className="App">
     { user ? <Player/> : <Login/>}
      
    </div>
  );
}

export default App;
