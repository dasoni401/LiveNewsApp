import React, { Component } from 'react'
import Spinner from '../../Spinner';
import NewsTopCategoryRow from './NewsTopCategoryRow'
import PropTypes from 'prop-types'
export default class NewsTopCatergoryRight extends Component {
  static defaultProps = {
    pageSize: 5,
    country: 'in',
  }
  static propTypes = {
    pageSize : PropTypes.number,
    country : PropTypes.string,
  }
  articles = [];
    constructor(){
        super();
       // console.log("this is constructor");
        this.state = {
            articles :   this.articles,
            loading : false,
            page:1,
            category : "general",
        }
    }
    async updateNews(){
      let url = `https://newsapi.org/v2/top-headlines?apiKey=${this.props.apiKey}&country=${this.props.country}&page=${this.state.page}&category=${this.state.category}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let pasedData = await data.json();
     // console.log(data); 
      this.setState({articles : pasedData.articles,
        totalResults: pasedData.totalResults,
          loading : false,})
    }
    async componentDidMount(){
      this.updateNews();
    }
    categorySection = async (data_name) =>{
       let method = data_name.target.getAttribute('data-name');
      for (var item of document.querySelectorAll('li span')) {
          item.classList.remove('active');
      }
       data_name.target.classList.add("active");
       this.setState({ 
         category: method,
       });
       this.updateNews();
   }
  prevNews = async() =>{
    //console.log("Hello");
    let activeHandle = document.querySelector('.vertical-menu li span.active');
     let cat = activeHandle.getAttribute("data-name");
    this.setState({
      page: this.state.page - 1,
      category : cat,
    })
    this.updateNews();
  } 
  nextNews = async() =>{
    //console.log("next");
    let activeHandle = document.querySelector('.vertical-menu li span.active');
     let cat = activeHandle.getAttribute("data-name");
    this.setState({
      page: this.state.page + 1,
      category: cat,
    })
    this.updateNews();
  
  }
  render() {
    return (
      <>
    
      <div className="col-lg-3 stretch-card grid-margin test" >
            <div className="card">
            <div className="card-body">
                <h2>Category</h2>
                <ul className="vertical-menu">
                <li  onClick={this.categorySection} ><span className='active' data-name = "general">General</span></li>
                <li  onClick={this.categorySection} ><span className='' data-name = "business">Business</span></li>
                <li onClick={this.categorySection}><span  data-name = "entertainment">Entertainment</span></li>
                <li onClick={this.categorySection} ><span data-name = "health">Health</span></li>
                <li onClick={this.categorySection} ><span data-name = "science">Science</span></li>
                <li onClick={this.categorySection} ><span data-name = "technology">Technology</span></li>
                <li onClick={this.categorySection} ><span data-name = "sports">Sports</span></li>
                </ul>
            </div>
            </div>
        </div>     
        <div className="col-lg-9 stretch-card grid-margin">
        <div className="card">
          <div className="card-body" >
          <div className='button mb-3 d-flex justify-content-between'>
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.prevNews}>Prev</button>
          <h2>{this.state.category.toUpperCase()}</h2>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.nextNews}>Next</button>
          </div>
          {this.state.loading && <Spinner />}
          {this.state.articles.map((element)=>{
              return <NewsTopCategoryRow key={element.url} image={!element.urlToImage?'test':element.urlToImage} title={element.title} author={element.author} name={element.source.name} description={element.description} date = {element.publishedAt} />
            })}; 
        </div>    
          </div>
          </div> 
          </>   
    )
  }
}
