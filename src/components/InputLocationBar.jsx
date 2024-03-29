import React, { Component } from 'react'
import handleOpenGoogleMaps from '../js/handleOpenGoogleMaps'
import handleSubmit from '../js/handleSubmit'
import { Helmet } from 'react-helmet'
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
    handleSubmit()
    handleOpenGoogleMaps()
  }

  render() {
    return (
      <section className="landing-page">
        <Helmet>
        <meta description="Can't decide where to eat? Click here! Offering carefully curated (ie. random) restaurant suggestions | Tell Me Where To Eat" />
        <link rel="canonical" href="https://tellmewheretoeat.com" />
        <title>Tell Me Where To Eat</title>
        </Helmet>
        <div className="search-results-modal">
          <div className="search-results-modal-content">
            <div className="close-modal">x</div>
            <p className="search-results-name"></p>
            <p className="search-results-address"></p>
            <div className="map"></div>
            <button className="open-google-maps-button">Find This Place Using Google Maps</button>
          </div>
        </div>
        <h1 className="headline">
          Tell Me Where To <span className="headline-emphasis">EAT</span>
        </h1>
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
      </section>
    )
  }
}
export default InputLocationBar