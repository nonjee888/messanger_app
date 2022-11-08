import "./style.scss";
import { useLayoutEffect, useRef } from "react";
import useFocus from "../../shared/useFocus";
import { useNavigate } from "react-router-dom";
interface Login {}

const Login = () => {
  const navigate = useNavigate();
  const inputFocus = useRef<any>(null);
  const { ref, isFocused, setIsFocused } = useFocus(false);
  useLayoutEffect(() => {
    inputFocus.current.focus();
  }, []);
  return (
    <div className="All">
      <div className="loginWrap">
        <div className="elemWrap">
          <div className="inputWrap">
            <input className="input" ref={inputFocus} placeholder="Email" />
          </div>
          <div className="inputWrap">
            <input className="input" placeholder="Password" />
          </div>
          <div>
            <button className="btn">Log in</button>
          </div>
          <button
            className="btn"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
