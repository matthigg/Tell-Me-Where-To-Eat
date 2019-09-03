export default function handleSubmit() {

    // Google Analytics Test
    window.gtag('event', 'submit', {
      'event_label': 'Testing if gtag is firing correctly',
      'value': 1
    })

    console.log(window)

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
        reverseGeocodingRequest(position.coords)
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
  function reverseGeocodingRequest(user_coordinates) {

    // Google Analytics
    window.gtag('event', 'select_reverse_geocoding', {
      'event_category': 'reverse_geocoding',
      'event_label': 'Use reverse geocoding',
      'value': 1
    })

    const lat = user_coordinates.latitude
    const long = user_coordinates.longitude
    const api_request = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + long + '&key=' + process.env.REACT_APP_GEOCODING_API_KEY
    fetch(api_request)
      .then(function(response) {
        return response.json()
      })
      .then(function(response_json) {
        const address_arr = response_json['results'][0]['formatted_address'].split(', ')
        const address = address_arr[1] + ' ' + address_arr[2]
        findPlacesRequest(address)
      })
  }

  // Send request to Google Maps JavaScript API using Places Library
  function findPlacesRequest(input) {
    const restaurant_categories = ['fine dining', 'casual dining', 'contemporary casual', 'family style', 'fast casual', 'fast food', 'cafe', 'buffet', 'bistro', 'pub', 'grill', 'bar', 'diner', 'dive']
    const restaurant_styles = ['american', 'indian', 'seafood', 'vegetarian', 'italian', 'mexican', 'asian', 'hispanic', 'chinese', 'japanese', 'korean', 'vietnamese', 'ethiopian', 'steakhouse', 'french', 'irish', 'greek', 'german', 'brazilian', 'kosher', 'gluten-free']
    const random_1 = Math.floor(Math.random() * restaurant_categories.length)
    const random_2 = Math.floor(Math.random() * restaurant_styles.length)
    const restaurant_type = restaurant_styles[random_2] + ' ' + restaurant_categories[random_1] + ' '
    const search_query = restaurant_type + 'restaurants, food, and drink near ' + input
    const google = window.google
    const zero = new google.maps.LatLng(0, 0)
    const map = new google.maps.Map(
      document.querySelector('.map'), {zoom: 18, center: zero})
    const request = {
      query: search_query,
      fields: ['formatted_address', 'geometry', 'name', 'permanently_closed']
    }
    const service = new google.maps.places.PlacesService(map);
    service.findPlaceFromQuery(request, function(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK && results[0].permanently_closed === undefined) {
        
        // Google Analytics
        window.gtag('event', 'search', {
          'event_label': 'Successful search',
          'value': 1
        })
        
        const address = results[0].formatted_address
        const name = results[0].name
        document.querySelector('.search-results-address').innerHTML = address
        document.querySelector('.search-results-name').innerHTML = name
        map.setCenter(results[0].geometry.location)
        const marker = new google.maps.Marker({position: results[0].geometry.location});
        marker.setMap(map)
        openModal()
      } else {

        // Google Analytics
        window.gtag('event', 'search', {
          'event_label': 'Successful search, API quota limit reached',
          'value': 1
        })

        const url = 'https://www.google.com/search?q=' + input
        const blank = '_blank'
        window.open(`${url}`, `${blank}`, "noopener,noreferrer")
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