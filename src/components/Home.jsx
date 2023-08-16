import React from 'react'
import "../styles/Home.css";
import { Link } from 'react-router-dom';
import Video from "../assets/homie5.mp4";
import Footer from './Footer';
function Home() {
  return (
    
    <div className="home">

      <video src={Video} loop muted autoPlay/>
    <div className="headerContainer">
      <h1> Tourism Management System</h1>
      <p> Welcome to the beautiful world</p>
      <Link to="/tour">
        <button>Plan My Journey</button>
      </Link>
      <Footer/>
    </div>
    
  </div>
    
  );
}

export default Home
