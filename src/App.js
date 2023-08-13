import React from 'react';
import './App.css';
import myImage from './myImage.jpg';  // Make sure to replace this with your own image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Profile-pic-container">
          <img src={myImage} className="Profile-pic" alt="profile" />
        </div>
        <h1>Hello, I'm Arthur Cisotto</h1>
        <p>Software Engineer | Designer | Work in Progress</p>
        <p className="About-me">
          I'm a 20 year old from Brazil.
          Currently an third year undergraduate Computer Engineering student @Insper.
          Developer in progress. Also really interested in graphic design.
          I love language learning, and that translates really well into programming languages!
        </p>
      </header>

      <div className="Social-links">
        <h2>Connect with me:</h2>
        <a href="https://github.com/arthurcisotto" target="_blank" rel="noopener noreferrer" className="social-button github">
          <FontAwesomeIcon icon={faGithub} size="2x" />
          <p className="socialPlatformName">GitHub</p>
        </a>
        <a href="https://linkedin.com/in/arthurcisottom" target="_blank" rel="noopener noreferrer" className="social-button linkedin">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          <p className="socialPlatformName">LinkedIn</p>
        </a>
        <a href="https://youtube.com/@arthurcisottomachado97" target="_blank" rel="noopener noreferrer" className="social-button youtube">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
          <p className="socialPlatformName">Youtube</p>
        </a>
        <a href="https://instagram.com/arthurcisotto" target="_blank" rel="noopener noreferrer" className="social-button instagram">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          <p className="socialPlatformName">Instagram</p>
        </a>
      </div>

      <footer>
        <p>© 2023 Arthur Cisotto</p>
      </footer>
    </div>
  );
}

export default App;
