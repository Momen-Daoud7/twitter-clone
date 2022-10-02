import { Search } from "@material-ui/icons";
import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widget.css";

const Widget = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input type="text" placeholder="Search twitter" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1566808585920778248"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cristiano"
          height={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://facebook.com/momendaoud7"}
          options={{ text: "#react js is awseome", via: "Momen Daoud" }}
        />
      </div>
    </div>
  );
};

export default Widget;
