import React from "react";

const SightingCard = props => {

  return (
    <div className ="ui column">
      <div className="ui card" >
        <div className="image">
          {/** Add bird image URL to the img tag **/}
          <img alt="oh no, no bird!" />
        </div>
        <div className="content">
          <div className="header">
            {/** Add bird name here **/}
          </div>

          <div className="meta wrap-text">
            {/** Add bird species here **/}
          </div>
        </div>
        <div className="extra content">
          <div>
            Latitude: {/** Add latitude here **/}
          </div>

          <div>
            Longitude: {/** Add longitude here **/}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SightingCard;