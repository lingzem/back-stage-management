import * as types from "../action-types";
export const toggleSiderBar = () => { // 收起/展开 sider
  return {
    type: types.APP_TOGGLE_SIDEBAR
  };
};