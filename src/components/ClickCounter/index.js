// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  increseCount = () => {
    const {count} = this.state
    this.setState({count: count + 1})
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked<span className="span">{count}</span> Times
        </h1>
        <p className="paragraph">Click the button to increase the Count</p>
        <button type="button" onClick={this.increseCount} className="btn">
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
