import { createContext } from "react";

const postList = createContext({});

const PostListProvider = ({ children }) => {
  return <postList.Provider value={[]}>{children}</postList.Provider>;
};

export default PostListProvider;
