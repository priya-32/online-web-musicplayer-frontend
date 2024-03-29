import { useState } from 'react';
import './App.css';
import AudioFiles16 from './components/Audiofiles16';
import { audios16 } from './AudioData16';
import Player16 from './components/Player16';
import {Link} from "react-router-dom";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React from 'react';
import {AiFillHome} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import {SlPlaylist} from 'react-icons/sl';
import {MdLibraryMusic} from 'react-icons/md';
import {FcLike} from 'react-icons/fc';
import {FcMusic} from 'react-icons/fc';
import {FcLikePlaceholder} from 'react-icons/fc';
function Songmukala() {
  const [songs, setSongs]= useState(audios16);
  const [CurrentIndex, setCurrentIndex] = useState(null);
  const [currentSong, setCurrentSong] = useState(songs[0])
  const getSongData =(song, index) => {
    setCurrentIndex(index)
    setCurrentSong(song)
  }

  const nextSong = () => {
    setCurrentIndex(CurrentIndex + 1)
    setCurrentSong(audios16[CurrentIndex + 1])
  }

  const prevSong = () => {
    setCurrentIndex(CurrentIndex - 1)
    setCurrentSong(audios16[CurrentIndex - 1])
  }

  return (
    <>
    <div className='sidenav'>
                    <SideNav 
onselect = {selected=> 
{
    console.log(selected)
}
}
className='mysidenav'
>
    <SideNav.Toggle/>
    <SideNav.Nav defaultSelected = "home">
        <NavItem >
         <NavIcon><Link to = '/MainPage'><AiFillHome className='icons home'/></Link></NavIcon>
            <NavText>
                <div className='homme'>
             <Link to='/MainPage'>
                &nbsp;&nbsp;Home</Link> 
                </div>
                </NavText>
        </NavItem>
        <NavItem >
         <NavIcon><Link to = '/myprofile'><CgProfile className='icons pprofile'/><i className=' CgProfile' /></Link></NavIcon>
            <NavText>
                <div className='sixe'>
                <Link to='/myprofile'>
                    &nbsp;&nbsp;Profile
                    </Link>
                    </div>
            </NavText>
        </NavItem>
        <NavItem >
         <NavIcon><Link to = '/Appp'><SlPlaylist className='icons pplay'/><i className=' playlist' /></Link></NavIcon>
            <NavText>
                <div className='six'>
                <Link to='/Appp'>
              &nbsp; Create Playlist
              </Link>
                </div>
            </NavText>
        </NavItem>
        <NavItem >
         <NavIcon><Link to = '/Songs'><MdLibraryMusic className='icons ppllay'/><i className=' playlist' /></Link></NavIcon>
            <NavText>
                <div className='seven'>
                <Link to='/Appp'>
                &nbsp; Your Library
                </Link>
                </div>
            </NavText>
        </NavItem>
        <NavItem >
         <NavIcon><Link to = '/SongAni'><FcLike className='icons ppllay'/><i className=' playlist' /></Link></NavIcon>
            <NavText>
                <div className='seven'>
                <Link to='/Appp'>
                &nbsp; Liked songs
                </Link>
                </div>
            </NavText>
        </NavItem>
       <hr/>
       <p>&nbsp;&nbsp;Tamil Albumn Songs<FcMusic/></p><br/>
       <p>&nbsp;&nbsp;My Playlist <FcLikePlaceholder/>#</p>
    </SideNav.Nav>
</SideNav>
</div>
      <div className='player-main'>
      
        <Player16 
        currentSong={currentSong}
        CurrentIndex={CurrentIndex}
        nextSong={nextSong}
        prevSong={prevSong}
        />
      </div>  
    </>
  );
}
export default Songmukala;
