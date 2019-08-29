import React, { Component } from 'react'

import inputLocationBar from '../js/inputLocationBar'

class InputLocationBar extends Component {

  componentDidMount() {
    inputLocationBar()
  }

  render() {
    return (
      <div className="landing-page">
        <h1 className="headline">
          Tell Me Where To <span className="headline-emphasis">EAT</span>
        </h1>
        <span className="under-construction">This site is under construction, check us out later though!</span>
        <form action='' method="POST">
          <div className="input-location-text-wrapper">
            <input className="input-location-text-field" name="input-location-text-field" type="text" placeholder="Enter City + State, or Zip Code" />
            <label htmlFor="input-location-text-field" className="input-location-floating-placeholder">Enter City + State, or Zip Code</label>
          </div>
          <label className="input-location-gps">
            <input className="input-location-gps-checkbox" type="checkbox" />
            <span className="input-location-gps-checkmark"></span>
            <span className="input-location-gps-text">Use My Device's Location Services Instead</span>
          </label>
          <button className="input-location-submit-button" type="Submit" value="submit">GO</button>            
        </form>
      </div>
    )
  }
}
export default InputLocationBar