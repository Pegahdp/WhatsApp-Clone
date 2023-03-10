import Chats from "./Chats";
import ProfileHeader from "./ProfileHeader";

function LeftSide() {
  return (
    <div className="h-screen flex flex-col">
      <ProfileHeader />
      <Chats />
    </div>
  );
}

export default LeftSide;
