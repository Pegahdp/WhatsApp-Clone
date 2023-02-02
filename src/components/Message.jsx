function Message({ text, img, sent }) {
  return (
    <div
      className={`flex justify-end rounded-md my-1 w-fit p-1 ${
        sent ? "bg-green-300 ml-auto" : "bg-white mr-auto"
      } `}
    >
      {img ? (
        <div className="w-52 ">
          <img src={img}  alt="/" />
        </div>
      ) : (
        <div
          className="text-sm max-w-[400px]"
          style={{ wordBreak: "break-word" }}
        >
          {text}
        </div>
      )}
    </div>
  );
}

export default Message;
