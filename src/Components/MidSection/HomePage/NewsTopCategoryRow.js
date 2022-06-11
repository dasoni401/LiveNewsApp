import React, { Component } from 'react'

export default class NewsTopCategoryRow extends Component {
  render() {
    let {image, title, author, name, description,date} = this.props;    
    return (
      <div className="row">
        <div className="col-sm-4 grid-margin">
          <div className="position-relative">
            <div className="rotate-img">
              <img
                src={image}
                alt="thumb"
                className="img-fluid"
              />
            </div>
            <div className="badge-positioned">
              <span className="badge badge-danger font-weight-bold"
                >{name}</span
              >
            </div>
          </div>
        </div>
        <div className="col-sm-8  grid-margin">
          <h2 className="mb-2 font-weight-600">
           {title}
          </h2>
          <div className="fs-13 mb-2">
            <span className="mr-2">{author} </span>{date}
          </div>
          <p className="mb-0">
            {description}
          </p>
        </div>
      </div>
    )
  }
}
