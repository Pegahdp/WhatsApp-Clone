import Message from "./Message";
import MessageEditor from "./MessageEditor";
import { MessagesData } from "../data/msgdata";
import { useState, useRef, useEffect } from "react";
import ChatDetailsHeader from "./ChatDetailsHeader";

function ChatDetails() {
  const [messages, setMessages] = useState(MessagesData);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  const messagesEndRef = useRef(null);

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

  useEffect(() => {
    const timeoutFunction =setInterval(()=>{
      const newMessages = [...messages, { text: 'Response...', sent: false }];
      setMessages(newMessages);
    }, 15000)
    return () => clearInterval(timeoutFunction);
  },[ messages])

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

  const scrollToBottom = () => {
    messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
  };

  useEffect(scrollToBottom, []);

  return (
    <div className="h-screen flex flex-col">
      <ChatDetailsHeader />
      <div
        ref={messagesEndRef}
        style={{ overflow: "auto" }}
        className=" bg-gray-100 p-2 sm:p-8 w-full "
      >
        <div className="flex-col h-screen justify-center bg-gray-100 w-full   scrollbar-thumb-gray-200 ">
          {messages.map((msg, index) => (
            <Message
              key={index}
              text={msg.text}
              img={msg.img}
              sent={msg.sent}
            />
          ))}
          <div ref={bottomRef} className="pb-8" />
        </div>
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
