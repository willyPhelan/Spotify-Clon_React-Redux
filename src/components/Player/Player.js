import React from "react" ;
import Body from '../Body/Body' ; 
import Sidebar from '../Sidebar/Sidebar' ;
import Footer from '../Footer/Footer'
import SpotifyBody from './styles'


const Player = () => {
    return (
        <div>
        <SpotifyBody>
            <Sidebar/>
            <Body/>
        </SpotifyBody>
        <Footer/>
        </div>
    )
}

export default Player