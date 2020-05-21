import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Row, Col, Drawer } from "antd";
import SideBarBg from "images/_sideBar/sidebar-bg.jpg";

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
  @media (min-width: 1000px) {
    width: calc(100vw - 256px);
  }
  .header-ham--wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Bar = styled.div`
  border: solid 1px;
  margin-bottom: 4px;
  color: white;
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

function Header(props) {
  const { windowWidth, drawer, toggleDrawer } = props;

  return (
    <Wrapper>
      <Row>
        <Col xs={6}> Dashboard</Col>
        <Col xs={1} offset={17} className="header-ham--wrapper">
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
        title="Product Dashboard"
        placement={windowWidth > 1000 ? "left" : "right"}
        closable={windowWidth > 1000 ? false : true}
        onClose={() => {
          toggleDrawer(!drawer);
        }}
        visible={windowWidth > 1000 ? true : drawer}
        width={(function () {
          if (windowWidth > 1000 || drawer) return 256;
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
      >
        <SideBar> this is side bar</SideBar>
      </Drawer>
    </Wrapper>
  );
}

export default Header;
