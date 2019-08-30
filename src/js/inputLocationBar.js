export default function inputLocationBar() {

  // Hide the "Use my device's location services..." GPS checkbox if
  // navigator.geolocation is not found
  if ('geolocation' in navigator === false) {
    document.querySelector('.input-location-gps').style.display = 'none'
  }

  // Give the <input> location text field focus if the placeholder 
  // text is clicked
  const placeholder = document.querySelector('.input-location-floating-placeholder')
  placeholder.addEventListener('click', () => {
    document.querySelector('.input-location-text-field').focus()
  })

  // Click the "GO"/submit button if user hits "Enter" 
  document.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      document.querySelector('.input-location-submit-button').click()
    }
  })

  // Gather user input for submission when "Go" button is clicked
  // or the "Enter" button is pressed
  const input = document.querySelector('.input-location-text-field')
  const submit_button = document.querySelector('.input-location-submit-button')
  const gps_button = document.querySelector('.input-location-gps-checkbox')  
  submit_button.addEventListener('click', () => {

    // Get user location from their phone/computer
    // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
    if (gps_button.checked) {
      navigator.geolocation.getCurrentPosition(function(position) {
        makeGoogleAPIRequest(position.coords)
      });
    }

    // Show error message if <input> field is blank
    else if (input.value === '') {
      document.querySelector('.input-error').style.opacity = 1
    }

    // Get user location from <input> text
    else {
      const inputtext = input.value
      makeGoogleAPIRequest(inputtext)
    }
  })

  // Send request to Google API
  function makeGoogleAPIRequest(user_location) {
    console.log(user_location)
    
  }
}