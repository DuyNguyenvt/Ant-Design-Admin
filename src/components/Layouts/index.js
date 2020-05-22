import React, { useState, useEffect } from "react";

import styled from "styled-components";
import Header from "components/Header";
import WindowSize, { useWindowSize } from "@reach/window-size";

const ContentWrapper = styled.div`
  transition: all 0.5s;
  @media (min-width: 1000px) {
    ${({ expandDrawer }) => {
      if (expandDrawer) {
        return "margin-left: 256px;";
      }
      return "margin-left: 100px;";
    }};
  }
  transform: ${({ drawer }) => {
    if (drawer) {
      return "translate(-256px, 0);";
    }
  }};
`;

const ComponentWrapper = styled.div`
  padding-top: 55px;
  background: #f7f7f8;
  min-height: calc(100vh - 55px);
`;

const withMainLayout = (Component) => (props) => {
  const [drawer, setDrawer] = useState(false);
  const [expandDrawer, setExpandDrawer] = useState(false);
  const [isSmallDrawer, setIsSmallDrawer] = useState(true);

  const [mouseEnterDrawer, setMouseEnterDrawer] = useState(false);

  const { width, height } = useWindowSize();

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
    if (width >= 1000 && drawer === true) {
      setDrawer(false);
      console.log("vao day");
    }
  }, [width]);

  useEffect(() => {
    if (width >= 1000 && drawer === true) {
      setDrawer(false);
      console.log("vao day");
    }
  }, [width]);

  return (
    <>
      <ContentWrapper drawer={drawer} expandDrawer={expandDrawer}>
        <Header
          {...props}
          drawer={drawer}
          toggleDrawer={toggleDrawer}
          toggleExpandDrawer={toggleExpandDrawer}
          handleExpandDrawer={handleExpandDrawer}
          setMouseEnterDrawer={setMouseEnterDrawer}
          mouseEnterDrawer={mouseEnterDrawer}
          windowWidth={width}
          expandDrawer={expandDrawer}
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
