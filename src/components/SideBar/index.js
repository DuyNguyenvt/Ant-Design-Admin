import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  border: solid 2px;
  position: fixed;
  top: 61px;
  height: calc(100vh - 61px);
  background: orange;
  right: 0;
`;

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false,
    };
  }
  render() {
    return (
      <Wrapper>
        <div>this is the side bar</div>
      </Wrapper>
    );
  }
}

export default SideBar;
