export default function inputLocationBar() {

  const placeholder = document.querySelector('.input-location-floating-placeholder')
  placeholder.addEventListener('click', () => {
    document.querySelector('.input-location-text-field').focus()
  })

}