import React from "react";
import { connect } from "react-redux";
import Content from "./Content"; // 内容
import Header from "./Header"; // 头部
import RightPanel from "./RightPanel";
import Sider from "./Sider"; //侧边栏
import TagsView from "./TagsView"; // 导航
import { Layout } from "antd";
const Main = (props) => {
  const { tagsView } = props;
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider />
      <Layout>
        <Header />
        {tagsView ? <TagsView /> : null}
        <Content />
        <RightPanel />
      </Layout>
    </Layout>
  );
};
export default connect((state) => state.settings)(Main);
