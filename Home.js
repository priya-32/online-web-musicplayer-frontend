import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React from 'react';
import {FaHome} from 'react-icons/fa';
import './home.css'
function Home()
{
return (
<SideNav 
onselect = {selected=> 
{
    console.log(selected)
}
}
>
    <SideNav.Toggle/>
    <SideNav.Nav defaultSelected = "home">
        <NavItem >
         <NavIcon><FaHome className='icons home'/><i className='fa fa-fw fa-home' style={{fontSize : "1.5em"}}/></NavIcon>
            <NavText> Home</NavText>
        </NavItem>
    </SideNav.Nav>
</SideNav>
);
}
export default Home;