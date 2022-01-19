import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  addCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked <span className="count">{count}</span>{' '}
          times
        </h1>
        <p className="paragraph">click the button to increase the count!</p>
        <div className="btn-container">
          <button onClick={this.addCount} className="btn" type="button">
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
