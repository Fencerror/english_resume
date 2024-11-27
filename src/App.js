import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faVk } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="header-left">
          <h1>Stepan Orlov</h1>
          <p>+7 903 069 31 10 | tyghrtzwrcv@gmail.com</p>
        </div>
        <div className="header-right">
          <a
            href="https://t.me/fencerror"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faTelegram} size="lg" />
          </a>
          <a
            href="https://vk.com/stepan_orlow"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faVk} size="lg" />
          </a>
        </div>
      </header>

      <section className="summary">
        <h2>Summary</h2>
        <p>
          Aspiring Frontend Developer with hands-on experience in website
          development and code refactoring. Currently pursuing a degree in
          Applied Informatics (3rd year). Skilled in JavaScript, HTML, CSS, and
          React.
        </p>
      </section>

      <section className="experience">
        <h2>Professional Experience</h2>
        <h3>Frontend Developer (Freelance)</h3>
        <p><a href="https://sibtraveler.com" target="_blank" rel="noreferrer">Sibtraveler.com</a> (June 2024 – August 2024)</p>
        <ul>
          <li>Refactored and optimized existing codebase to improve website performance.</li>
          <li>Collaborated with team members to identify and implement UI/UX improvements.</li>
        </ul>
      </section>

      <section className="education">
        <h2>Education</h2>
        <p>B.Sc. in Applied Informatics (In Progress)</p>
        <p>Tomsk State University | Expected Graduation: June 2026</p>
      </section>

      <section className="skills">
        <h2>Additional Skills</h2>
        <ul>
          <li>Technical: JavaScript, HTML, CSS, React, Git</li>
          <li>Soft Skills: Communication, punctuality, reliability</li>
          <li>Languages: Russian (native), English (intermediate)</li>
          <li>Sports: MMA and Judo (8 years)</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
