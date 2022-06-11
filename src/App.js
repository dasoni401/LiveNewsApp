/* my api d60788dcb5ad4171a0d70e912678ae89 */
/* dasoni f340355b09d34a5b995cce2ce28507c2 */
/* laxmandetype 3bbb929090b04f28bc2422a95a02604d */
import React, { Component } from 'react'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
//import FlashNews from './Components/MidSection/FlashNews';
import MainContainer from './Components/MidSection/HomePage/MainContainer';
import Category from './Components/CategorySection/Category';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  render() {
    return (
      <div className="container-scroller">
      <div className="main-panel">
        <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<MainContainer  apiKey={this.apiKey} />} />
          <Route exact  path="/business" element={<Category apiKey={this.apiKey} key="business" pageSize={10} country="in"  catName="business"/>} />
          <Route exact  path="/entertainment" element={<Category apiKey={this.apiKey} key="entertainment" pageSize={10} country="in"   catName="entertainment"/>} />
          <Route exact path="/health" element={<Category apiKey={this.apiKey}   key="health"  pageSize={10} country="in"  catName="health"/>} />
          <Route exact  path="/science" element={<Category apiKey={this.apiKey}  key="science" pageSize={10} country="in"  catName="science"/>} />
          <Route exact  path="/technology" element={<Category apiKey={this.apiKey}  key="technology" pageSize={10} country="in"  catName="technology"/>} />
          <Route exact  path="/sports" element={<Category apiKey={this.apiKey} key="sports"  pageSize={10} country="in"  catName="sports"/>} />
        </Routes>
          
        <Footer />
        </Router>
      </div>
      </div>
     
    )
  }
}

