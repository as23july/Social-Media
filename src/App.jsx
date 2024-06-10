import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/Post-List-Store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <>
    <PostListProvider>
      
    </PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        <div className="content">
          <Header />
          {selectedTab === "Home" ? <CreatePost /> : <PostList />}

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
