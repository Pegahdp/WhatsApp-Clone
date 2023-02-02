

function Chat({user}) {
  return (
    <div className="flex w-full h-16 sm:h-20 px-4 items-center hover:bg-gray-100 ">
      <img src={user.avatar} alt="/" className="rounded-full w-12 h-12 md:w-16 md:h-16 " />
      <div className="border-b h-16 sm:h-20 w-full flex items-center p-2 sm:p-4 text-xs md:text-base"> {user.first_name} {user.last_name}</div>
    </div>
  );
}

export default Chat;
