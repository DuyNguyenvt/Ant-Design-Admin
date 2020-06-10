import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import { PieChartOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Card } from "@material-ui/core";

const Wrapper = styled.div`
  border: solid 1px rgba(0, 0, 0, 0.125);
  border-radius: 3px;
  padding: 15px;
  background: white;
`;

const IconWrapper = styled.div``;

const CardTitle = styled.div``;
const CardMainContent = styled.div``;
const Devider = styled.div`
  border-top: solid 1px rgba(0, 0, 0, 0.125);
  margin: 10px 0;
`;

const CardManipulation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function ProductCard(props) {
  return (
    <Wrapper>
      <Row>
        <Col xs={12}>
          <IconWrapper>
            <PieChartOutlined style={{ color: "#FFA534", fontSize: "50px" }} />
          </IconWrapper>
        </Col>
        <Col xs={12}>
          <CardTitle>Productivity</CardTitle>
          <CardMainContent>50%</CardMainContent>
        </Col>
      </Row>
      <Devider />
      <Row>
        <Col xs={24}>
          <CardManipulation>
            <PlusCircleOutlined style={{ marginRight: "5px" }} />
            <div>Update Now</div>
          </CardManipulation>
        </Col>
      </Row>
    </Wrapper>
  );
}

export default ProductCard;
