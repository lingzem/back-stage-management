import React from "react";
import { Layout } from "antd";
import Content from "./Content"; // 内容
import Header from "./Header"; // 头部
import Sider from "./Sider"; //侧边栏
import TagsView from "./Tags"; // 导航

const LayoutComponent = (props) => {
   
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider />
        <Layout>
          <Header />
          <TagsView />
          <Content />
        </Layout>
      </Layout>
    );
}
export default LayoutComponent