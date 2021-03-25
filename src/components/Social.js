import React from 'react'
import {contact} from '../db/contact'
import "../static/css/_social.scss";

function Social() {
  return (
    <div className="social-container">
      {
        contact.map((e,i)=>{
          return (
            <div className="social-container__icon">
              <a href={e.href} target="_blank" rel="noreferrer">{e.svg}</a>
            </div>
            )
        })
      }
    </div>
  )
}

export default Social
