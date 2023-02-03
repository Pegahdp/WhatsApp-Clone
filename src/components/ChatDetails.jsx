import Message from "./Message";
import MessageEditor from "./MessageEditor";
import { MessagesData } from "../data/msgdata";
import { useState, useRef, useEffect } from "react";
import ChatDetailsHeader from "./ChatDetailsHeader";

function ChatDetails() {
  const [messages, setMessages] = useState(MessagesData);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);


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

  const handleUploadImg = () => {
    addNewMessages({
      img: "https://picsum.photos/id/0/367/267",
      sent: true,
    });
  };

  const handleUploadEmoji = () => {
    inputRef.current.value += "😀";
    inputRef.current.focus();
  };

  useEffect(() => {
    const listener = (e) => {
      if (e.code === "Enter") handleInputSubmit();
    };

    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  });


  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="h-screen flex flex-col">
      <ChatDetailsHeader />
      <div className="flex-col h-screen justify-center bg-gray-100 w-full p-2 sm:p-8 overflow-y-scroll  scrollbar-thin scrollbar-thumb-gray-200 ">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} img={msg.img} sent={msg.sent} />
        ))}
     <div ref={bottomRef} />

      </div>

      <MessageEditor
        inputRef={inputRef}
        handleInputSubmit={handleInputSubmit}
        handleUploadImg={handleUploadImg}
        handleUploadEmoji={handleUploadEmoji}
      />
    </div>
  );
}

export default ChatDetails;
