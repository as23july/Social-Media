import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-List-Store";
import WelcomeMessage from "./WelcomeMessage";
import Loading from "./Loading";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListData);

  const [feching, setFeching] = useState(true);

  
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setFeching(true);
    fetch("https://dummyjson.com/posts", {signal})
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        setFeching(false);
      });
      return() => {
        console.log("clean useEffect");
        controller.abort();
      }
  }, []);

  return (
    <>

      <div className="card-container">
        {feching && <Loading/>}
        {!feching && postList.length === 0 && <WelcomeMessage />}

        {!feching && postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostList;
