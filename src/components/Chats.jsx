import React, { useEffect, useState } from "react";
import axios from "axios";
import Chat from "./Chat";

function Chats() {
  const [users, setUsers] = useState([]);

  const fetchUserData = async () => {
    const response = await axios.get("https://reqres.in/api/users");
    setUsers(response.data.data);
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  console.log(users);
  return (
    <div className="flex-col overflow-y-scroll cursor-pointer h-full">
      <div>
       
        {users.map((user, i) => (
          <Chat key={i} user={user} />
        ))}
      </div>
      <div>
       
       {users.map((user, i) => (
         <Chat key={i} user={user} />
       ))}
     </div>
    </div>
  );
}

export default Chats;
