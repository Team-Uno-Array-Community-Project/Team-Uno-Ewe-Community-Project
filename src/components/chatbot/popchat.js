import React, { useState } from "react";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// This component renders a button with popup window to start a would-be bot-chat.
// The logic of this component has not been completed due to lack of free bot services.
// !! This chat box is for cosmetics only as of now and is not functioning !!

export const PopChat = (props) => {
  let hide = {
    display: "none",
  };
  let show = {
    display: "block",
  };
  let textRef = React.createRef();
  const { messages } = props;

  const [chatopen, setChatopen] = useState(false);
  const toggle = (e) => {
    setChatopen(!chatopen);
  };

  const handleSend = (e) => {
    const get = props.getMessage;
    get(textRef.current.value);
  };

  return (
    <div id="chatCon">
      <div className="chat-box" style={chatopen ? show : hide}>
        <div className="header">Got Questions?</div>
        <div className="msg-area">
          {messages.map((msg, i) =>
            i % 2 ? (
              <p className="right">
                <span>{msg}</span>
              </p>
            ) : (
              <p className="left">
                <span>{msg}</span>
              </p>
            )
          )}
        </div>
        <div className="footer">
          <input type="text" placeholder="type your question here..." ref={textRef} />
          <button onClick={handleSend}>
          <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </div>
      <div className="pop">
        <p>
          {/* this image toggles the chat window open and close*/}
          <img
            onClick={toggle}
            src="https://i.pinimg.com/originals/7a/e3/25/7ae325d430d23638bf4d17da7dc6c965.png"
            alt="chat-bubble"
          />
        </p>
      </div>
    </div>
  );
};

export default PopChat;
