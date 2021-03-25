import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect} from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import '../../static/css/_index.scss'

function Nav() {
  const [isExpanded, setIsExpended] = useState();
  const path = useLocation().pathname;
  useEffect(() => {
    setIsExpended(false)
  }, [path])
  return (
    <header>
      <h2 className="index-link">
        <Link className="nav-item" to='/'>Ling Chen</Link>
      </h2>
      <FontAwesomeIcon className=" far-bars" icon={faBars} onClick={()=>setIsExpended(!isExpanded)} />
      <nav className={`links ${isExpanded ? "d-block" : ""}`}>
        <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
          <li><NavLink className="nav-item" activeClassName="active" to='/about'>About</NavLink></li>
          <li><NavLink className="nav-item" activeClassName="active" to='/resume'>Resume</NavLink></li>
          {/* <li><NavLink className="nav-item" activeClassName="active" to='/projects'>projects</NavLink></li> */}
          <li><NavLink className="nav-item" activeClassName="active" to='/contact'>contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav

