import avatar from '../assets/avatar.png'


function Chat() {
  return (
    <div className="flex w-full h-20 py-2 px-4 mt-2 ">
      <img src={avatar} alt="/" className="rounded-full" />
      <div className="border-b w-full flex items-center px-4">name</div>
    </div>
  );
}

export default Chat;
