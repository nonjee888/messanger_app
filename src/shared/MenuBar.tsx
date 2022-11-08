import "./style.scss";
import user from "../asset/images/user.png";
import chat from "../asset/images/chat.png";
import more from "../asset/images/more.png";
import selectedUser from "../asset/images/selectedUser.png";
import selectedChat from "../asset/images/selectedChat.png";
import selectedMore from "../asset/images/selectedMore.png";
import { useNavigate } from "react-router-dom";

const MenuBar = () => {
  const navigate = useNavigate();
  const pathName = window.location.pathname;
  return (
    <div className="menu">
      <div>
        <img
          src={pathName === "/friends" ? selectedUser : user}
          className="userIcon"
          alt="userIcon"
          onClick={() => {
            navigate("/friends");
          }}
        />
      </div>
      <div>
        <img
          src={pathName === "/chatlist" ? selectedChat : chat}
          className="userIcon"
          alt="userIcon"
          onClick={() => {
            navigate("/chatlist");
          }}
        />
      </div>
      <div>
        <img
          src={pathName === "/myinfo" ? selectedMore : more}
          className="moreIcon"
          alt="userIcon"
          onClick={() => {
            navigate("/myinfo");
          }}
        />
      </div>
    </div>
  );
};

export default MenuBar;
