import { AiOutlineSearch } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";

function MessageHeader() {
  return (
    <div className="flex justify-between items-center h-14 p-2 bg-gray-200 border-l border-gray-300 ">
      <div className="flex items-center gap-3">
      <img src={'https://reqres.in/img/faces/2-image.jpg'}  alt="/" className="h-12 w-12 rounded-full"/>
      <p className="text-sm text-gray-900">Janet Weaver</p>
        </div>
        <div className="flex items-center gap-3">
        <AiOutlineSearch size={20}/>
        <FiMoreVertical size={20} />
        </div>
    </div>
  );
}

export default MessageHeader;
