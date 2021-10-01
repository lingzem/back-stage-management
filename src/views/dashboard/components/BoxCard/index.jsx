import React, { Component } from "react";
import { Card, Progress } from "antd";
import { connect } from "react-redux";
import PanThumb from '@/components/PanThumb'
import Mallki from '@/components//Mallki'
import './index.less'
/**
 * card 卡片的样式
 */
class BoxCard extends Component {
  state = {};
  render() {
    const {avatar} = this.props
    return (
      <div className="box-card-component">
        <Card
          cover={
            <img
              alt="example"
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zxgnz.com%2Fimages%2F20200206%2F158097182338679.jpg&refer=http%3A%2F%2Fimg.zxgnz.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1635669479&t=4bdec868e62ccfb6d9ed2db31fa66676"
              style={{height:"280px"}}
            />
          }
        >
          <div style={{ position: 'relative' }}>
            <PanThumb image={avatar} className="panThumb" />
            <Mallki className="mallki-text" text="" />
 
          </div>
        </Card>
      </div>
    );
  }
}

export default connect((state) => state.user)(BoxCard);