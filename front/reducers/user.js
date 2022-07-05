import { createSlice } from "@reduxjs/toolkit";

const dummyUser = {
  id: 1,
  nickname: "유저1",
  Posts: [],
};

export const initialState = {
  isLoggedIn: false,
  user: null,
  signUpData: {},
  loginData: {},
};

export const LOG_IN = "LOG_IN";

const userSlice = createSlice;
