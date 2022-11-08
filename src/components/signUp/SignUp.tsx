import { useNavigate } from "react-router-dom";
import "./style.scss";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="All">
      <div className="elemWrap">
        <div className="inputWrap">
          <input className="input" placeholder="Email" />
        </div>
        <button className="btn">Email 중복확인</button>
        <div className="inputWrap">
          <input className="input" placeholder="nickname" />
        </div>
        <button className="btn">ID 중복확인</button>
        <div className="inputWrap">
          <input className="input" placeholder="Password " />
        </div>
        <div className="inputWrap">
          <input className="input" placeholder="Password Check" />
        </div>
        <div>
          <button className="btn">Sign up</button>
        </div>
        <button
          className="btn"
          onClick={() => {
            navigate(-1);
          }}
        >
          이전으로
        </button>
      </div>
    </div>
  );
};

export default SignUp;
