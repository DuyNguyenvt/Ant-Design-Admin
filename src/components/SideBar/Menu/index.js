import React from "react";
import styled from "styled-components";
import { Collapse, Select } from "antd";
import {
  FundProjectionScreenOutlined,
  RocketOutlined,
  PartitionOutlined,
} from "@ant-design/icons";

import themes from "utils/themes";

// import { } from 'antd';
// import { SettingOutlined } from '@ant-design/icons';

const Wrapper = styled.div`
  .ant-collapse {
    background: transparent !important;
    border: none !important;
  }
  .ant-collapse-item {
    border: none !important;
    margin-bottom: 5px;
  }

  /* .ant-collapse-item {
    background: transparent !important;
  } */
  .ant-collapse-header {
    color: white !important;
    /* border: solid 2px; */
    border-radius: 10px !important;

    :hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
    /* border: none !important; */
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
    border: solid 2px white !important;
    border-radius: 8px !important;
    /* box-shadow: 0px 0px 4px 2px rgba(50, 51, 54, 0.4) !important; */
    /* box-shadow: 0px 0px 1px 3px rgba(66, 61, 55, 0.1) !important; */
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
`;

const Devider = styled.div`
  border: solid 2px;
`;

const { Panel } = Collapse;

function SidebarMenu() {
  return (
    <Wrapper>
      <DashboardItem>
        <FundProjectionScreenOutlined
          style={{ fontSize: "25px", marginRight: "5px" }}
        />
        <span>DASHBOARD</span>
      </DashboardItem>
      <Collapse
        defaultActiveKey={["1"]}
        // onChange={callback}
        expandIconPosition={"right"}
      >
        <Panel
          header={
            <PanelHeader>
              <RocketOutlined
                style={{ fontSize: "25px", marginRight: "5px" }}
              />
              <span> PRODUCTS </span>
            </PanelHeader>
          }
          key="1"

          // extra={genExtra()}
        >
          <PanelItem>Face Unlock </PanelItem>
          <PanelItem>
            Nodejs server for controlling argricultural system
          </PanelItem>
        </Panel>
        <Panel
          header={
            <PanelHeader>
              <PartitionOutlined
                style={{ fontSize: "25px", marginRight: "5px" }}
              />
              <span> CAMPAIGNS </span>
            </PanelHeader>
          }
          key="2"
          // extra={genExtra()}
        >
          <PanelItem> Face Recognition for restaurent service</PanelItem>
          <PanelItem> Watering IOT system </PanelItem>
        </Panel>
        {/* <Panel
          header="SETTINGS"
          key="3"
          // extra={genExtra()}
        >
          <div>test 3</div>
        </Panel> */}
      </Collapse>
    </Wrapper>
  );
}

export default SidebarMenu;
