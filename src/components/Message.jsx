import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
function Message({ text, img, sent }) {
  return (
    <div
    className={`flex justify-center sm:justify-end rounded-md my-1 w-fit p-1 max-w-[250px] ${
      sent ? "bg-green-300 ml-auto" : "bg-white mr-auto"
     } `}
    >
      {img ? (
        <div className="">
          <Zoom>
            <img
              alt="/"
              src={img}
              className="object-cover"
     
            />
          </Zoom>
        </div>
      ) : (
        <div
          className="text-xs sm:text-sm max-w-[400px]"
          style={{ wordBreak: "break-word" }}
        >
          {text}
        </div>
      )}
    </div>
  );
}

export default Message;
