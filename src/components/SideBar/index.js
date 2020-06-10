import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Drawer, Popover, Badge } from "antd";
import SidebarMenu from "components/SideBar/Menu";
import SidebarUser from "components/SideBar/User";

import SideBarBg from "images/_sideBar/sidebar-bg.jpg";
import {
  UnorderedListOutlined,
  BellOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const Devider = styled.div`
  border: solid 1px;
  margin-top: 10px;
  color: white;
`;

const FooterContent = styled.div``;

const SideBarInner = styled.div`
  background-image: url(${({ bgImg }) => bgImg});
`;

const ControlBtn = styled.div`
  padding: 10px;
  margin-right: 15px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const ControlGroup = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: row;
  svg {
    cursor: pointer;
  }
`;

const HeaderContent = styled.div`
  text-align: center;
  white-space: nowrap;
`;

function SideBar({
  deviceType,
  drawer,
  toggleDrawer,
  expandDrawer,
  toggleExpandDrawer,
  mouseEnterDrawer,
  isSmallDrawer,
}) {
  return (
    <Drawer
      id="cus-drawer"
      title={
        <div>
          {expandDrawer ? (
            <HeaderContent>PRODUCT ADMINISTRATOR</HeaderContent>
          ) : (
            <HeaderContent>P A</HeaderContent>
          )}
          <Devider />
        </div>
      }
      placement={deviceType === "DESKTOP" ? "left" : "right"}
      closable={false}
      onClose={() => {
        toggleDrawer(!drawer);
      }}
      visible={deviceType === "DESKTOP" ? true : drawer}
      width={(function () {
        if (deviceType === "DESKTOP") {
          if (expandDrawer || mouseEnterDrawer) {
            return 256;
          }
          return 80;
        }
        if (deviceType === "MOBILE" && drawer) {
          return 256;
        }
        return 0;
      })()}
      key={"top"}
      mask={deviceType === "MOBILE" ? true : false}
      drawerStyle={{
        backgroundImage: `url(${SideBarBg})`,
      }}
      bodyStyle={{
        background:
          "linear-gradient(to right,rgba(241, 152, 57, 0.85),rgba(255, 147, 23, 0.85)) ",
      }}
      footer={
        <FooterContent>
          <Devider />
          <SidebarUser expandDrawer={expandDrawer} />
        </FooterContent>
      }
      onMouseEnter={() => {
        if (isSmallDrawer && !expandDrawer && deviceType === "DESKTOP") {
          toggleExpandDrawer(expandDrawer);
        }
      }}
      onMouseLeave={() => {
        if (isSmallDrawer && expandDrawer && deviceType === "DESKTOP") {
          toggleExpandDrawer(expandDrawer);
        }
      }}
    >
      <SideBarInner>
        {deviceType === "MOBILE" ? (
          <>
            <ControlGroup>
              <ControlBtn>
                <Popover
                  content={<div> test</div>}
                  title={null}
                  trigger="click"
                >
                  {/* <Button>Hover me</Button> */}
                  <GlobalOutlined
                    style={{
                      fontSize: "25px",
                    }}
                  />
                </Popover>
              </ControlBtn>
              <ControlBtn>
                <Badge count={5}>
                  <BellOutlined
                    style={{
                      fontSize: "25px",
                    }}
                  />
                </Badge>
              </ControlBtn>
              <ControlBtn>
                <UnorderedListOutlined
                  style={{
                    fontSize: "25px",
                  }}
                />
              </ControlBtn>
            </ControlGroup>
            <Devider />
          </>
        ) : null}

        <SidebarMenu expandDrawer={expandDrawer} />
      </SideBarInner>
    </Drawer>
  );
}

SideBar.propTypes = {
  windowWidth: PropTypes.number,
  drawer: PropTypes.bool,
  toggleDrawer: PropTypes.func,
  expandDrawer: PropTypes.bool,
  toggleExpandDrawer: PropTypes.func,
  mouseEnterDrawer: PropTypes.bool,
  isSmallDrawer: PropTypes.bool,
};

export default SideBar;
