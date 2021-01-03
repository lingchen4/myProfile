import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import avatar from "../../assets/img/avatar.png";
import "../../static/css/_footer.scss"
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faLinkedinIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';

function Footer() {
  return (
    <div className="footer">
      <div className="footer_info">
        <img src={avatar} alt="avatar" className="footer_info-img"/>
        <h1>Ling(Duke) Chen</h1>
        <a href="mailto:ling.duke@gmail.com">ling.duke@gmail.com</a>
      </div>
      <div className="footer_about">
        <h3>About</h3>
        <p>Hi, I am Duke. An inventive Full-Stack Developer with 2+ years of broad experience in JavaScript/ES6/ES2017 areas with willingness to learn and master modern languages and design.</p>
      </div>

      <div className="social">
        <ul>
          <li><a href="https://github.com/lingchen4" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
          <li><a href="https://www.linkedin.com/in/ling-chen-34a119a7/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
          <li><a href="mailto:ling.duke@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
