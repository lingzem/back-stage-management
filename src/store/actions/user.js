import * as types from "../action-types";
export  const getUserInfo = () => {
    
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
        info: {}
    }
}