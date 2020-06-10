import React, { useState, useEffect } from "react";

import styled from "styled-components";
import Header from "components/Header";
import SideBar from "components/SideBar";
import { useWindowSize } from "@reach/window-size";

const ContentWrapper = styled.div`
  transition: all 0.3s;
  @media (min-width: 1000px) {
    ${({ expandDrawer }) => {
      if (expandDrawer) {
        return "margin-left: 256px;";
      }
      return "margin-left: 80px;";
    }};
  }
  /* transform: ${({ drawer }) => {
    if (drawer) {
      return "translate(-256px, 0);";
    }
  }}; */
`;

const DEVICE_TYPE = {
  UNDEFINED: "UNDEFINED",
  DESKTOP: "DESKTOP",
  MOBILE: "MOBILE",
};

const ComponentWrapper = styled.div`
  padding-top: 55px;
  background: #f7f7f8;
  min-height: calc(100vh - 55px);
`;

const withMainLayout = (Component) => (props) => {
  const [drawer, setDrawer] = useState(false);
  const [expandDrawer, setExpandDrawer] = useState(true);
  const [isSmallDrawer, setIsSmallDrawer] = useState(false);
  const [deviceType, setDeviceType] = useState(DEVICE_TYPE.UNDEFINED);

  // const [mouseEnterDrawer, setMouseEnterDrawer] = useState(false);

  const {
    width,
    // height
  } = useWindowSize();

  useEffect(() => {
    // if (width >= 1000 && drawer === true) {
    //   setDrawer(false);
    //   console.log("vao day");
    // }
    deviceSizeDetect(width);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  const deviceSizeDetect = (screenWidth) => {
    if (screenWidth > 1000 && deviceType !== DEVICE_TYPE.DESKTOP) {
      setDeviceType(DEVICE_TYPE.DESKTOP);
    }

    if (screenWidth <= 1000 && deviceType !== DEVICE_TYPE.MOBILE) {
      setDeviceType(DEVICE_TYPE.MOBILE);
    }
  };

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const toggleExpandDrawer = (currentStatus) => {
    setExpandDrawer(!currentStatus);
    handleExpandDrawer(currentStatus);
  };

  const changeSmallDrawer = (_isSmallDrawer) => {
    setIsSmallDrawer(!_isSmallDrawer);
    if (_isSmallDrawer) {
      setExpandDrawer(true);
      handleExpandDrawer(false);
    }
    if (!_isSmallDrawer) {
      setExpandDrawer(false);
      handleExpandDrawer(true);
    }
  };

  const handleExpandDrawer = (currentStatus) => {
    if (!currentStatus) {
      const el = document.querySelector("#cus-drawer");
      el.classList.add("ant-drawer--animate-expand");
      el.classList.remove("ant-drawer--animate-unexpand");
    }
    if (currentStatus) {
      const el = document.querySelector("#cus-drawer");
      el.classList.remove("ant-drawer--animate-expand");
      el.classList.add("ant-drawer--animate-unexpand");
    }
  };

  useEffect(() => {
    // if (width >= 1000 && drawer === true) {
    //   setDrawer(false);
    //   console.log("vao day");
    // }
  }, [width]);

  // useEffect(() => {
  //   if (width >= 1000 && drawer === true) {
  //     setDrawer(false);
  //     console.log("vao day");
  //   }
  // }, [width]);

  console.log("current device", deviceType);
  return (
    <>
      <SideBar
        deviceType={deviceType}
        drawer={drawer}
        toggleDrawer={toggleDrawer}
        expandDrawer={expandDrawer}
        toggleExpandDrawer={toggleExpandDrawer}
        isSmallDrawer={isSmallDrawer}
      />
      <ContentWrapper drawer={drawer} expandDrawer={expandDrawer}>
        <Header
          {...props}
          deviceType={deviceType}
          drawer={drawer}
          toggleDrawer={toggleDrawer}
          expandDrawer={expandDrawer}
          toggleExpandDrawer={toggleExpandDrawer}
          isSmallDrawer={isSmallDrawer}
          changeSmallDrawer={changeSmallDrawer}
        />
        <ComponentWrapper>
          <Component {...props} />
        </ComponentWrapper>
      </ContentWrapper>
    </>
  );
};

export { withMainLayout };
