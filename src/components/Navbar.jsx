import React from 'react';
import Logo from "../assets/logo.png";
import { Link} from 'react-router-dom';
import "../styles/Navbar.css";
function Navbar() {
   
  return (
    <div className="navbar">
        
            <img src={Logo} alt="swapnil"/>
            
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/tour'>Tour Packages</Link>
                <Link to='/contact'>Contact us</Link>
                </div>
                
      
     
    
  )
}

export default Navbar
