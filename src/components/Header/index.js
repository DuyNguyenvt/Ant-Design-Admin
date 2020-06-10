import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Row, Col, Tooltip, Button, Badge, Popover } from "antd";
// import { Popover, Button } from "antd";
import {
  DatabaseOutlined,
  EllipsisOutlined,
  UnorderedListOutlined,
  BellOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

import themes from "utils/themes";

// import SideBar from "components/SideBar";

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
  /* .header-ham--wrapper {
  } */
  .header--right-side {
    display: flex;
    justify-content: flex-end;
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
  margin: 4px 0;
  color: rgba(0, 0, 0, 0.85);
  width: 25px;
`;

const HambugerBtn = styled.div`
  cursor: pointer;
  @media (min-width: 1000px) {
    display: none;
  }
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  color: ${themes.nnqduyGrayLetter};
  margin-left: 5px;
`;

const ControlBtn = styled.div`
  margin: 0 7px;
`;

const ControlGroup = styled.div`
  display: flex;
  flex-direction: row;
  span {
  }
  svg {
    cursor: pointer;
    :hover {
      color: #23ccef;
    }
  }
`;

function Header(props) {
  const {
    deviceType,
    toggleDrawer,
    expandDrawer,
    isSmallDrawer,
    changeSmallDrawer,
  } = props;

  return (
    <Wrapper expandDrawer={expandDrawer}>
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
              // warning
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
        <Col xs={17} className="header--right-side">
          {deviceType === "DESKTOP" ? (
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
          ) : null}

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
        <Col xs={1} offset={16}></Col>
      </Row>
    </Wrapper>
  );
}

Header.propTypes = {
  toggleDrawer: PropTypes.func,
  expandDrawer: PropTypes.bool,
  isSmallDrawer: PropTypes.bool,
  changeSmallDrawer: PropTypes.func,
};

export default Header;
