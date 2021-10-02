import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import { Tag } from "antd";
class TagList extends Component {
    handleClose = () => {
        
    }
    handleClick = () => {

    }
    openContextMenu = () => {

    }
    render() {
        // const { left, top, menuVisible } = this.state;
        const { taglist =[], history } = this.props;
        const currentPath = history.location.pathname;
        return (
          <>
            <Scrollbars
              autoHide
              autoHideTimeout={1000}
              autoHideDuration={200}
              hideTracksWhenNotNeeded={true}
              renderView={(props) => (
                <div {...props} className="scrollbar-container" />
              )}
              renderTrackVertical={(props) => (
                <div {...props} className="scrollbar-track-vertical" />
              )}
            >
              {/* ref={this.tagListContainer} */}
              <ul className="tags-wrap" >
                {taglist.map((tag) => (
                  <li key={tag.path}>
                    <Tag
                      onClose={this.handleClose.bind(null, tag)}
                      closable={tag.path !== "/dashboard"}
                      color={currentPath === tag.path ? "geekblue" : "gold"}
                      onClick={this.handleClick.bind(null, tag.path)}
                      onContextMenu={this.openContextMenu.bind(null, tag)}
                    >
                      {tag.title}
                    </Tag>
                  </li>
                ))}
              </ul>
            </Scrollbars>
            {/* {menuVisible ? (
              <ul
                className="contextmenu"
                style={{ left: `${left}px`, top: `${top}px` }}
                ref={this.contextMenuContainer}
              >
                <li onClick={this.handleCloseOtherTags}>关闭其他</li>
                <li onClick={this.handleCloseAllTags}>关闭所有</li>
              </ul>
            ) : null} */}
          </>
        );
      }
}
export default withRouter(TagList)