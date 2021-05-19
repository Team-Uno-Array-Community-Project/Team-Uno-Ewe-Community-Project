import React, { useState } from "react";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
