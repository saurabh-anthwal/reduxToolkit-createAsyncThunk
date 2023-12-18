import { configureStore } from "@reduxjs/toolkit";
import userDetail from "./redux/features/userDetailSlice";

export const store = configureStore({
  reducer: {
    app: userDetail,
  },
});
