import "./style.scss";
import ChatCard from "./ChatCard";

const ChatList = () => {
  return (
    <div className="Pages" style={{ overflow: "auto" }}>
      <div style={{ display: "flex" }}>
        <div className="chats">Chats</div>
      </div>
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
    </div>
  );
};

export default ChatList;
