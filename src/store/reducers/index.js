import { combineReducers } from "redux";
import user from "./user"; // 用户信息
import tags from "./tags"; // 面包屑
import app from "./app";  // 系统相关的
export default combineReducers({
  user,
  tags,
  app
});