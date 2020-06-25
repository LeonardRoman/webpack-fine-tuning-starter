// Core
import React, { Component } from 'react'
import { render } from 'react-dom'
import { hot } from 'react-hot-loader'

import Styles from './postcss.css'
import kitty from '../theme/images/kitty.jpg'
import { Button } from '../Button'

const Clicker = hot(module)(
  class extends Component {
    state = {
      count: 0
    }
    inc = () =>
      void this.setState(({ count }) => ({
        count: count + 1
      }))

    dec = () =>
      void this.setState(({ count }) => ({
        count: count - 1
      }))

    render () {
      const { count } = this.state
      return (
        <section className={Styles.clicker}>
          <img src={kitty}
               alt="kitty" />
          <h1>Счетчик: {count}</h1>
          <Button onClick={this.inc}>Increment</Button>
          <Button onClick={this.dec}>Decrement</Button>
        </section>
      )
    }
  }
)

render(<Clicker />, document.getElementById('app'))
