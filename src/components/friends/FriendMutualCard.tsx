import user from "../../asset/images/user.png";

const FriendMutualCard = () => {
  return (
    <>
      <div
        style={{ width: "12%", marginRight: "8%", cursor: "pointer" }}
        onClick={() => {
          //프로필상세조회페이지
        }}
      >
        <div className="mutualProfile">
          <img
            src={user}
            alt="user"
            style={{ margin: "27% 0 0 15%", width: "70%" }}
          />
        </div>
        <div className="mutualIdWrap">
          <div className="muId">누구냐</div>
        </div>
      </div>
    </>
  );
};

export default FriendMutualCard;
