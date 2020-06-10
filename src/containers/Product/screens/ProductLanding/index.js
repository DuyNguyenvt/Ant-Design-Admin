import React from "react";
import styled from "styled-components";
import ProductCard from "containers/Product/components/Shared/ProductCard";
import Map from "containers/Product/components/Shared/Map";

import { Col, Row } from "antd";
// import MyProfile from "containers/App/components/myProfile";

const Wrapper = styled.div``;

const ProductCardContainer = styled(Row)`
  /* border: solid 2px; */
`;

const ProductCardWrapper = styled.div`
  padding: 10px 10px 0 10px;
`;

const ProductMapContainer = styled(Row)`
  padding: 10px 10px 0 10px;
  /* height: 800px; */
`;

function ProductLanding() {
  return (
    <Wrapper>
      <ProductCardContainer>
        <Col md={6} xs={12}>
          <ProductCardWrapper>
            <ProductCard />
          </ProductCardWrapper>
        </Col>
        <Col md={6} xs={12}>
          <ProductCardWrapper>
            <ProductCard />
          </ProductCardWrapper>
        </Col>
        <Col md={6} xs={12}>
          <ProductCardWrapper>
            <ProductCard />
          </ProductCardWrapper>
        </Col>
        <Col md={6} xs={12}>
          <ProductCardWrapper>
            <ProductCard />
          </ProductCardWrapper>
        </Col>
      </ProductCardContainer>
      <ProductMapContainer>
        <Col xs={24}>
          <Map />
        </Col>
      </ProductMapContainer>
    </Wrapper>
  );
}

export default ProductLanding;
