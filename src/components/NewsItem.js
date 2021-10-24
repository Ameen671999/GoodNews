import React, { Component } from "react";

export class NewsItem extends Component {
   
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;

    return (
      <>
      <div className="my-3">
      <div className="card">
          <img src={imageUrl?imageUrl:'https://media.azpm.org/master/image/2018/6/29/hero/bbc_wrold_service_radio.jpg'} 
          className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
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
