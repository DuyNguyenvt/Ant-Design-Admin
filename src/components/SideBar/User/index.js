import React from "react";
import styled from "styled-components";
import { Collapse, Avatar } from "antd";
import {
  FundProjectionScreenOutlined,
  RocketOutlined,
  PartitionOutlined,
} from "@ant-design/icons";

import themes from "utils/themes";
import { UserOutlined } from "@ant-design/icons";

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
    border-width: 0 2px 2px 2px !important;
    border-radius: 0 0 8px 8px !important;
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

const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  span {
    font-weight: 700;
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  /* padding: 12px 0; */
`;

const UserName = styled.span`
  margin-left: 5px;
  color: white;
  text-transform: uppercase;
  font-weight: 800;
`;

const { Panel } = Collapse;

function SidebarUser() {
  return (
    <Wrapper id="side-bar--user">
      <Collapse
        // defaultActiveKey={["1"]}
        // onChange={callback}
        expandIconPosition={"right"}
      >
        <Panel
          header={
            <PanelHeader>
              <UserContainer>
                <Avatar size={40} icon={<UserOutlined />} />
                <UserName>Admin</UserName>
              </UserContainer>
            </PanelHeader>
          }
          key="1"

          // extra={genExtra()}
        >
          <PanelItem>Edit Info </PanelItem>
          <PanelItem>Settings</PanelItem>
        </Panel>
      </Collapse>
    </Wrapper>
  );
}

export default SidebarUser;
