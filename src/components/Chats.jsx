import React from "react";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="flex-col overflow-y-scroll cursor-pointer h-full">
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
    </div>
  );
}

export default Chats;
