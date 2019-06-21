import React from 'react'


class SightingForm extends React.Component {

  state = {
    longitude: "",
    latitude: "",
    birdName: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.postSighting(this.state)
  }

  renderBirdOptions = () => {
    // gets non-unique list of bird names
    let birdNamesArray = this.props.sightings.map(sighting => sighting.bird.name)
    
    //uses new JS Set object to remove duplicate bird names
    let uniqueBirdNamesSet = new Set(birdNamesArray)
    
    //an Array of unique bird names from the newly created Set using the spread operator and bracket notation
    let uniqueBirdNamesArray = [...uniqueBirdNamesSet]
    

    return uniqueBirdNamesArray.map(name => <option key={name} value={name}>{name}</option>)
  }

  render() {
    console.log(this.state)
    return (
      
        <form className="ui form" onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name="latitude" placeholder="Latitude" value={this.state.latitude}></input>
          <input onChange={this.handleChange} type="text" name="longitude" placeholder="Longitude" value={this.state.longitude}></input>
          <select onChange={this.handleChange} name="birdName" value={this.state.birdName}>
            {this.renderBirdOptions()}
          </select>
          <input type="submit"></input>
        </form>
      
    )
  }
}

export default SightingForm