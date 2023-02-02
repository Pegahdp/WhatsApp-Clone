import Message from "./Message";
import MessageEditor from "./MessageEditor";
import { MessagesData } from "../data/msgdata";
import { useState } from "react";

function ChatDetails() {
  const [messages, setMessages] = useState(MessagesData);
  return (
    <div className=" h-screen flex flex-col">
      <div className="bg-gray-100 w-full p-8 overflow-y-scroll  scrollbar-thin scrollbar-thumb-gray-200 ">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} img={msg.img} sent={msg.sent} />
        ))}
      </div>

      <MessageEditor />
    </div>
  );
}

export default ChatDetails;
