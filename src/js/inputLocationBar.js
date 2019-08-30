export default function inputLocationBar() {

  // Hide the "Use my device's location services..." GPS checkbox if
  // navigator.geolocation is not found
  if ('geolocation' in navigator === false) {
    document.querySelector('.input-location-gps').style.display = 'none'
  }

  // Give the <input> location text field focus if the placeholder is
  // clicked
  const placeholder = document.querySelector('.input-location-floating-placeholder')
  placeholder.addEventListener('click', () => {
    document.querySelector('.input-location-text-field').focus()
  })

  // Click the submit button if user hits "Enter" while <input> field
  // has focus, or if the GPS button is checked
  document.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      document.querySelector('.input-location-submit-button').click()
    }
  })

  // Gather user input for submission
  const input = document.querySelector('.input-location-text-field')
  const submit_button = document.querySelector('.input-location-submit-button')
  const gps_button = document.querySelector('.input-location-gps-checkbox')  
  submit_button.addEventListener('click', () => {

    // Get user location from their phone/computer
    // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
    if (gps_button.checked) {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude, position.coords.longitude);
        makeGoogleAPIRequest(position)
      });
    }

    // Show error message about no value submitted
    else if (input.value === '') {
      document.querySelector('.input-error').style.opacity = 1
    }

    // Get user location from <input>
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