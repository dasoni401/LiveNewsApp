import React, { Component } from 'react'

export default class TopNav extends Component {
  render() {
    return (
        <div className="navbar-top">
        <div className="d-flex justify-content-between align-items-center">
          <ul className="navbar-top-left-menu">
            <li className="nav-item">
              <a href="/" className="nav-link">Advertise</a>
            </li>
            <li className="nav-item">
              <a href="/aboutus" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">Events</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">Write for Us</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">In the Press</a>
            </li>
          </ul>
          <ul className="navbar-top-right-menu">
            <li className="nav-item">
              <a href="/" className="nav-link"><i className="mdi mdi-magnify"></i></a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">Login</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">Sign in</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
