import React, { Component } from 'react'
import Spinner from '../Spinner'
import CategoryRow from './CategoryRow'
import InfiniteScroll from "react-infinite-scroll-component"

export default class Category extends Component {
    constructor(props){
        super(props);
        //console.log("hello");
        this.state = {
            articles : [],
            page:1,
            totalResults:0,
            loading : false,
        }
    }
    async componentDidMount(){
      const url = `https://newsapi.org/v2/top-headlines?apiKey=${this.props.apiKey}&category=${this.props.catName}&country=${this.props.country}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
       // console.log(url);
        this.setState({loading:true});
        let data = await fetch(url);
        let pasedData = await data.json();
       // console.log(data); 
        this.setState({
          articles : pasedData.articles,
          totalResults: pasedData.totalResults,
            loading : false,
          })
    }
    fetchMoreData = async () => {
   
      const url = `https://newsapi.org/v2/top-headlines?apiKey=${this.props.apiKey}&category=${this.props.catName}&country=${this.props.country}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({
        page: this.state.page + 1,
      })
      //console.log(url);
      this.setState({loading:true});
      let data = await fetch(url);
      let pasedData = await data.json();
     // console.log(data); 
      this.setState({
        articles : this.state.articles.concat(pasedData.articles),
        totalResults: pasedData.totalResults,
         })
      };
  render() {
    return (
        <div className="content-wrapper">
        <div className="container">
          <div className="col-sm-12">
            <div className="card" data-aos="fade-up">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-12">
                    <h1 className="font-weight-600 mb-4 text-uppercase">
                      {this.props.catName}
                    </h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8">
                   <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                    endMessage={
                      <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                      </p>
                    }
                  >
                  {this.state.articles.map((element,index)=>{
                    return <CategoryRow key = {index} title={ element.title} description={element.description} imageUrl={element.urlToImage} author={element.author} date={ element.publishedAt}/>
                  })}
                  </InfiniteScroll>
                    </div>
                  <div className="col-lg-4">
                    <h2 className="mb-4 text-primary font-weight-600">
                      Latest news
                    </h2>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="border-bottom pb-4 pt-4">
                          <div className="row">
                            <div className="col-sm-8">
                              <h5 className="font-weight-600 mb-1">
                                Ways to stay social online while in self..
                              </h5>
                              <p className="fs-13 text-muted mb-0">
                                <span className="mr-2">Photo </span>10 Minutes ago
                              </p>
                            </div>
                            <div className="col-sm-4">
                              <div className="rotate-img">
                                <img
                                  src="../assets/images/magazine/Magzine_1.jpg"
                                  alt="banner"
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="border-bottom pb-4 pt-4">
                          <div className="row">
                            <div className="col-sm-8">
                              <h5 className="font-weight-600 mb-1">
                                Premier League players join charity..
                              </h5>
                              <p className="fs-13 text-muted mb-0">
                                <span className="mr-2">Photo </span>10 Minutes ago
                              </p>
                            </div>
                            <div className="col-sm-4">
                              <div className="rotate-img">
                                <img
                                  src="../assets/images/magazine/Magzine_2.jpg"
                                  alt="banner"
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="pt-4">
                          <div className="row">
                            <div className="col-sm-8">
                              <h5 className="font-weight-600 mb-1">
                                UK Athletics board changed stance on..
                              </h5>
                              <p className="fs-13 text-muted mb-0">
                                <span className="mr-2">Photo </span>10 Minutes ago
                              </p>
                            </div>
                            <div className="col-sm-4">
                              <div className="rotate-img">
                                <img
                                  src="../assets/images/magazine/Magzine_3.jpg"
                                  alt="banner"
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="trending">
                      <h2 className="mb-4 text-primary font-weight-600">
                        Trending
                      </h2>
                      <div className="mb-4">
                        <div className="rotate-img">
                          <img
                            src="../assets/images/magazine/Magzine_4.jpg"
                            alt="banner"
                            className="img-fluid"
                          />
                        </div>
                        <h3 className="mt-3 font-weight-600">
                          Virus Kills Member Of Advising Iran’s Supreme
                        </h3>
                        <p className="fs-13 text-muted mb-0">
                          <span className="mr-2">Photo </span>10 Minutes ago
                        </p>
                      </div>
                      <div className="mb-4">
                        <div className="rotate-img">
                          <img
                            src="../assets/images/magazine/Magzine_5.jpg"
                            alt="banner"
                            className="img-fluid"
                          />
                        </div>
                        <h3 className="mt-3 font-weight-600">
                          Virus Kills Member Of Advising Iran’s Supreme
                        </h3>
                        <p className="fs-13 text-muted mb-0">
                          <span className="mr-2">Photo </span>10 Minutes ago
                        </p>
                      </div>
                      <div className="mb-4">
                        <div className="rotate-img">
                          <img
                            src="../assets/images/magazine/Magzine_6.jpg"
                            alt="banner"
                            className="img-fluid"
                          />
                        </div>
                        <h3 className="mt-3 font-weight-600">
                          Virus Kills Member Of Advising Iran’s Supreme
                        </h3>
                        <p className="fs-13 text-muted mb-0">
                          <span className="mr-2">Photo </span>10 Minutes ago
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
