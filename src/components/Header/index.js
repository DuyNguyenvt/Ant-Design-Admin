import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Row, Col, Drawer, Collapse, Select, Tooltip, Button } from "antd";
import SidebarMenu from "components/SideBar/Menu";
import SidebarUser from "components/SideBar/User";
import { DatabaseOutlined, EllipsisOutlined } from "@ant-design/icons";

import SideBarBg from "images/_sideBar/sidebar-bg.jpg";
import themes from "utils/themes";

// import { Avatar } from 'antd';

const { Panel } = Collapse;
const { Option } = Select;

const Wrapper = styled.div`
  background: white;
  position: absolute;
  top: 0;
  height: 55px;
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  z-index: 1000 !important;
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  @media (min-width: 1000px) {
    ${({ expandDrawer }) => {
      if (expandDrawer) {
        return "width: calc(100vw - 256px);";
      }
      return "width: calc(100vw - 80px);";
    }};
  }
  .header-ham--wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ant-btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Bar = styled.div`
  border: solid 1px;
  margin-bottom: 4px;
  color: rgba(0, 0, 0, 0.85);
  width: 25px;
`;

const HambugerBtn = styled.div`
  cursor: pointer;
  @media (min-width: 1000px) {
    display: none;
  }
`;

const SideBar = styled.div`
  background-image: url(${({ bgImg }) => bgImg});
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  color: ${themes.nnqduyGrayLetter};
  margin-left: 5px;
`;

const Devider = styled.div`
  border: solid 1px;
  margin-top: 10px;
  color: white;
`;

const FooterContent = styled.div``;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
`;

const UserName = styled.span`
  margin-left: 5px;
  color: white;
  text-transform: uppercase;
  font-weight: 800;
`;

function Header(props) {
  const {
    windowWidth,
    drawer,
    toggleDrawer,
    expandDrawer,
    // setMouseEnterDrawer,
    toggleExpandDrawer,
    // handleExpandDrawer,
    mouseEnterDrawer,
    isSmallDrawer,
    changeSmallDrawer,
  } = props;

  return (
    <Wrapper expandedDrawer={expandDrawer}>
      <Row>
        <Col xs={1}>
          <Tooltip title="search">
            <Button
              type="primary"
              shape="circle"
              icon={
                isSmallDrawer ? (
                  <EllipsisOutlined
                    style={{
                      transform: "rotate(90deg) translate(0,-1px)",
                      fontSize: "25px",
                    }}
                  />
                ) : (
                  <DatabaseOutlined />
                )
              }
              warning
              style={{
                background: "rgba(255, 147, 23, 0.85)",
                border: "none",
              }}
              onClick={() => {
                // toggleExpandDrawer(expandDrawer);
                changeSmallDrawer(isSmallDrawer);
              }}
            />
          </Tooltip>
        </Col>
        <Col xs={6}>
          <HeaderTitle>Dashboard</HeaderTitle>
        </Col>
        <Col xs={1} offset={16} className="header-ham--wrapper">
          <HambugerBtn
            onClick={() => {
              toggleDrawer();
            }}
          >
            <Bar />
            <Bar />
            <Bar />
          </HambugerBtn>
        </Col>
      </Row>

      <Drawer
        id="cus-drawer"
        title={
          <div>
            <div>PRODUCT ADMINISTRATOR</div>
            <Devider />
          </div>
        }
        placement={windowWidth > 1000 ? "left" : "right"}
        closable={windowWidth > 1000 ? false : true}
        onClose={() => {
          toggleDrawer(!drawer);
        }}
        visible={windowWidth > 1000 ? true : drawer}
        width={(function () {
          if (windowWidth > 1000) {
            if (expandDrawer || mouseEnterDrawer) {
              return 256;
            }
            return 100;
          }
          if (windowWidth <= 1000 && drawer) {
            return 256;
          }
          return 0;
        })()}
        key={"top"}
        mask={false}
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
            <SidebarUser />
            {/* <UserContainer>
              <Avatar size={40} icon={<UserOutlined />} />
              <UserName>Admin</UserName>
            </UserContainer> */}
          </FooterContent>
        }
        onMouseEnter={() => {
          if (isSmallDrawer && !expandDrawer) {
            toggleExpandDrawer(expandDrawer);
          }
          //   setMouseEnterDrawer(true);
          //   handleExpandDrawer(false);
        }}
        onMouseLeave={() => {
          //   handleExpandDrawer(true);
          //   setMouseEnterDrawer(false);
          if (isSmallDrawer && expandDrawer) {
            toggleExpandDrawer(expandDrawer);
          }
        }}
      >
        <SideBar>
          <SidebarMenu />
        </SideBar>
      </Drawer>
    </Wrapper>
  );
}

export default Header;
