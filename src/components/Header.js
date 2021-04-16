import React from 'react';

import LanguageSelect from './LanguageSelect';
import { getCookie } from '../helpers/auth';
import {  REACT_APP_Client_URL } from '../constants';



const deplace=()=>{
  window.location.replace(REACT_APP_Client_URL);
}
const deplace1=()=>{
window.location.replace(REACT_APP_Client_URL)
}
const username=getCookie("username");
const Header=({history})=>{
    return(
        <header>
<div id="main-menu" className="menu-init"> 
<nav>
        <ul>
        <li className="current-menu-item animfadeInRight" data-time="300">
            <LanguageSelect />

</li>
            <li className="current-menu-item animfadeInRight" data-time="400"><a href="/">Home</a> 
           
            </li>
            <li className="animfadeInRight" data-time="500"><a href="/m/about">About Us</a></li>
            <li className="animfadeInRight" data-time="600"><a href="/m/services">Services</a>
            
            </li>
            <li className="animfadeInRight" data-time="700"><a href="/m/places">Places</a>
           
            </li>
            <li className="animfadeInRight" data-time="800"><a href="/m/contact">Contact</a></li>

             <li className="animfadeInRight" data-time="900">

             {
                      username? (<a style={{textDecoration:"none"}} onClick={deplace1}>{username}</a>): (<a style={{textDecoration:"none"}} onClick={deplace}>Login</a>)
                    }
             </li>
           
        </ul>
</nav>   
</div>
     <div className="anim-nav" id="nav-icon">
         <div className="menu-line"></div>
         <div className="menu-line1"></div>
         <div className="menu-line2"></div>
     </div>
</header>
    )
}
export default Header;