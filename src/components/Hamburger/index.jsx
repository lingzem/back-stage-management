import React from "react";
import { Icon } from "antd";
import { connect } from "react-redux";
import { toggleSiderBar } from "@/store/actions";
import "./index.less";
// 收起sider 的按钮
const Hamburger = (props) => {
  const { sidebarCollapsed } = props;
  const toggleSiderBar = (e) => {
    props.toggleSiderBar(e)
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
export default connect((state) => state.app, { toggleSiderBar })(Hamburger);
