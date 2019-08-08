import React, { Component } from 'react';
import './templates/home_style.css';
import image1 from './static/css/picture1.jpg';
import logo from './templates/logo3.png';
import image2 from './static/css/field2.jpeg';
import image3 from './static/css/field3.jpeg';
import image4 from './static/css/field4.jpg';
import { Link } from "react-router-dom";
// import Welcome from './homepage.js';

class Welcome extends Component{
  state ={

  }
  render() {
    return (
      <div className="welcome">
        <header className="textWel">
          Welcome to soccer rocks!
        </header>
        <h1 className="myLogo">
          <img src={logo} />
        </h1>

      <div className="navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><Link to={"/center"}>GameCenter</Link></li>
          <li><a href="players">Players</a></li>
          <li><a href="about">About</a></li>
        </ul>
      </div>

      <div className="slider">
        <figure>
          <img src={image1} />
          <img src={image2} />
        </figure>
      </div>

      <div className="footerVal">
        <footer>
          Copyright information: This website belongs to Pritam Basnet and any unauthorized content published won't be entertained.
        </footer>
      </div>
    </div>
    );
  }
}

export default Welcome;
