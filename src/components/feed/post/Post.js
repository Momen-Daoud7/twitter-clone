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

const Post = ({ displayName, username, text, verified, image, avatar }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName} {""}
            </h3>
            <span className="post__headerSpecial">
              {verified && <VerifiedUser className="post__badge" />}@{username}
            </span>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        {image && <img src={image} alt="m" />}
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
