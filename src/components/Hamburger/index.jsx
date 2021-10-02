import React from "react";
import { Icon } from "antd";
import "./index.less";
// 收起sider 的按钮
const Hamburger = (props) => {
  const { sidebarCollapsed } = props;
  const toggleSiderBar = () => {
      console.log(`toggleSiderBar`)
  }
  return (
    <div className="hamburger-container">
      <Icon
        type={sidebarCollapsed ? "menu-unfold" : "menu-fold"}
        onClick={toggleSiderBar}
      />
    </div>
  );
};
export default Hamburger
