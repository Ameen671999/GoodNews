import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=b95b74c0d5d64f3284e1e92a7c326bbc&page=1&pageSize=20";
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);
    this.setState({ articles: parseData.articles,
      totalResults: parseData.totalResults });
  }


  handlePrevious = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b95b74c0d5d64f3284e1e92a7c326bbc&page=${this.state.page -1}&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);
    this.setState({ 
      page: this.state.page - 1,
      articles: parseData.articles });
  };

 handleNext = async () => {
   if(this.state.page + 1 > Math.ceil(this.setState.totalResults/20)){

   }else{
    console.log("next")
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b95b74c0d5d64f3284e1e92a7c326bbc&page=${this.state.page + 1}&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);
    this.setState({
       page: this.state.page + 1,
      articles: parseData.articles });
    }
  };
  
  render() {


    return (
      <>
        <div className="container my-3">
          <h1>GoodNews - Top headlines</h1>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button 
            type="button"
            className="btn btn-dark"
            disabled={this.state.page <= 1}
            onClick={this.handlePrevious}
          >
            &larr; Previous
          </button>
          <button type="button" className="btn btn-dark" onClick={this.handleNext}>
            &rarr; Next
          </button>
        </div>
      </>
    );
  }
}

export default News;
