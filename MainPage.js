import Script from './script.js';
import img from './images/gv prakash.jpg';
import img1 from './images/shreya.jpg';
import img2 from './images/ar rahman.jpg';
import img3 from './images/yuvan.jpg';
import img4 from './images/gv song.jpg';
import img5 from './images/sk.jpg';
import img6 from './images/simbu.jpg';
import img7 from './images/bel.jpg';
import img8 from './images/gom.jpg';
import img9 from './images/sav.jpg';
import img10 from './images/ilai.jpg';
import img11 from './images/bts3.jpg';
import img12 from './images/urvasi.jpg';
import img13 from './images/vaa.jpg';
import img14 from './images/lov.jpg';
import img15 from './images/btrr.jpg';
import img16 from './images/ani.jpg';
import img17 from './images/spb.jpg';
import img18 from './images/hipp.jpg';
import img19 from './images/ttay.jpg';
import img20 from './images/jus.jpg';
import img21 from './images/bell.jpg';
import img22 from './images/sid.jpg';
import img23 from './images/sell.jpg';
import img24 from './images/iragu.jpg';
import img25 from './images/bad.jpg';
import img26 from './images/adi.jpg';
import img27 from './images/yarr.jpg';
import img28 from './images/ennai.jpg';
import img29 from './images/thala.jpg';
import img30 from './images/megam.jpg';
import img31 from './images/two.jpg';
import img32 from './images/pathala.jpg';
import img33 from './images/sun.jpg';
import img34 from './images/kann.jpg';
import img35 from './images/oor.jpg';
import img36 from './images/anbae.jpg';
import img37 from './images/azh.jpg';
import {Link} from 'react-router-dom';
import videoBg from './assets/song.mp4';
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
import './MainPage.css';
import SearchBar from './Search.js';
function MainPage(){
return(
<div className='main2'>
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
<div className='main'>
<div className='overlay1'>
<video src={videoBg} autoPlay loop muted/>
<div className="flexbox-container">
<div className="flexbox-item flexbox-item-1">
<h2>BEATPACE
<br/>
</h2>
<div className='hi'>
<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Artists you may like</p><br/>
<div className='artist'>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;G V Prakash<br/>
<Link to='/Appp'>  <img src={img} height="100" width="130" alt="text"></img><br/></Link> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shreya Goshal<br/>
<Link to='/Songs'><img src={img1} height="100" width="130" alt="text"></img></Link><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A R Rahman<br/>
<Link to='/Songar'><img src={img2} height="100" width="130" alt="text"></img></Link><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;U1 Drugs<br/>
<Link to='/Songu1'><img src={img3} height="100" width="130" alt="text"></img></Link><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ilayaraja hits<br/>
<Link to='/Songilai'><img src={img10} height="100" width="130" alt="text"></img></Link><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BTS<br/>
<Link to='/Songbts'><img src={img11} height="100" width="130" alt="text"></img></Link><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Selena Gomez<br/>
<Link to='/Songselena'><img src={img23} height="100" width="130" alt="text"></img></Link><br/>
</div>
</div>
<div className='made'>
<h4>Made for You</h4>
</div>
<div className='belll'>
<Link to='/Songselena'><img src={img7} height="200" width="150" alt="text"></img></Link>
ARTISTS&nbsp; DAN REYNOLDS<br/>
SONG&nbsp;&nbsp;BELIEVER<br/>
BAND&nbsp;&nbsp;IMAGINE DRAGONS
</div>
<div className='art3'>
<h4>Best Of Artists</h4>
</div>
<div className='art-con'>
<Link to='/SongAni'>  <img src={img16} height="120" width="120" alt="text"/></Link> <br/>
<div className='aniii'>
Anirudh
</div>
<br/>
</div>
<div className='bell2'>
<Link to='/Song19'><img src={img28} height="200" width="150" alt="text"></img></Link>
ARTISTS&nbsp;U1&nbsp;&&nbsp;Sid&nbsp;Sriram<br/>
SONG&nbsp;&nbsp;Ennai&nbsp;Vittu<br/>
Movie&nbsp;&nbsp;Love Today
</div>
<div className='bell3'>
<Link to='/Song23'><img src={img37} height="200" width="150" alt="text"></img></Link>
ARTISTS&nbsp;Vijay&nbsp;Antony<br/>
SONG&nbsp;Azhgai&nbsp;Pookudhey<br/>
MOVIE&nbsp;Ninaithalae&nbsp;Inikum
</div>
</div>
<div className="flexbox-item flexbox-item-2">           
<div className='mrg'>
<br/>
<Script/>
</div>
<div className='pro'>
<SearchBar/>
</div>
<div className='good'>
<div className="song">
<Link to='/Appp'><img src={img4} height="150" width="150" alt="text"></img></Link>
<h4>ARTISTS<br/>G V PRAKASH</h4>&nbsp;&nbsp;
<h4>SONG <br/>Sandalee</h4>&nbsp;&nbsp;
<h4>MOVIE <br/>SEMA</h4>
</div>
<div className='gv'>
<Link to='/Songs'> <img src={img5} height="150" width="150" alt="text"></img></Link>
<h4>ARTISTS<br/>SHREYA GOSHAL</h4>&nbsp;&nbsp;
<h4>SONG <br/>Ennada Ennada</h4>&nbsp;&nbsp;
<h4>MOVIE<br/>Varuthapadadha Valibar Sangam</h4>
</div>
</div>
<div className='ar'>
<div className='shree'>
<Link to='/Songar'>  <img src={img6} height="200" width="150" alt="text"></img></Link>
ARTISTS &nbsp;A R RAHMAN<br/>
SONG&nbsp;&nbsp;RASAALI RASAALI <br/>
MOVIE&nbsp;ACHCHAM&nbsp; YENBADHU&nbsp;MADAMAIYADA
</div>
<div className='bel'>
<Link to='/Songbts'><img src={img7} height="200" width="150" alt="text"></img></Link>
ARTISTS&nbsp; DAN REYNOLDS<br/>
SONG&nbsp;&nbsp;BELIEVER<br/>
BAND&nbsp;&nbsp;IMAGINE DRAGONS
</div>
<div className='who'>
<Link to='/Songselena'><img src={img8} height="200" width="150" alt="text"></img></Link>
ARTISTS &nbsp;&nbsp;SELENA GOMEZ<br/>
SONG&nbsp;&nbsp;WHO SAYS <br/>
BAND&nbsp;&nbsp;SELENA GOMEZ & THE SCENE
</div>
<div className='bts'>
<Link to='/Songbts'><img src={img9} height="200" width="150" alt="text"></img></Link>
ARTISTS &nbsp;&nbsp;JASON DERULO<br/>
SONG&nbsp;&nbsp;SAVAGE LOVE<br/>
BAND&nbsp;&nbsp;LAXED-SIREN BEAT BTS REMIX
</div>
</div>
<div className='arr2'>
<div className='shree2'>
<Link to='/Songmukala'>  <img src={img12} height="200" width="150" alt="text"></img></Link>
ARTISTS &nbsp;Mano , Swarnalatha<br/>
SONG&nbsp;&nbsp;Mukala<br/>
MOVIE&nbsp;&nbsp;Kadhalan
</div>
<div className='bel2'>
<Link to='/Songva'><img src={img13} height="200" width="150" alt="text"></img></Link>
ARTISTS&nbsp;G V Prakash<br/>
SONG&nbsp;&nbsp;Va Vaathi<br/>
MOVIE&nbsp;&nbsp;Vaathi
</div>
<div className='who2'>
<Link to='/Songlove'><img src={img14} height="200" width="150" alt="text"></img></Link>
ARTISTS &nbsp;&nbsp;Ellie Goulding<br/>
SONG&nbsp;&nbsp;Love Me Like You Do<br/>
MOVIE&nbsp;&nbsp;50 Shades
</div>
<div className='bts2'>
<Link to='/Songbutter'><img src={img15} height="200" width="150" alt="text"></img></Link>
ARTISTS &nbsp;&nbsp;BTS<br/>
SONG&nbsp;&nbsp;Butter<br/>
BAND&nbsp;&nbsp;BTS
</div>
</div>
<div className='good2'>
<div className='bel3'>
<Link to='/Songu1'><img src={img24} height="200" width="150" alt="text"></img></Link>
ARTISTS&nbsp;U1<br/>
SONG&nbsp;&nbsp;Iragai Poley<br/>
MOVIE&nbsp;&nbsp;Naan&nbsp;Magan&nbsp;Alla
</div>
<div className='who3'>
<Link to='/Songzayn'><img src={img25} height="200" width="150" alt="text"></img></Link>
ARTISTS &nbsp;&nbsp;Bellie Eillish<br/>
SONG&nbsp;&nbsp;Bad Guy<br/>
BAND&nbsp;&nbsp;Bad Guy
</div>
<div className='bts3'>
<Link to='/Songaadhi'><img src={img26} height="200" width="150" alt="text"></img></Link>
ARTISTS &nbsp;&nbsp;HipHop Aadhi<br/>
SONG&nbsp;&nbsp;Adiyah&nbsp;Sakarakatti<br/>
MOVIE&nbsp;&nbsp;Meesaya&nbsp;Murukku
</div>
<div className='bts3'>
<Link to='/Song28'><img src={img27} height="200" width="150" alt="text"></img></Link>
ARTISTS &nbsp;&nbsp;SidSriram<br/>
SONG&nbsp;Yaar Azhaipadhu&nbsp;<br/>
MOVIE&nbsp;&nbsp;Maara
</div>
</div>
<div className='arists-con'>
<div className='art12'>
<Link to='/Songspb'><img src={img17} height="120" width="120" alt="text"/></Link><br/>
<div className='text-con'>  
S. P. B
</div>
</div>
<div className='art22'>
<Link to='/Songaadhi'><img src={img18} height="120" width="120" alt="text"/></Link><br/>
<div className='text1-con'>  
Aadhi
</div>
</div>
<div className='art32'>
<Link to='/Songtaylor'><img src={img19} height="120" width="120" alt="text"/></Link><br/>
<div className='text2-con'>  
Taylor Swift
</div>
</div>
<div className='art42'>
<Link to='/Songjustin'><img src={img20} height="120" width="120" alt="text"/></Link><br/>
<div className='text3-con'>  
Justin Beiber
</div>
</div>
<div className='art52'>
<Link to='/Songzayn'><img src={img21} height="120" width="120" alt="text"/></Link><br/>
<div className='text3-con'>  
&nbsp;Bellie Eilish
</div>
</div>
<div className='art62'>
<Link to='/Song26'><img src={img22} height="120" width="120" alt="text"/></Link><br/>
<div className='text3-con'>  
Sid Sriram
</div>
</div>
</div>
<div className='hd3'>
<h5>Today's biggest hits</h5>
</div>
<div className='good3'>
<div className='bel3'>
<Link to='/Song20'><img src={img29} height="200" width="150" alt="text"></img></Link>
ARTISTS&nbsp;STR<br/>
SONG&nbsp;Thee&nbsp;Thalapathy<br/>
Movie&nbsp;&nbsp;Varisu
</div>
<div className='who3'>
<Link to='/Song21'><img src={img30} height="200" width="150" alt="text"></img></Link>
ARTISTS&nbsp;Anirudh&nbsp;Dhanush<br/>
SONG&nbsp;Megam&nbsp;Karukadha<br/>
MOVIE&nbsp;Thiruchitrambalam
</div>
<div className='bts3'>
<Link to='/SongAni'><img src={img31} height="200" width="150" alt="text"></img></Link>
ARTISTS &nbsp;&nbsp;Anirudh<br/>
SONG&nbsp;Dippam&nbsp;Dappam<br/>
MOVIE&nbsp;Kathu&nbsp;Vakula&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rendu Kadhal
</div>
<div className='bts4'>
<Link to='/Song22'><img src={img32} height="200" width="150" alt="text"></img></Link>
ARTISTS &nbsp;&nbsp;Anirudh<br/>
SONG&nbsp;Pathala&nbsp;Pathala<br/>
MOVIE&nbsp;&nbsp;Vikram
</div>
</div>
<div className='hd5'>
<h5>90 ' S & 20 ' S hits</h5>
</div>
<div className='good8'>
<div className='bel4'>
<Link to='/Song24'><img src={img33} height="200" width="150" alt="text"></img></Link>
ARTISTS&nbsp;S.P.B<br/>
SONG&nbsp;Sundari&nbsp;Kannal &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Oru&nbsp;Sedhi<br/>
MOVIE&nbsp;&nbsp;Thalapathy-1991
</div>
<div className='who8'>
<Link to='/Song28'><img src={img34} height="200" width="150" alt="text"></img></Link>
ARTISTS &nbsp;Harish&nbsp;Kalyan<br/>
SONG&nbsp;Kannamma<br/>
MOVIE&nbsp;Ispade&nbsp;Rajavum&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Idhaya&nbsp;Raniyum
</div>
<div className='bts8'>
<Link to='/Song26'><img src={img35} height="200" width="150" alt="text"></img></Link>
ARTISTS &nbsp;Harris&nbsp;Jayaraj<br/>
SONG&nbsp;Oorellam&nbsp;Unnai&nbsp;<br/>
MOVIE&nbsp;Nanbenda&nbsp;
</div>
<div className='bts9'>
<Link to='/Song27'><img src={img36} height="200" width="150" alt="text"></img></Link>
ARTISTS &nbsp;G&nbsp;V&nbsp;Prakash<br/>
SONG&nbsp;Anbae&nbsp;Anbae<br/>
MOVIE&nbsp;&nbsp;Darling
</div>
</div>
</div>
</div>
</div>
</div>
</div>
);
}
export default MainPage;