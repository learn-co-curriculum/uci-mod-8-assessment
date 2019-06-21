import React from 'react'
import SightingsContainer from './SightingsContainer.js'
import Header from '../components/Header.js'

class SightingsPage extends React.Component {

  state = {
		sightings: []
  };
  
  // Add your code here for fetching API data

  // Edit the JSX below as needed
  render() {
    return(
      <div>
        <div className="header">
          <Header />
        </div>
        <SightingsContainer />
      </div>
    )
  }
}

export default SightingsPage