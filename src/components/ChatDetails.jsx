import Message from "./Message";
import MessageEditor from "./MessageEditor";
import { MessagesData } from "../data/msgdata";
import { useState, useRef, useEffect } from "react";
import ChatDetailsHeader from "./ChatDetailsHeader";
import { GrFormClose } from "react-icons/gr";

function ChatDetails() {
  const [messages, setMessages] = useState(MessagesData);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  const messagesEndRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgUrl, setimgUrl] = useState("");

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
    const timeoutFunction = setInterval(() => {
      const newMessages = [
        ...messages,
        { text: "This is an auto response to your message", sent: false },
      ];
      setMessages(newMessages);
    }, 15000);
    return () => clearInterval(timeoutFunction);
  }, [messages]);

  const handleUploadImg = () => {
    addNewMessages({
      img: imgUrl,
      sent: true,
    });
    setIsModalOpen(false);
    setimgUrl("");
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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

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
        handleUploadEmoji={handleUploadEmoji}
        handleOpenModal={handleOpenModal}
      />

      {isModalOpen && (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-gray-100 flex items-center justify-center">
          <div className="bg-white rounded-md shadow-lg p-4 z-100 opacity-100 relative ">
            <form className="flex flex-col gap-2 mt-5">
              <input
                type="url"
                value={imgUrl}
                onChange={(e) => setimgUrl(e.target.value)}
                placeholder="Enter Image Url"
                className="border-2 rounded-md w-[300px] p-2 outline-none text-sm"
              />
              <button
                onClick={handleUploadImg}
                className="border rounded-md bg-green-400 text-white text-sm py-2"
              >
                Upload
              </button>
            </form>
            <button onClick={() => setIsModalOpen(false)}>
              <GrFormClose size={24} className=" absolute top-2 right-2" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatDetails;
