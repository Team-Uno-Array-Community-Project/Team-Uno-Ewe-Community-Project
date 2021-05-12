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
      <div class="chat-box" style={chatopen ? show : hide}>
        <div class="header">Got Questions?</div>
        <div class="msg-area">
          {messages.map((msg, i) =>
            i % 2 ? (
              <p class="right">
                <span>{msg}</span>
              </p>
            ) : (
              <p class="left">
                <span>{msg}</span>
              </p>
            )
          )}
        </div>
        <div class="footer">
          <input type="text" placeholder="type your question here..." ref={textRef} />
          <button onClick={handleSend}>
          <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </div>
      <div class="pop">
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
