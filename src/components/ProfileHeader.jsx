import { HiUserGroup } from "react-icons/hi";
import { MdMessage } from "react-icons/md";
import { IoSyncCircleOutline } from "react-icons/io5";
import { FiMoreVertical } from "react-icons/fi";


function ProfileHeader() {
  return (
    <div className="flex justify-between relative items-center w-full h-12 sm:h-14 sm:p-2 bg-gray-200 ">
      <div className="flex items-center pl-4">
        <img
          src={"https://reqres.in/img/faces/7-image.jpg"}
          alt="/"
          className="h-12 w-12 rounded-full  "
        />
    
      </div>
      <div className="flex items-center justify-end gap-6 absolute right-2 ">
        <HiUserGroup size={22} className="text-gray-600 hidden md:block" />
        <IoSyncCircleOutline size={22}className="text-gray-600 md:block hidden" />
        <MdMessage size={22} className="text-gray-600 hidden md:block"/>
        <FiMoreVertical size={22} className="text-gray-600"/>
      </div>
    </div>
  );
}

export default ProfileHeader;
