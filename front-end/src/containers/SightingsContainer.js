import React from 'react'
import SightingCard from '../components/SightingCard.js'

class SightingsContainer extends React.Component {

  renderSightings = () => {
    return this.props.sightings.map(sighting => {
      return <SightingCard {...sighting}/>
    })
  }

  render() {
    return(
      <div className="ui four column grid">
        {this.renderSightings()}
      </div>
    )
  }
}

export default SightingsContainer