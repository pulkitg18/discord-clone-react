import {
  AddCircle,
  CardGiftcard,
  EmojiEmotions,
  Gif,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import { selectChannelId, selectChannelName } from "./features/appSlice";
import { selectUser } from "./features/userSlice";
import db from "./firebase";
import Message from "./Message";
import firebase from "firebase";
function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [channelId]);

  const sendMessages = (e) => {
    e.preventDefault();

    db.collection("channels").doc(channelId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user,
    });
    setInput("");
  };
  return (
    <div className="chat">
      {channelId ? (
        <>
          <ChatHeader channelName={channelName} />

          <div className="chat__messages">
            {messages.map((message) => (
              <Message
                timestamp={message.timestamp}
                message={message.message}
                user={message.user}
              />
            ))}
          </div>
          <div className="chat__input">
            <AddCircle fontSize="large" />
            {/* {channelId ? ( */}
            <form>
              <input
                disabled={!channelId}
                placeholder={`Message #${channelName}`}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                className="chat__inputButton"
                type="submit"
                disabled={!channelId}
                onClick={sendMessages}
              >
                Send Message
              </button>
            </form>
            <div className="chat__inputIcons">
              <CardGiftcard fontSize="large" />
              <Gif fontSize="large" />
              <EmojiEmotions fontSize="large" />
            </div>
          </div>
        </>
      ) : (
        <>
          <p>.</p>
        </>
      )}

      {/* ) : (
          <p>.</p>
        )} */}
    </div>
  );
}

export default Chat;
