import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">5 May, 2023</p>
        <h5 className="title">Mental healthcare for teenagers</h5>
        <p className="desc">
            The teenage years are the formative period for any human being. A child 
            experiences an introductory understanding of physical, mental, and social growth.         </p>
        <Link to="/blog/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;