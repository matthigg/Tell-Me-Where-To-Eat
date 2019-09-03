export default function handleSubmit() {

  // Click the "GO"/submit button if user hits "Enter" 
  document.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      document.querySelector('.input-location-submit-button').click()
    }
  })

  // Gather user input for submission when "GO" button is clicked
  // or the "Enter" button is pressed
  const input = document.querySelector('.input-location-text-field')
  const submit_button = document.querySelector('.input-location-submit-button')
  const gps_button = document.querySelector('.input-location-gps-checkbox')  
  submit_button.addEventListener('click', () => {

    // Get user location from their phone/computer
    // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
    if (gps_button.checked) {
      navigator.geolocation.getCurrentPosition(function(position) {
        // geocodingRequest(position.coords)
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

  // Send request to Google Geocoding API
  // function geocodingRequest(user_coordinates) {
  //   const lat = user_coordinates.latitude
  //   const long = user_coordinates.longitude
  //   const key = ''
  //   // console.log(process.env.REACT_APP_GEOCODING_API_KEY)
  //   const api_request = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + long + '&key=' + key
  //   fetch(api_request)
  //     .then(function(response) {
  //       return response.json()
  //     })
  //     .then(function(response_json) {
  //       console.log(JSON.stringify(response_json))
  //     })
  // }

  // Send request to Google Maps JavaScript API using Places Library
  function findPlacesRequest(input) {
    const google = window.google
    let zero = new google.maps.LatLng(0, 0)
    let map = new google.maps.Map(
      document.querySelector('.map'), {zoom: 14, center: zero})
    const request = {
      query: input,
      fields: ['formatted_address', 'geometry', 'name', 'permanently_closed']
    }
    const service = new google.maps.places.PlacesService(map);
    service.findPlaceFromQuery(request, function(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK && results[0].permanently_closed === undefined) {
        const address = results[0].formatted_address
        const name = results[0].name
        document.querySelector('.search-results-address').innerHTML = address
        document.querySelector('.search-results-name').innerHTML = name
        map.setCenter(results[0].geometry.location)
        openModal()
      } else {
        console.log(results, status)
      }
    });
  }

  // Open modal when the "GO" button is clicked and (presumably) after relevant
  // data has been gathered from the appropriate Google API request
  function openModal() {
    const modal = document.querySelector('.search-results-modal')
    modal.classList.add('modal-fade-in')

    // Close modal if user clicks the close button
    const close = document.querySelector('.close-modal')
    close.addEventListener('click', () => {
      modal.classList.remove('modal-fade-in')
    })

    // Close modal if user clicks outside of .search-results-modal-content
    window.onclick = (event) => {
      if (event.target === modal) {
        modal.classList.remove('modal-fade-in')
      }
    }
  }
}