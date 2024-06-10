import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  else if( action.type === "ADD_POST"){
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const addPost = (userId, postTitle, postBody, reaction, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reaction: reaction,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Go To Delhi",
    body: "Hi friend i am going to delhi for job and fun ",
    reaction: 2,
    userId: "user-1",
    tags: ["job", "Delhi", "enjoying"],
  },
  {
    id: "2",
    title: "Getting Job",
    body: "Hi friend i am going to get job in delhi, Expecting to get as soon as posible",
    reaction: 5,
    userId: "user-2",
    tags: ["job Searching", "Delhi"],
  },
];

export default PostListProvider;
