import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class MainNav extends Component {
  render() {
    return (
        <div className="navbar-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Link className="navbar-brand" to="/"
              ><img src="assets/images/logo.svg" alt=""
            /></Link>
          </div>
          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="navbar-collapse justify-content-center collapse"
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav d-lg-flex justify-content-between align-items-center"
              >
                <li>
                  <button className="navbar-close">
                    <i className="mdi mdi-close"></i>
                  </button>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">Technology</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contactus">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <ul className="social-media">
            <li>
              <a href="/">
                <i className="mdi mdi-facebook"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="mdi mdi-youtube"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="mdi mdi-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
