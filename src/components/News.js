import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: 'general',
    totalResults:0
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  captilizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
    document.title = `GoodNews - ${this.captilizeFirstLetter(this.props.category)}`;
  }

  async updateNews() {
    this.props.setProgress(10);
      this.setState({loading: true})
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      this.props.setProgress(30)
      let parseData = await data.json();
      this.props.setProgress(60)
      this.setState({
        articles: parseData.articles,
        totalResults:parseData.totalResults,
        loading: false
      });
    this.props.setProgress(100)
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevious = async () => {
    this.setState({
      page: this.state.page - 1
    })
    this.updateNews()
  };

  handleNext = async () => {
    this.setState({
      page: this.state.page + 1
    })
    this.updateNews()
  };

  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1});
    if (!(this.state.page + 1 >Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        articles: this.state.articles.concat(parseData.articles),// to add articles at end
        totalResults:parseData.totalResults
      });
    }
  };

  render() {
    return (
      <>
        <div>
          <h1 className="text-center"  style={{margin: "35px 0px"}} > GoodNews - Top {this.captilizeFirstLetter(this.props.category)} headlines</h1>
          {/* {this.state.loading && <Spinner/>} */}
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults }
          loader={<Spinner/>} 
        >
          <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
          </InfiniteScroll>
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
          <button
            type="button"
            disabled = {
              this.state.page + 1 >  Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-dark"
            onClick={this.handleNext}
          >
            Next   &rarr;
          </button>
        </div>
      </>
    );
  }
}

export default News;
