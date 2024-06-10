import React, { useContext, useRef } from "react";
import { PostList } from "../store/Post-List-Store";

const CreatePost = () => {
const {addPost} = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reaction = reactionElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    
    userIdElement.current.value="";
    postTitleElement.current.value="";
    postBodyElement.current.value="";
    reactionElement.current.value= "";
    tagsElement.current.value = "";

    addPost(userId, postTitle,postBody,reaction,tags);
  }
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User ID
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="UserId"
          placeholder="Enter User ID"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="Enter your Title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea type="text" ref={postBodyElement} row="4" className="form-control" id="body" />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Number of Reactions
        </label>
        <input
          type="text"
          ref={reactionElement}
          className="form-control"
          id="reaction"
          placeholder="How many people reacted to this"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your HashTags
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Enter tags using space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
