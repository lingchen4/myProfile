import React from 'react'
import { Link } from 'react-router-dom'
import '../../static/css/_index.scss'

function Nav() {
  return (
    <header>
      <h2 className="index-link">
        <Link className="nav-item" to='/'>Ling Chen</Link>
      </h2>
      <nav className="links">
        <ul>
          <li><Link className="nav-item" to='/about'>About</Link></li>
          <li><Link className="nav-item" to='/resume'>Resume</Link></li>
          <li><Link className="nav-item" to='/projects'>projects</Link></li>
          <li><Link className="nav-item" to='/contact'>contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}



export default Nav

