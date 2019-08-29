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