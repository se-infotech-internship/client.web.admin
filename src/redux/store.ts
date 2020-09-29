import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";

export const store = configureStore({
  reducer: usersReducer,
});

export type RootState = ReturnType<typeof store.getState>;
