import { Route, Routes, BrowserRouter } from "react-router-dom";
import ChatListPage from "../page/ChatListPage";
import ChatPage from "../page/ChatPage";
import FriendsPage from "../page/FriendsPage";
import LoginPage from "../page/LoginPage";
import MyInfoPage from "../page/MyInfoPage";
import SignUpPage from "../page/SignUpPage";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/chatlist" element={<ChatListPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/myinfo" element={<MyInfoPage />} />
          <Route path="/friends" element={<FriendsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
