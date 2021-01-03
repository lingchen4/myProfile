import React from "react";
import "../static/css/_layout.scss";
import ProgressBars from "./ProgressBar"

function layout() {
  return (
    <section className="layout">
      <div className="layout__header">
        <h1>About Me</h1>
      </div>
      <div className="layout__content">
        <div className="layout__content-header">Intro</div>
        <div className="layout__content-detail">
        I have 2 years of hands-on experience efficiently coding websites and applications using modern HTML, CSS, and JavaScript ReactJS, NodeJS, MongoDB, PHP etc.
        I am enthusiastic about creating modern, responsive, professional, user-friendly websites with ReactJS.
        </div>
        <div className="layout__content-header">CURRENTLY</div>
        <div className="layout__content-detail">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veniam
          incidunt harum atque quam? Sapiente debitis quisquam praesentium nemo.
        </div>
        <div className="layout__content-header">Skills</div>
        <div className="skill">
          <ProgressBars />
        </div>
      </div>
    </section>
  );
}

export default layout;
