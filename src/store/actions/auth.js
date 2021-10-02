
import { ajaxQeqLogin, ajaxQeqLogout } from "@/api/login";
import { setUserToken, resetUser } from "./user";
import { setToken, removeToken } from "@/utils/auth";
// 登录
export const login = (username, password) => (dispatch)=>  {
    return new Promise((resolve, reject) => {
        ajaxQeqLogin({ username: username.trim(), password: password })
          .then((response) => {
            const { data } = response;
            if (data.status === 0) {
              const token = data.token;
              dispatch(setUserToken(token));
              setToken(token); // mock
              resolve(data);
            } else {
              const msg = data.message;
              reject(msg);
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
};

// 登出
export const logout = (token) => (dispatch) => {
    return new Promise((resolve, reject) => {
      ajaxQeqLogout(token)
        .then((response) => {
          const { data } = response;
          if (data.status === 0) {
            dispatch(resetUser());
            removeToken();
            resolve(data);
          } else {
            const msg = data.message;
            reject(msg);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  