import React from "react";
import { Row, Col } from "antd";
import TypingCard from '@/components/TypingCard'
import "./index.less";

// 首页
const Dashboard = () => {
  const cardContent = "首页"
  return (
    <div className="app-container">
      <Row gutter={8}>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          style={{ marginBottom: "30px" }}
        >
         <TypingCard title='' source={cardContent}/>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
