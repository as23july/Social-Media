import React, { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/Post-List-Store";

const Post = ({ post }) => {

  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.id)}>
           <AiFillDelete size={20}/>
          </span>
        </h5>

        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge bg-primary hashtag">{tag}</span>
        ))}

        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
      <div className="alert alert-success reaction" role="alert">
        This post has been reacted by {post.reaction} people
      </div>
    </div>
  );
};

export default Post;
