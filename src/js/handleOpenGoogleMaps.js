export default function handleOpenGoogleMaps() {

  const open_google_maps_button = document.querySelector('.open-google-maps-button')
  open_google_maps_button.addEventListener('click', () => {
    
    // Google Analytics
    window.gtag('event', 'submit', {
      'event_label': 'Open Google Maps',
      'value': 1
    })
    
    const address = document.querySelector('.search-results-address').innerHTML
    const url = 'https://maps.google.com?q=' + address
    const blank = '_blank'
    window.open(`${url}`, `${blank}`, "noopener,noreferrer")
  })
}