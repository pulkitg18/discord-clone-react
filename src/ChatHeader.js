import {
  Edit,
  EditLocationRounded,
  HelpRounded,
  Notifications,
  PeopleAltRounded,
  SearchRounded,
  Send,
} from "@material-ui/icons";
import React from "react";
import "./ChatHeader.css";
function ChatHeader({ channelName }) {
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
          {channelName}
        </h3>
      </div>

      <div className="chatHeader__right">
        <Notifications />
        <EditLocationRounded />
        <PeopleAltRounded />

        <div className="chatHeader__search">
          <input type="text" placeholder="Search" />
          <SearchRounded />
        </div>

        <Send />
        <HelpRounded />
      </div>
    </div>
  );
}

export default ChatHeader;
