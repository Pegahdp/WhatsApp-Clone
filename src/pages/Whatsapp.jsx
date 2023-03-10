import React from "react";
import ChatDetails from "../components/ChatDetails";
import LeftSide from "../components/LeftSide";

function Whatsapp() {
  return (
 
      <div className="w-screen h-screen overflow-hidden">
        <div className="flex flex-start items-center h-screen">
          <div className="basis-1/3 h-screen">
            <LeftSide />
          </div>
          <div className="basis-2/3 h-screen">
            <ChatDetails />
          </div>
        </div>
      </div>
  
  );
}

export default Whatsapp;
