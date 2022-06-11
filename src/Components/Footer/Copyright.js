import React, { Component } from 'react'

export default class Copyright extends Component {
  render() {
    return (
        <div className="footer-bottom">
            <div className="container">
            <div className="row">
                <div className="col-sm-12">
                <div className="d-sm-flex justify-content-between align-items-center">
                    <div className="fs-14 font-weight-600">
                    © 2020 @ <a href="/"  className="text-white"> BootstrapDash</a>. All rights reserved by laxman.
                    </div>
                    <div className="fs-14 font-weight-600">
                    Handcrafted by <a href="/"  className="text-white">BootstrapDash</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
  }
}
