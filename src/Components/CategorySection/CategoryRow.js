import React, { Component } from 'react'

export default class CategoryRow extends Component {
  render() {
      let {title, imageUrl, author, date, description} = this.props;
    return (
        <div className="row">
        <div className="col-sm-4 grid-margin">
          <div className="rotate-img">
            <img
              src={imageUrl}
              alt="banner"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-sm-8 grid-margin">
          <h2 className="font-weight-600 mb-2">
            {title}
          </h2>
          <p className="fs-13 text-muted mb-0">
            <span className="mr-2">{author} </span>{date}
          </p>
          <p className="fs-15">
           {description}
          </p>
        </div>
      </div>
    )
  }
}
