import avatar from '../assets/avatar.png'


function Chat({user}) {
  return (
    <div className="flex w-full h-24 px-4 items-center hover:bg-gray-100">
      <img src={user.avatar} alt="/" className="rounded-full w-16 h-16" />
      <div className="border-b h-24 w-full flex items-center p-4"> {user.first_name} {user.last_name}</div>
    </div>
  );
}

export default Chat;
