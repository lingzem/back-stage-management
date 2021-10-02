import * as types from "../action-types";
import { ajaxReqUserInfo } from "@/api/user";


export  const getUserInfo = (token) => (dispatch)=>  {
    return new Promise((resolve, reject) => {
        ajaxReqUserInfo(token)
          .then((response) => {
            const { data } = response;
            if (data.status === 0) {
              const userInfo = data.userInfo;
              dispatch(setUserInfo(userInfo)); // 保存userinfo
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
}
export  const setUserToken = (token) => {
    return {
        type: types.USER_SET_USER_TOKEN,
        token,
    }
}
export  const setUserInfo = (info) => {
    return {
        type: types.USER_SET_USER_INFO,
        ...info
    }
}
export  const resetUser = () => {
    return {
        type: types.USER_SET_USER_INFO,
    }
}