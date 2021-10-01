import React from "react";
import { Row, Col } from "antd";
import "./index.less";

import BoxCard from "./components/BoxCard";
// 首页


const Dashboard = () => {
  
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
          <BoxCard />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
