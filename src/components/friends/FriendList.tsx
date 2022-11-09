import FriendCard from "./FriendCard";
import FriendMutualCard from "./FriendMutualCard";
import user from "../../asset/images/user.png";
import "./style.scss";
import { useCallback, useState } from "react";

const FriendList = () => {
  return (
    <div className="Pages" style={{ overflow: "auto" }}>
      <div style={{ display: "flex" }}>
        <div className="friends">Friends</div>
      </div>
      {/*내프로필*/}
      <div className="myProfile">
        <div className="myImgWrap">
          <img
            src={user}
            alt="user"
            style={{ margin: "27% 0 0 15%", width: "70%" }}
          />
        </div>
        <div className="myIdWrap">노은지</div>
      </div>
      {/*추천친구목록*/}
      <div className="divider" />
      <div className="reckonFriends">Mutual Friends</div>
      <div style={{ display: "flex", margin: "2% 0 0 22%" }}>
        <FriendMutualCard />
        <FriendMutualCard />
        <FriendMutualCard />
        <FriendMutualCard />
        <FriendMutualCard />
      </div>
      <div className="divider" />
      {/*친구목록*/}
      <div className="friendsNum">Friends 423</div>
      <FriendCard />
      <FriendCard />
      <FriendCard />
      <FriendCard />
      <FriendCard />
      <FriendCard />
      <FriendCard />
      <FriendCard />
      <FriendCard />
      <FriendCard />
      <FriendCard />
      <FriendCard />
      <FriendCard />
      <FriendCard />
    </div>
  );
};

export default FriendList;
