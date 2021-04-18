import React from 'react';

import LanguageSelect from './LanguageSelect';
import { getCookie } from '../helpers/auth';
import {  REACT_APP_Client_URL } from '../constants';
import { Link } from 'react-router-dom';



const deplace=()=>{
  window.location.replace(REACT_APP_Client_URL);
}
const deplace1=()=>{
window.location.replace(REACT_APP_Client_URL)
}
const username=getCookie("username");
const HeaderA=({history})=>{
    return(
        <div id="myheader" >
        <div id="logo" className="brand-expedition noselect " data-time="0">
    <h4> <a href="/">Zaghouane</a></h4>
 
  </div>
        <header>
<div id="main-menu1" className="menu-init1"> 
<nav>
        <ul>
        <li >
            <LanguageSelect />

</li>
            <li ><a href="/">Home</a> 
           
            </li>
            <li ><Link to="/m/about">About Us</Link></li>
            <li ><Link to="/m/services">Services</Link>
            
            </li>
            <li ><Link to="/m/places">Places</Link>
           
            </li>
            <li ><Link href="/m/contact">Contact</Link></li>

             <li >

             {
                      username? (<a style={{textDecoration:"none"}} >{username}</a>): (<a style={{textDecoration:"none"}} onClick={deplace}>Login</a>)
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
</div>
    )
}
export default HeaderA;