import { configureStore } from "@reduxjs/toolkit";
import chat from "../modules/chat";
import user from "../modules/user";

const store = configureStore({
  reducer: {
    chat,
    user,
  },
});

export default store;
