import React, { useState } from 'react'
import '../static/css/_robots.scss'

function Robots() {
  const [robots, setRobots] = useState([])
  const addRobots = (robots) => {
    var str = "" + ( (parseInt(robots[robots.length-1]) || 1) + 3)
    var pad = "000"
    var ans = pad.substring(0, pad.length - str.length) + str
    let robotsF = robots.concat((ans))
    setRobots(robotsF)
  }
  const removeRobots = (robots) => {
    if(robots.length>0){
      setRobots(robots.splice(0, robots.length-1))
    }
    
  }
  return (
    <div>
      <button onClick={()=> addRobots(robots)}>Go Pokemon!</button>
      <button onClick={()=> removeRobots(robots)}>Return to Pokeball</button>
      <div className="robots-container">
      {
        robots.map((robot,i) =>{
          return(
            <img alt='robots' key={i} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${robot}.png`} /> 
          )
        })
      }
      </div>
    </div>
  )
}

export default Robots
