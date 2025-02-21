import React from "react";

const News = ({ title, description, url, urlToImage }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block mx-5" style={{maxWidth: "345px"}}>
      <div className="card-img-container" style={{height: "200px", overflow: "hidden"}}>
        {urlToImage ? (
          <img 
            src={urlToImage} 
            className="card-img-top w-100 h-100" 
            style={{objectFit: "cover", objectPosition: "center top"}} 
            alt="..."
          />
        ) : (
          <div className="bg-secondary h-100 d-flex align-items-center justify-content-center">
            <span className="text-light">No image</span>
          </div>
        )}
      </div>
      <div className="card-body">
        <h5 className="card-title" style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical"
        }}>{title}</h5>
        <p className="card-text" style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          minHeight: "4.5rem"
        }}>
          {description || "No description available"}
        </p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default News;