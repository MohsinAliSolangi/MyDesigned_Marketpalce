import React from 'react';
import Article from '../../componant/article/Article';
import { imag01, imag02, imag03, imag04, imag05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot Of Collections Here , <br /> We are Show You Top 10.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={imag01} />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={imag02}  />
        <Article imgUrl={imag03}  />
        <Article imgUrl={imag04}  />
        <Article imgUrl={imag05}  />
      </div>
    </div>
  </div>
);

export default Blog;
