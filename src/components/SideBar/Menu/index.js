import React from "react";
import styled from "styled-components";
import * as _ from "lodash";
import { Collapse } from "antd";
import {
  FundProjectionScreenOutlined,
  RocketOutlined,
  PartitionOutlined,
  RightOutlined,
} from "@ant-design/icons";

// import themes from "utils/themes";
const { Panel } = Collapse;

const Wrapper = styled.div`
  .ant-collapse {
    background: transparent !important;
    border: none !important;
  }
  .ant-collapse-item {
    border: none !important;
    margin-bottom: 5px;
  }

  .ant-collapse-header {
    color: white !important;
    border-radius: 10px !important;

    :hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
    ${({ expandDrawer }) =>
      expandDrawer
        ? `
    `
        : `
     padding:  12px 30px 12px 16px!important;

    `}
  }
  .ant-collapse-content {
    background: transparent !important;
    border: none !important;
  }
  .ant-collapse-content-box {
    color: white !important;
    padding: 0 !important;
  }
  .ant-collapse-item-active {
    border-radius: 8px !important;
  }

  .arrow--active {
    transform: rotate(90deg) !important;
    transform-origin: right !important;
  }
  .arrow--collapse {
    transition: all 0.2s;
  }
`;

const PanelItem = styled.div`
  :hover {
    border-radius: 10px !important;
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
  padding: 12px 16px;
  cursor: pointer;
`;

const DashboardItem = styled.div`
  padding: 12px 16px;
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    font-weight: 700;
  }
  :hover {
    border-radius: 10px !important;
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
`;

const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  span {
    font-weight: 700;
  }
  width: 100%;
  ${({ expandDrawer }) =>
    expandDrawer
      ? `
    `
      : `
    padding: 0!important;
    display: flex !important;
    // justify-content: space-between;
    `}/* border: none !important; */
`;

// const Devider = styled.div`
//   border: solid 2px;
// `;

function SidebarMenu(props) {
  const { expandDrawer } = props;

  return (
    <Wrapper id="side-bar--menu" expandDrawer={expandDrawer}>
      <DashboardItem>
        <FundProjectionScreenOutlined
          style={{ fontSize: "25px", marginRight: "5px" }}
        />
        {expandDrawer && <span>DASHBOARD</span>}
      </DashboardItem>
      <Collapse
        defaultActiveKey={["1"]}
        expandIcon={(panelProps) => {
          const procClasses = {
            "arrow--collapse": true,
            "arrow--active": _.get(panelProps, "isActive"),
          };
          if (expandDrawer) return <RightOutlined className={procClasses} />;
          return null;
        }}
        expandIconPosition="right"
      >
        <Panel
          header={
            <PanelHeader expandDrawer={expandDrawer}>
              <RocketOutlined
                style={{ fontSize: "25px", marginRight: "5px" }}
              />
              {expandDrawer && <span> PRODUCTS </span>}
            </PanelHeader>
          }
          key="1"

          // extra={genExtra()}
        >
          {expandDrawer && (
            <>
              <PanelItem>Face Unlock </PanelItem>
              <PanelItem>
                Nodejs server for controlling argricultural system
              </PanelItem>
            </>
          )}
        </Panel>

        <Panel
          header={
            <PanelHeader>
              <PartitionOutlined
                style={{ fontSize: "25px", marginRight: "5px" }}
              />
              {expandDrawer && <span> CAMPAIGNS </span>}
            </PanelHeader>
          }
          key="2"
          // extra={genExtra()}
        >
          {expandDrawer && (
            <>
              <PanelItem> Face Recognition for restaurent service</PanelItem>
              <PanelItem> Watering IOT system </PanelItem>
            </>
          )}
        </Panel>
      </Collapse>
    </Wrapper>
  );
}

export default SidebarMenu;
