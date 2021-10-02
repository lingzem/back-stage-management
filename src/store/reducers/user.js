import * as types from "../action-types";
const initUserInfo = {
    name: "",
    role: "",
    avatar:"",
    token: "",
};

export default function user(state = initUserInfo, action){
    switch (action.type) {
        case types.USER_SET_USER_TOKEN:
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }

}