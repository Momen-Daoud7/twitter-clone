import React, { useEffect, useState } from "react";
import TweetBox from "./tweetBox/TweetBox";
import "./Feed.css";
import Post from "./post/Post";
import db from "../../firebase/firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      {posts.map((post) => {
        console.log(post);
        return (
          <Post
            key={Math.random()}
            displayName={post.dispalyName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
          />
        );
      })}
    </div>
  );
};

export default Feed;
