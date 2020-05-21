import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import { Input, FormGroup } from "reactstrap";
// import classnames from "classnames";

const StyledFormGroup = styled(FormGroup)`
  &.errors.form-group {
    /* margin-bottom: 0px !important; */
  }
`;

function TextInput(props) {
  return (
    <StyledFormGroup className="sf-input--primary">
      <Input {...props} />
    </StyledFormGroup>
  );
}

export default TextInput;
