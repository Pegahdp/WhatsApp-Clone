import Message from "./Message";
import MessageEditor from "./MessageEditor";
import { MessagesData } from "../data/msgdata";
import { useState, useRef } from "react";

function ChatDetails() {
  const [messages, setMessages] = useState(MessagesData);
  const inputRef = useRef(null);

  const addNewMessages = (msg) => {
    const newMessages = [...messages, msg];
    setMessages(newMessages);
  };

  const handleInputSubmit = () => {
    if (inputRef.current.value.length > 0) {
      addNewMessages({
        text: inputRef.current.value,
        sent: true,
      });
      inputRef.current.value = "";
    }
  };
  return (
    <div className=" h-screen flex flex-col">
      <div className="bg-gray-100 w-full p-8 overflow-y-scroll  scrollbar-thin scrollbar-thumb-gray-200 ">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} img={msg.img} sent={msg.sent} />
        ))}
      </div>

      <MessageEditor
        inputRef={inputRef}
        handleInputSubmit={handleInputSubmit}
      />
    </div>
  );
}

export default ChatDetails;
