import React from "react";
import "../static/css/_layout.scss";
import "../static/css/_resume.scss";
import data from "../db/resume.json";

function Resume() {
  return (
    <section className="layout">
      <div className="layout__header">
        <h1>RESUME</h1>
      </div>
      <div className="layout__content">
        <div className="layout__content-header">EXPERIENCE</div>
        {data.Expreience.map((data) => {
          return (
            <div className="experience" key={data.title}>
              <div className="experience__title">
                {data.company} - {data.title}
              </div>
              <div className="experience__duration">
                {data.duration}
              </div>
              <div className="experience__detail">
                <ul>
                  {
                    data.detail.map(
                      detail=> (<li key={detail.length}>{detail}</li>)
                    )
                  }
                </ul>
              </div>
            </div>
          );
        })}
        <div className="layout__content-header">Education</div>
        <div className="layout__content-detail">{data.Education}</div>
      </div>
    </section>
  );
}

export default Resume;
