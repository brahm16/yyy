import React, { Component } from 'react'
import "./header.css"
import LanguageSelect from './LanguageSelect';
import { getCookie } from '../helpers/auth';
import { Link } from 'react-router-dom';

const MyHeader=({history}) => {
    
    const username=getCookie("username");
	const token =getCookie("token");

        return (
    <nav className="navbar navbar-expand-md navbar-dark">
		<div className="container">
			<a href="/" className="navbar-brand">Zaghouane</a>
			
			<button type="button" className="navbar-toggler collapsed" data-toggle="collapse" data-target="#main-nav">
				<span className="menu-icon-bar"></span>
				<span className="menu-icon-bar"></span>
				<span className="menu-icon-bar"></span>
			</button>
			
			<div id="main-nav" className="collapse navbar-collapse">
				<ul className="navbar-nav ml-auto">
					<li><a href="/" className="nav-item nav-link ">Home</a></li>
					<li><Link to="/m/about" className="nav-item nav-link">About Us</Link></li>
					<li className="dropdown">
						<Link to="/m/services" className="nav-item nav-link" data-toggle="dropdown">Services</Link>
						<div className="dropdown-menu">
							<a href="#" className="dropdown-item">Games</a>
							<a href="#" className="dropdown-item">Maison d'hotes</a>
							<a href="#" className="dropdown-item">Products</a>
                            <a href="#" className="dropdown-item">Jeux</a>

						</div>
					</li>
                    <li><Link to="/m/places" className="nav-item nav-link">Places</Link></li>
                    <li><Link to="/m/contact" className="nav-item nav-link">Contact</Link></li>
                    <li>
                    {
                      token? (<Link className="nav-item nav-link" to="/s/profile" >Profile</Link>): (<Link style={{textDecoration:"none"}} to="/s/profile" >Login</Link>)
                    }
                    </li>




				
				</ul>
			</div>
		</div>
	</nav>
        )
    
}

export default MyHeader;
