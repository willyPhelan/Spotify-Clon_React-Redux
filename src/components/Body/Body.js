import React from "react";
import {BodyContainer, Info, InfoText, Songs, Icons} from './styles'
import Header from './Header' ; 
import SongRow from './SongRow' ;
import {useSelector} from 'react-redux' ; 
import { selectPlaylist } from "../../features/PlaylistSlice";
import {BsFillPlayCircleFill, BsFillHeartFill} from 'react-icons/bs'
import {MdOutlineMoreHoriz} from 'react-icons/md'

const Body = () => {
    const playlist = useSelector(selectPlaylist) ;
    console.log('playlist =>', playlist)
    return (
        <BodyContainer>
            <Header/>
            <Info>
                <img src={playlist?.images[0]?.url}alt='no-img'/>
                <InfoText>
                    <h4 className="h4">Playlist</h4>
                    <h3 className="h33"> Discover Weekley </h3>
                    <h1 className="h11"> Techno // {playlist?.name} </h1>
                    <p > RaveMusic • 68'likes' • 72 Songs, 14 h 6 min </p>
                </InfoText>
                
                </Info>
                <hr className="hr"/>
                <Songs>
                    <Icons>
                        <BsFillPlayCircleFill className="playButton"/>
                        <BsFillHeartFill className="heart"/>
                        <MdOutlineMoreHoriz className="puntos"/>
                    </Icons> 
                  
                    {playlist?.tracks?.items.map((item ,index) => (
                     <SongRow track={item.track} key={index} />
                    ))}
                </Songs> 
            
        </BodyContainer>
    )
}

export default Body;
