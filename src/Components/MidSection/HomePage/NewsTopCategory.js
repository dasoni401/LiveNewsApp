import React, { Component } from 'react'
import NewsTopCatergoryContent from './NewsTopCatergoryContent';

export default class NewsTopCategory extends Component {
  render() {
    return (
        <div className="row" data-aos="fade-up">
        <NewsTopCatergoryContent pageSize={10} country="in" apiKey={this.props.apiKey} />
      </div>
    )
  }
}
