import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false}

  onSubscribed = () => {
    this.setstate(prevstatus => ({isSubscribe: !prevstatus.isSubscribe}))
  }

  btnfuntion = () => {
    const {isSubscribe} = this.state

    return isSubscribe ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const btnText = this.btnfuntion()

    return (
      <div className="bg-container">
        <h1 className="heading"> Welcome</h1>
        <p className="description"> Thank you! Happy Learning</p>

        <button className="btn" type="button" onClick={this.onSubscribed}>
          {btnText}
        </button>
      </div>
    )
  }
}
export default Welcome
