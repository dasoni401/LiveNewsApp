import React, { Component } from 'react'
import Copyright from './Copyright'
import MainFooter from './MainFooter'

export default class Footer extends Component {
  render() {
    return (
        <footer>
          <MainFooter />
          <Copyright />
        </footer>
    )
  }
}
