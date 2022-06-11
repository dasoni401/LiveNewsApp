import React, { Component } from 'react'
import TopNav from './TopNav'
import MainNav from './MainNav'

export default class Header extends Component {
  render() {
    return (
        <header id="header">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <TopNav />
              <MainNav />
            </nav>
          </div>
        </header>

    )
  }
}
