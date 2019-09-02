import React, { Component } from 'react'
import inputLocationBar from '../js/inputLocationBar'

class InputLocationBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  componentDidMount() {
    inputLocationBar()
  }

  render() {
    return (
      <div className="landing-page">
        <h1 className="headline">
          Tell Me Where To <span className="headline-emphasis">EAT</span>
        </h1>
        <span className="under-construction">1 This site is under construction. Check us out later though!</span><br />
        <div className="input-error">
          <span>Give us a location and we'll tell you where to eat!</span>
        </div>
        <div className="input-location-text-wrapper">
          <input 
            className="input-location-text-field" 
            name="input-location-text-field" 
            type="text" 
            placeholder="Enter City + State, or Zip Code" 
            value={ this.state.value } 
            onChange={ this.handleChange }
          />
          <label htmlFor="input-location-text-field" className="input-location-floating-placeholder">Enter City + State, or Zip Code</label>
        </div>
        <label className="input-location-gps">
          <input className="input-location-gps-checkbox" type="checkbox" />
          <span className="input-location-gps-checkmark"></span>
          <span className="input-location-gps-text">Use My Device's Location Services Instead</span>
        </label>
        <button className="input-location-submit-button" type="Submit" value="submit">GO</button>            
      </div>
    )
  }
}
export default InputLocationBar