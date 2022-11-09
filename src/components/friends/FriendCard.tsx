import "./style.scss";
import user from "../../asset/images/user.png";

const FriendCard = () => {
  return (
    <div
      className="friendCard"
      onClick={() => {
        //프로필상세조회페이지
      }}
    >
      <div className="friendProfile">
        <div className="friendImgWrap">
          <img
            src={user}
            alt="user"
            style={{ margin: "27% 0 0 15%", width: "70%" }}
          />
        </div>
        <div className="friendIdWrap">김민식</div>
      </div>
    </div>
  );
};

export default FriendCard;
