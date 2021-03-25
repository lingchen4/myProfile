import React from 'react'
import '../static/css/_home.scss'
import Robots from './Robots'

function Home() {
  return (
    <div className="home">
      <div className="home_header">
        <h1>ABOUT THIS SITE</h1>
        <p>A BEAUTIFUL, RESPONSIVE, REACT APP WRITTEN WITH MODERN JAVASCRIPT.</p>
      </div>
      <hr/>
      <div className="home_content">
        <p>Welcome to my website. Please feel free to read more about me, or you can check out my resume, projects, view site statistics, or contact me.</p>
      </div>
      <hr/>
      <div className="home_content">
        <p>Here is my Pokemon Friends</p>
        <Robots />
      </div>
    </div>
  )
}

export default Home
