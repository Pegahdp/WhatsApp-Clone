import { HiUserGroup } from "react-icons/hi";
import { MdMessage } from "react-icons/md";
import { IoSyncCircleOutline } from "react-icons/io5";
import { FiMoreVertical } from "react-icons/fi";


function ProfileHeader() {
  return (
    <div className="flex justify-between items-center w-full h-14 p-2 bg-gray-200 ">
      <div className="flex items-center gap-3">
        <img
          src={"https://reqres.in/img/faces/7-image.jpg"}
          alt="/"
          className="h-12 w-12 rounded-full"
        />
    
      </div>
      <div className="flex items-center gap-6">
        <HiUserGroup size={22} className="text-gray-600" />
        <IoSyncCircleOutline size={22}className="text-gray-600" />
        <MdMessage size={22} className="text-gray-600"/>
        <FiMoreVertical size={22} className="text-gray-600"/>
      </div>
    </div>
  );
}

export default ProfileHeader;
