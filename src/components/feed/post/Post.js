import { Avatar } from "@material-ui/core";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  Repeat,
  VerifiedUser,
} from "@material-ui/icons";
import React from "react";
import "./Post.css";

const Post = ({ displayName, username, text, verified, image }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="./assets/steve.jpg" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>Momen Daoud {""}</h3>
            <span className="post__headerSpecial">
              <VerifiedUser className="post__badge" />
              @momendaaoud
            </span>
          </div>
          <div className="post__headerDescription">
            <p>I built up a twitter clone</p>
          </div>
        </div>
        <img src="./assets/steve.jpg" alt="m" />
        <div className="post__footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <Publish fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
