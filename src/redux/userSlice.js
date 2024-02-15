import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    authState: localStorage["lingo-habit-auth"] || "noAuth",
  },
  reducers: {
    setUser: (_, { payload }) => {
      localStorage.setItem("lingo-habit-auth", payload.authState);
      return payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const { setUser } = actions;
export default reducer;
