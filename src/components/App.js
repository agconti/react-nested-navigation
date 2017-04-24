import React, { Component } from 'react'
import Nav from './Nav'
import '../App.css'

class App extends Component {
  render() {
    const { rootChannels } = this.props
    return (
      <div className="App">
        <Nav items={rootChannels} />
      </div>
    )
  }
}



export default App
