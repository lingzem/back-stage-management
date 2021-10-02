import React from "react";
import { Layout } from "antd";
import Logo from "./Logo";
import Menu from "./Menu";
const { Sider } = Layout;

const LayoutSider = (props) => {
  const { sidebarCollapsed, sidebarLogo = true } = props;
  return (
    <Sider
      collapsible
      collapsed={sidebarCollapsed}
      trigger={null}
      style={{ zIndex: "10" }}
    >
      {sidebarLogo ? <Logo /> : null}
      <Menu />
    </Sider>
  );
};

export default LayoutSider
// const mapStateToProps = (state) => {
//   return {
//     ...state.app,
//     ...state.settings,
//   };
// };
// export default connect(mapStateToProps)(LayoutSider);
