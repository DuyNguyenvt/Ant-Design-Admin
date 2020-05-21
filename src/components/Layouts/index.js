import React, { useState, useEffect } from "react";

import styled from "styled-components";
import Header from "components/Header";
import windowSize from "react-window-size";

const ContentWrapper = styled.div`
  transition: all 0.5s;
  @media (min-width: 1000px) {
    margin-left: 256px;
  }
  transform: ${({ drawer }) =>
    drawer
      ? `
  translate(-256px, 0);
  `
      : `
      `};
  /* transform: translate(-256px, 0); */
  /* margin-left: 456px !important; */
`;

const ComponentWrapper = styled.div`
  /* margin-top: 55px; */
  padding-top: 55px;
  background: #f7f7f8;
`;

const withMainLayout = (Component) =>
  windowSize((props) => {
    const [drawer, setDrawer] = useState(false);

    const toggleDrawer = () => {
      setDrawer(!drawer);
    };

    useEffect(() => {
      if (props.windowWidth >= 1000) {
        setDrawer(false);
      }
    }, [props.windowWidth]);

    return (
      <>
        <ContentWrapper drawer={drawer}>
          <Header {...props} drawer={drawer} toggleDrawer={toggleDrawer} />
          <ComponentWrapper>
            <Component {...props} />
          </ComponentWrapper>
        </ContentWrapper>
      </>
    );
  });

export { withMainLayout };
