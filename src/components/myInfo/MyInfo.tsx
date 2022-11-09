import "./style.scss";
import user from "../../asset/images/user.png";

const MyInfo = () => {
  return (
    <div className="Pages">
      <div className="infoWrap">
        <div className="profileWrap">
          <div className="profileImg">
            <img style={{ margin: "28px 0 0 15px" }} src={user} alt="user" />
          </div>
          <div className="idWrap">노은지 </div>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
