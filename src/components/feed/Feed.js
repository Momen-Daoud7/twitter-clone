import React from "react";
import TweetBox from "./tweetBox/TweetBox";
import "./Feed.css";
import Post from "./post/Post";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <Post
        displayName="Momen Daodu"
        username="momendaoud"
        verified
        text="Yooo i built a twitter clone"
        image="./assets/steve.jpg"
        avatar="./assets/steve.jpg"
      />
      <Post
        displayName="Momen Daodu"
        username="momendaoud"
        verified
        text="Yooo i built a twitter clone"
        image="./assets/steve.jpg"
        avatar="./assets/steve.jpg"
      />
      <Post
        displayName="Momen Daodu"
        username="momendaoud"
        verified
        text="Yooo i built a twitter clone"
        image="./assets/steve.jpg"
        avatar="./assets/steve.jpg"
      />
      <Post
        displayName="Momen Daodu"
        username="momendaoud"
        verified
        text="Yooo i built a twitter clone"
        image="./assets/steve.jpg"
        avatar="./assets/steve.jpg"
      />
      <Post
        displayName="Momen Daodu"
        username="momendaoud"
        verified
        text="Yooo i built a twitter clone"
        image="./assets/steve.jpg"
        avatar="./assets/steve.jpg"
      />
      <Post
        displayName="Momen Daodu"
        username="momendaoud"
        verified
        text="Yooo i built a twitter clone"
        image="./assets/steve.jpg"
        avatar="./assets/steve.jpg"
      />
      <Post
        displayName="Momen Daodu"
        username="momendaoud"
        verified
        text="Yooo i built a twitter clone"
        image="./assets/steve.jpg"
        avatar="./assets/steve.jpg"
      />
    </div>
  );
};

export default Feed;
