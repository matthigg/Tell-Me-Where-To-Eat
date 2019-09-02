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
        geocodingRequest(position.coords)
      });
    }

    // Show error message if <input> field is blank
    else if (input.value === '') {
      document.querySelector('.input-error').style.opacity = 1
    }

    // Get user location from <input> text
    else {
      const user_location = input.value
      findPlacesRequest(user_location)
    }
  })

  // Send request to Google API
  function geocodingRequest(user_coordinates) {
    // const lat = user_coordinates.latitude
    // const long = user_coordinates.longitude
    const key = 'AIzaSyCm2d672hblVDEGa97fUSpgPy9E5foH1rs'
    const api_request = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=' + key
    fetch(api_request)
      .then(function(response) {
        return response.json()
      })
      .then(function(response_json) {
        console.log(JSON.stringify(response_json))
      })
  }

  function findPlacesRequest(user_location) {
    const key = 'AIzaSyBJowmonXgGjMPabHXygaQqS4_gu2B7pX0'
    const api_request = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' + user_location + '&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=' + key
    fetch(api_request, {mode: 'no-cors'})
      .then(function(response) {
        // return response.json()
        console.log(response)
      })
      // .then(function(response_json) {
      //   console.log(JSON.stringify(response_json))
      // })
  }
}

