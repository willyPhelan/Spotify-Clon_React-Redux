import React from 'react' ;
import {SidebarContainer} from './styles'
import {IoMdHome} from 'react-icons/io'
import {GoSearch} from 'react-icons/go'
import {MdOutlineLibraryMusic} from 'react-icons/md'
import { Playlists } from './styles';
import SidebarChoice from './SidebarChoice'
import './Sidebar.css'
import {RiAddBoxFill} from 'react-icons/ri'
import {BiHeartSquare} from 'react-icons/bi'

const Sidebar = () => {
    return (
        <SidebarContainer> 
            <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' alt='logo'/>
            <SidebarChoice className='sc' title='Home' Icon={IoMdHome}/>
            <SidebarChoice className='sc' title='Search' Icon={GoSearch}/>
            <SidebarChoice className='sc' title='Your Library' Icon={MdOutlineLibraryMusic}/>


            <div className='divc'>
             <SidebarChoice className='sc' title='Create Playlist ' Icon={RiAddBoxFill}/>
             <SidebarChoice className='sc' title='Songs you liked' Icon={BiHeartSquare}/>
            </div>

            <Playlists className='pl'> PLAYLISTS </Playlists>
            <hr/>
            <p className='pa'> Techno // Konguita </p>
            <p className='pa'> Techno </p>
            <p className='pa'> Rock </p>
            <p className='pa'> Chill </p>
            <p className='pa'> Classic </p>
            <p className='pa'> Heavy </p>
            <p className='pa'> Car-Drive </p>
            
            <hr/>
        </SidebarContainer>
    )
}

export default Sidebar; 
