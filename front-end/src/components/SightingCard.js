import React from "react";

const SightingCard = props => {
  console.log(props)
  const {bird, location} = props

  return (
    <div className ="ui column">
      <div className="ui card" >
        <div className="image">
          <img alt="oh no!" src={bird.image_url} />
        </div>
        <div className="content">
          <div className="header">
            {bird.name}
          </div>

          <div className="meta wrap-text">
            {bird.species}
          </div>
        </div>
        <div className="extra content">
          <div>
            Latitude: {location.latitude}
          </div>

          <div>
            Longitude: {location.longitude}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SightingCard;
