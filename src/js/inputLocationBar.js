export default function inputLocationBar() {

  // Hide the "Use my device's location services..." GPS checkbox if
  // navigator.geolocation is not found
  if ('geolocation' in navigator === false) {
    document.querySelector('.input-location-gps').style.display = 'none'
  }

  // Give the <input> location text field focus if the placeholder 
  // text is clicked
  document.querySelector('.input-location-floating-placeholder').addEventListener('click', () => {
    document.querySelector('.input-location-text-field').focus()
  })
}

