import React from "react";
import {SongInfo, SongRowContainer} from './styles'

const SongRow = ({track}) => {

    return (
        <SongRowContainer>
            <img src={track.album.images[0].url} alt='no-img'/> 
        <SongInfo>
            <h4>{track.name}</h4>
            <p>{
                track.artists.map(artist => artist.name).join(', ')}
               {}  { track.album.name }
            </p>
        </SongInfo>
        </SongRowContainer>
    ) } 


export default SongRow ; 