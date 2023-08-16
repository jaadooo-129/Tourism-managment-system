import React from "react";
import {FaTwitter, FaFacebook,FaInstagram,FaLinkedin} from "react-icons/fa";
import "../styles/Footer.css";
import styled from "@emotion/styled";
const Footer=()=> {
  return (
    <>
    <div className="footer">
      <div className="socialMedia">
        <div>
         <a href="https://twitter.com/swapsingh0502?t=n05jvGq6rNZjxsElqhAZRA&s=09"> <FaTwitter className="icons" href=""/></a>
          </div> 
          <div>
          <a href="https://www.instagram.com/_swapnil_.05/"><FaInstagram className="icons"/></a>
          </div> 
          <div>
<a href="https://m.facebook.com/profile.php?id=100012114167208"><FaFacebook className="icons"/></a>
</div>
<div>
<a href="https://www.linkedin.com/in/swapnil-singh-26b679204"><FaLinkedin className="icons" /></a>
          </div> 
          </div> 
          </div>
      </>
  );
}

export default Footer;