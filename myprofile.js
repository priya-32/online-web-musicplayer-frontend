import React from 'react';
import './myprofile.css';
import videoBg from './assets/song.mp4';
import { Link } from 'react-router-dom';
import {CgProfile} from 'react-icons/cg';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
function Profile()
{

    return(
      <div className="main5">
            <div className="over5">
        <video src={videoBg} autoPlay loop muted/>
          <div className="wrapper5">
        <div className="title-login5">
        <h3>BEATPACE
        </h3>
       
        </div>
        <br/>
        <div className="home5">
          
   <Link to='/MainPage'><b><span>HOME</span></b></Link>
  
   </div>
  
    
    <NavItem >
         <NavIcon><Link to = '/myprofile'><CgProfile className='icon ppprofile'/><i className=' CgProfile' /></Link></NavIcon>
        </NavItem>
      
    <br/>
     <form >
<div className="first5">
 <div className="text5">
     <input type="text" placeholder="FIRST NAME">
         </input>
 </div>
 </div>
 <br/>

 <div className="second5">
 <div className="text5">
     <input type="text" placeholder="LAST NAME">
         </input>
 </div>
 </div>
 <br/>
 <div className="field-btn5">
     <div className="btn-layer5"></div>
     <input type="submit" value="SAVE" >
         </input>
 </div>
   

</form>
</div>
</div>
</div>


    );
}
export default Profile;