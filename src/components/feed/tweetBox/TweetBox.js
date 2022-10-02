import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "../../../firebase/firebase";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  // Send a tweet to firebase
  const sendTweet = (e) => {
    e.preventDefault();
    console.log("hi");
    db.collection("posts").add({
      dispalyName: "Momen Daoud",
      username: "momendauod",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "./assets/steve.jpg",
    });

    // Clear the state
    setTweetImage("");
    setTweetMessage("");
  };

  return (
    <div className="tweetBox">
      <form onSubmit={sendTweet}>
        <div className="tweetBox__input">
          <Avatar src="./assets/steve.jpg" />
          <input
            type="text"
            placeholder="what's happening?"
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          type="text"
          placeholder="Optional: Enter image URL"
          className="tweetBox__imageInput"
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button type="submit" className="tweetBox__tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
