import Mock from "mockjs";
import loginAPI from "./login";

// 登录
Mock.mock(/\/login/, "post", loginAPI.login);
Mock.mock(/\/logout/, "post", loginAPI.logout);
// 用户
Mock.mock(/\/userInfo/, "post", loginAPI.userInfo);