import React from "react";
import "../static/css/_progressbar.scss";
import ProgressBar from "react-animated-progress-bar";
import data from "../db/skills.json"

function ProgressBars() {
  // document.readyState(

  // )
  return (
    <div>
      <div class="aprogress">
        <div className="progress-items">
          {
            data.map(
              item =>(
                <div>
                  <span>{item.name}</span>
                  <ProgressBar
                    width="90%"
                    height="15px"
                    rect
                    fontColor="gray"
                    percentage={item.progress}
                    rectPadding="1px"
                    rectBorderRadius="20px"
                    trackPathColor="#eee"
                    bgColor="#333333"
                    trackBorderColor="#eee"
                    defColor={{
                      fair: 'orangered',
                      good: 'yellow',
                      excellent: item.color,
                      poor: 'red',
                    }}
                  />
                </div>
              )
            )
          }
          
        </div>
      </div>
    </div>
  );
}

export default ProgressBars;
