import React from 'react';
import { Link } from 'gatsby';

const postMarkup = (post) => {
  console.log(post);
  return {__html: post.html_code}
};

export default ({ pageContext: { post } }) => (
  <div style={{ width: 960, margin: '4rem auto' }}>
    <div></div>
    <Link to="/posts">all Posts</Link>
  </div>
);
