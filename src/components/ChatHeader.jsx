import React from 'react'

function ChatHeader() {
  return (
    <div className="flex justify-between items-center w-full h-14 p-2 bg-gray-200 ">
     <div className="flex items-center gap-3">
      <img src={'https://reqres.in/img/faces/7-image.jpg'}  alt="/" className="h-12 w-12 rounded-full"/>
      <p className="text-sm text-gray-900">Pegah Pasha</p>
        </div>
        <div className="flex items-center gap-3">
      
        </div>
    </div>
  )
}

export default ChatHeader