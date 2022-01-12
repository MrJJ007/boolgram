import "./App.css";
import React, { useState, useEffect } from "react";
import Loader from "./components/loader/Loader";
import axios from "axios";
import Image from "react-bootstrap/Image";
import Content from "./components/content/Content";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    setTimeout(()=>{
      loadStories();
      loadPost();
    },1);
    const loadStories = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://flynn.boolean.careers/exercises/api/boolgram/profiles"
      );

      setStories(response.data);
      setLoading(false);
    };

    const loadPost = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://flynn.boolean.careers/exercises/api/boolgram/posts"
      );

      setPosts(response.data);
      setLoading(false);
    };

    
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <div className="app__headerWrapper">
          <a href="http://localhost:3000/">
            <img
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              alt="Boolgram"
            />
          </a>
          <button className="text__button">Logout</button>
          <div className="app__headerButtons">
            <div
              style={{ display: "block", height: 60, width: 60, padding: 10 }}
            >
              <Image
                src="https://clipart.info/images/ccovers/1516250282red-heart-emoji.png"
                thumbnail
              />
            </div>
            <div
              style={{ display: "block", height: 60, width: 60, padding: 10 }}
            >
              <Image
                src="https://img.flaticon.com/icons/png/512/25/25694.png"
                thumbnail
              />
            </div>
          </div>
        </div>
      </div>
      <div className="scrollArea">
        {loading ? (
          <Loader/>
        ) : (
          <Content
          posts={posts}
          stories={stories}
          />
        )}
      </div>
    </div>
  );
}

export default App;
