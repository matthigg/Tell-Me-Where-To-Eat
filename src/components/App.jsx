import React, { Component } from 'react'
import InputLocationBar from './InputLocationBar'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nothing: null
    }
  }

  componentDidMount() {

    // Construct the <script> tag that is used to load the Google Places Library
    const script = document.createElement('script')
    script.async = true;
    script.src = 'https://maps.googleapis.com/maps/api/js?key=' + process.env.REACT_APP_FIND_PAGES_API_KEY + '&libraries=places'
    script.type = 'text/javascript'
    document.body.appendChild(script)
  }

  render() {
    return (
      <div className="App">
        <InputLocationBar />
      </div>
    )
  }
}

export default App;