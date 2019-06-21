import React from 'react'
import SightingsContainer from './SightingsContainer.js'
import SightingForm from '../components/SightingForm.js'
import Header from '../components/Header.js'

class SightingsPage extends React.Component {

  state = {
    sightings: []
  };
  
  componentDidMount() {
    this.getSightings()
  }

  getSightings = () => {
    fetch("http://localhost:3000/sightings")
      .then(res => res.json())
      .then(sightings => this.setState({ sightings }));
  }

  postSighting = sighting => {
    fetch("http://localhost:3000/sightings", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({sighting})
    })
      .then(res => res.json())
      .then(sightings => this.setState({ sightings }));
  }

  render() {
    return(
      <div>
        <div className="header">
          <Header />
          <SightingForm postSighting={this.postSighting} {...this.state} />
        </div>
        <SightingsContainer {...this.state} />
      </div>
    )
  }
}

export default SightingsPage
