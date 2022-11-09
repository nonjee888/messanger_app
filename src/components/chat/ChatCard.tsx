import "./style.scss";
import user from "../../asset/images/user.png";

const ChatCard = () => {
  return (
    <div
      className="chatCard"
      onClick={() => {
        //채팅방입장
      }}
    >
      <div className="chatProfile">
        <div className="chatImgWrap">
          <img
            src={user}
            alt="user"
            style={{ margin: "27% 0 0 15%", width: "70%" }}
          />
        </div>

        <div className="textBox">
          <div className="chatIdWrap">김민식</div>
          <div className="lastMsg">가나다라마바사아자차카타파하</div>
        </div>
        <div className="lastMsgDate">22/11/09</div>
      </div>
    </div>
  );
};

export default ChatCard;
