import { AiOutlinePaperClip } from "react-icons/ai";
import { MdSend } from "react-icons/md";
import { BiHappy } from "react-icons/bi";

function MessageEditor({ inputRef, handleInputSubmit }) {
  return (
    <div className="flex items-center  bg-gray-300 w-full h-24 gap-3 py-2">
      <button>
        <AiOutlinePaperClip
          size={30}
          className=" text-gray-500 ml-2 font-bold  hover:text-blue-800 "
        />
      </button>
      <button>
        <BiHappy
          size={26}
          className="text-gray-500 mr-2 hover:text-blue-800  "
        />
      </button>

      <input
        type="text"
        ref={inputRef}
        placeholder="Type a message"
        className="rounded-lg p-2 w-full outline-0"
      />

      <button>
        <MdSend
          size={26}
          onClick={handleInputSubmit}
          className="text-gray-500 mr-2 hover:text-blue-800  "
        />
      </button>
    </div>
  );
}

export default MessageEditor;
