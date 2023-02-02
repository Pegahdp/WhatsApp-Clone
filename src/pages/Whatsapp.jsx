import React from "react";
import ChatDetails from "../components/ChatDetails";
import Chats from "../components/Chats";

function Whatsapp() {
  return (
    <div>
      <div className="w-screen h-screen overflow-hidden">
        <div className="flex justify-start whatsapp-bp:justify-center items-center h-screen">
          <div className="basis-1/3 h-screen">
            <Chats />
          </div>
          <div className="basis-2/3 h-screen">
            <ChatDetails />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whatsapp;
