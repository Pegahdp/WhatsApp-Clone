import { AiOutlinePaperClip } from "react-icons/ai";
import { MdSend } from "react-icons/md";
import { BiHappy } from "react-icons/bi";

function MessageEditor({
  inputRef,
  handleInputSubmit,
  handleUploadImg,
  handleUploadEmoji,
  handleOpenModal
}) {
  return (
    <div className="flex items-center  bg-gray-300 w-full h-16 md:h-24 gap-1 sm:gap-3 py-2">
      <button className="outline-0">
        <AiOutlinePaperClip
          onClick={handleOpenModal}
          className=" text-gray-500 ml-2 font-bold  hover:text-blue-800 h-4 w-4 sm:w-6 sm:h-6"
        />
      </button>

      
      <button onClick={handleUploadEmoji}>
        <BiHappy className="text-gray-500 mr-2 hover:text-blue-800 outline-0  h-4 w-4  sm:w-6 sm:h-6" />
      </button>

      <input
        type="text"
        ref={inputRef}
        placeholder="Type a message"
        className="rounded-lg p-1 sm:p-2 w-full outline-0 text-xs sm:text-sm"
        
      />

      <button>
        <MdSend
          onClick={handleInputSubmit}
          className="text-gray-500 mr-2 hover:text-blue-800 h-4 w-4  sm:w-6 sm:h-6 "
        />
      </button>
    </div>
  );
}

export default MessageEditor;
