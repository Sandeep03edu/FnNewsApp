// import React, { Component } from "react";
import React from "react";

// export class NewsItem extends Component {
const NewsItem = (props) => {
  // render() {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;

  return (
    <div className="card my-2">
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-success">
          {source}
        </span>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          By {author != null ? author : "Unknown"} on{" "}
          {new Date(date).toGMTString()}
        </p>
        <a
          href={newsUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          Read more
        </a>
      </div>
    </div>
  );
  // }
};

export default NewsItem;
