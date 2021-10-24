import React, { Component } from "react";

export class NewsItem extends Component {
   
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;

    return (
      <>
      <div className="my-3">
      <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl?imageUrl:'https://cdn.modernghana.com/story_/770/400/728202075440-k5fqi7t2h0-d9aa159b8be12202613494d3640ebcf9.jpg'} 
          className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_url" className="btn btn-sm btn-primary">
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
