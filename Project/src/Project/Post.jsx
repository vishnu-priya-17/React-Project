import React from "react";
const Post = ({ post: { title, body,
imgUrl, author }, index }) => {
return (
	<div className="post-container" style={{padding:"10px"}}>
	<h1 className="heading">{title}</h1>
	<img className="image" src={imgUrl} style={{width:"400px"}} alt="post" />
	<p style={{width:"400px"}}>{body}</p>
	<div className="info">	
		<h4>Written by: {author}</h4>
	</div>
	</div>
);
};

export default Post;
