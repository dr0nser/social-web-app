import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Post from "./components/Post";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`https://social--mern-backend.herokuapp.com/posts`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
      console.log('useEffect() running')
  }, []);
  return (
    <div className="bg-blue-50 min-h-screen">
      <Navbar />
      <div className="grid grid-cols-4">
        <div className="col-span-3 grid grid-cols-4 gap-4 p-10">
          {posts.map((post, index) => {
            return (
              <Post
                post={post}
                key={index}
                posts={posts}
                setPosts={setPosts}
                id={post._id}
              />
            );
          })}
        </div>
        <div className="col-span-1">
          <Form posts={posts} setPosts={setPosts} />
        </div>
      </div>
    </div>
  );
}

export default App;
