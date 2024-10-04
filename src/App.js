import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import './App.css';
import profilePic from './myImage.jpg';
import insperPic from './images/insper.svg';
import btgPic from './images/btg.png';

const PersonalWebsite = () => {
  return (
    <main className="main-container">
      <div className="content-wrapper">
        <div className="header-section">
          <div className="header-info">
            <h1>Arthur Cisotto Machado</h1>
            <p className="subtitle">Computer Engineering Student | Data Science & AI Enthusiast</p>
            <p className="personal-info">
              <span>21yo</span> · São Paulo, SP · 
              <a href="mailto:arthurcisottom@gmail.com">arthurcisottom@gmail.com</a> · 
              <a href="tel:+5515996826111">+55 (15) 99682-6111</a>
            </p>
            <div className="social-links">
              <a target="_blank" href="https://github.com/ArthurCisotto">
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
              <a target="_blank" href="https://linkedin.com/in/arthurcisottom">
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
            </div>
          </div>
          <img src={profilePic} alt="Arthur Cisotto" className="profile-picture" />
        </div>

        <section className="education-section">
          <h2>Education</h2>
          <div className="education-item">
            <h3>
              <img src={insperPic} alt="Insper" className="institution-logo" />
              <a target="_blank" href="https://www.insper.edu.br/en/">Insper - Institute of Education and Research</a>
            </h3>
            <h4>Bachelor of Computer Engineering<span className="education-date">JAN 2021 - DEZ 2025</span></h4>
            <p>
              Currently pursuing a Bachelor's Degree in Computer Engineering at Insper. Actively involved in student organizations, including participation in the Insper Mileage team, which develops an electric vehicle prototype for the Shell Eco-Marathon competition.
            </p>
          </div>
        </section>

        <section className="experience-section">
          <h2>Experience</h2>
          <div className="experience-item">
            <h3>
              <img src={btgPic} alt="BTG Pactual" className="company-logo" />
              <a target="_blank" href="https://www.btgpactual.com/">BTG Pactual</a>
            </h3>
            <div className="job-details">
              <h4>Summer Intern - Cards Division<span className="job-date">JULY 2024</span></h4>
              <p>
                Worked as a full stack developer in the Cards division of BTG Empresas, using Node.js and React. Applied Clean Architecture principles, contributing to the development of robust and scalable solutions.
              </p>
            </div>
          </div>
          <div className="experience-item">
            <h3>
              <img src={insperPic} alt="Insper" className="company-logo" />
              <a target="_blank" href="https://www.insper.edu.br/en/">Insper</a>
            </h3>
            <div className="job-details">
              <h4>Assistant at the Innovation HUB<span className="job-date">DEC 2022 - MAY 2023</span></h4>
              <p>
                At Insper's Innovation HUB, I led a project to develop a digital solution for the Strategic Problem Solving (REP) program. This initiative replaced traditional spreadsheets and forms with a unified digital platform, using Django and React.
              </p>
            </div>
          </div>
        </section>

        <section className="projects-section">
          <h2>Academic Projects</h2>
          <div className="project-item">
            <h4>Scientific and Technological Initiation (PIBITI)<span className="project-date">August 2022 - September 2023</span></h4>
            <p>
              Conducted research in Explainable Artificial Intelligence (XAI) in the medical field, focusing on making AI more transparent using the SHAP technique. Presented findings at the 1st Insper Symposium on Scientific and Technological Initiation, promoting more ethical and responsible application of AI in medicine.
            </p>
          </div>
          <div className="project-item">
            <h4>Web Application Integrated with Machine Learning<span className="project-date">2023</span></h4>
            <p>
              Developed a continuous deployment web application for skin mole classification, adapting an AI model to identify potentially malignant or benign lesions. The application offers image upload and editing, highlighting classifications with visual indicators.
            </p>
          </div>
        </section>

        <section className="volunteer-section">
          <h2>Volunteer Work</h2>
          <div className="volunteer-item">
            <h4>Marketing Director at TEDx Insper<span className="volunteer-date">2022 - 2023</span></h4>
            <p>
              As the Marketing Director at TEDx Insper, I managed visual communication and marketing for the 2022 and 2023 events, focusing on creating attractive content and engagement strategies.
            </p>
          </div>
        </section>

        <section className="skills-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div>
              <h3>Advanced Proficiency / Comfortable Using</h3>
              <h4>Programming Languages:</h4>
              <ul>
                <li>Python, C, HTML5, CSS3, JavaScript</li>
              </ul>
              <h4>Frameworks:</h4>
              <ul>
                <li>React.js, Django</li>
              </ul>
              <h4>Development Tools:</h4>
              <ul>
                <li>Git, Docker, Postman, Terraform, AWS, Figma, Photoshop</li>
              </ul>
              <h4>Databases:</h4>
              <ul>
                <li>MySQL, PostgreSQL, SQLite</li>
              </ul>
            </div>
            <div>
              <h3>Previous Experience / Intermediate Knowledge</h3>
              <h4>Programming Languages:</h4>
              <ul>
                <li>Java, C++, C#, TypeScript, Assembly x86</li>
              </ul>
              <h4>Frameworks:</h4>
              <ul>
                <li>Vue.js, Node.js, Flask, TensorFlow, PyTorch</li>
              </ul>
              <h4>Development Tools:</h4>
              <ul>
                <li>Selenium, Kubernetes</li>
              </ul>
              <h4>Databases:</h4>
              <ul>
                <li>Firebase, MongoDB, DynamoDB</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="languages-section">
          <h2>Languages</h2>
          <ul>
            <li>Portuguese - Native</li>
            <li>English - Fluent</li>
            <li>Japanese - Advanced</li>
            <li>Mandarin - Basic</li>
          </ul>
        </section>

        <footer>
          <p>© 2024 Arthur Cisotto Machado. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
};

export default PersonalWebsite;