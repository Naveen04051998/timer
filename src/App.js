import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showClock: false}

  constructor(props) {
    super(props)
    this.state = {date: new Date()}
    console.log('constructor called')
  }

  componentDidMount() {
    console.log('componetDidMount called')
  }

  onToggleClock = () => {
    const {date} = this.state
    console.log(date)

    this.setState(prevState => {
      const {showClock} = prevState
      console.log(showClock)
      return {
        showClock: !showClock,
      }
    })
  }

  render() {
    const {showClock} = this.state
    console.log('render called')
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onToggleClock}
        >
          {showClock ? 'hide Clock' : 'Show Clock'}
        </button>
        {showClock && <Clock />}
      </div>
    )
  }
}

export default App
