import React, { Component } from "react";

export class NewsItem extends Component {
   
  render() {
    let { title, description, imageUrl, newsUrl,author,date,source } = this.props;

    return (
      <>
      <div className="my-3">
      <div className="card">
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark" style={{ zIndex: '1', left: '60% !important'}}>
         {source}
          </span>
          <img src={imageUrl?imageUrl:'https://media.azpm.org/master/image/2018/6/29/hero/bbc_wrold_service_radio.jpg'} 
          className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {(new Date(date).toGMTString())}</small></p>
            <a href={newsUrl} target="_url" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default NewsItem;
