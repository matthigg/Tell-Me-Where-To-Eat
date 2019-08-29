import React from 'react'

function InputLocationBar() {
  return (
    <div className="landing-page">
      <h1 className="headline">
        Tell Me Where To <span className="headline-emphasis">EAT</span>
      </h1>
      <form action='' method="POST">
        <div className="input-location-text-wrapper">
          <input className="input-location-text-field" name="input-location-text-field" type="text" placeholder="Enter City + State, or Zip Code" />
          <label for="input-location-text-field" class="input-location-floating-placeholder">Enter City + State, or Zip Code</label>
        </div>
        <label className="input-location-gps">
          <input className="input-location-gps-checkbox" type="checkbox" />
          <span className="input-location-gps-checkmark"></span>
          <span className="input-location-gps-text">I'll Use My Phone's Location Services Instead</span>
        </label>
        <button className="input-location-submit-button" type="Submit" value="submit">GO</button>            
      </form>
    </div>
  )
}

export default InputLocationBar