import React from "react";
import styled from "styled-components";
import { VectorMap } from "react-jvectormap";
import { Row, Col, Table } from "antd";
import { PieChartOutlined, PlusCircleOutlined } from "@ant-design/icons";

const Wrapper = styled.div`
  border: solid 1px rgba(0, 0, 0, 0.125);
  border-radius: 3px;
  padding: 15px;
  background: white;
  width: 100%;
  /* height: 300px; */
  /* width: 500px;
  height: 500px; */
  /* #map1 {
    position: absolute;
    height: 100%;
  } */
  .jvectormap-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    svg {
      height: 250px;
      width: 90%;
    }
  }
`;

const MapWrapper = styled.div`
  border: solid 2px;
  height: 300px;
  width: 100%;
`;

const TableWrapper = styled.div`
  padding-right: 5px;
`;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Jim",
        value: "Jim",
      },
      {
        text: "Submenu",
        value: "Submenu",
        children: [
          {
            text: "Green",
            value: "Green",
          },
          {
            text: "Black",
            value: "Black",
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  {
    title: "Age",
    dataIndex: "age",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ["descend", "ascend"],
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];

const mapData = {
  CN: 100000,
  IN: 9900,
  SA: 86,
  EG: 70,
  SE: 0,
  FI: 0,
  FR: 0,
  US: 20,
};

function Map(props) {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <Wrapper>
      <Row>
        <Col md={12} xs={24}>
          <TableWrapper>
            <Table columns={columns} dataSource={data} onChange={onChange} />
          </TableWrapper>
        </Col>
        <Col md={12} xs={24}>
          {/* <MapWrapper>
            <VectorMap
              map={"world_mill"}
              backgroundColor="transparent" //change it to ocean blue: #0077be
              zoomOnScroll={false}
              containerStyle={
                {
                  // width: "100%",
                  // height: "520px",
                }
              }
              //   onRegionClick={handleClick} //gets the country code
              containerClassName="map"
              regionStyle={{
                initial: {
                  fill: "#e4e4e4",
                  "fill-opacity": 0.9,
                  stroke: "none",
                  "stroke-width": 0,
                  "stroke-opacity": 0,
                },
                hover: {
                  "fill-opacity": 0.8,
                  cursor: "pointer",
                },
                selected: {
                  fill: "#2938bc", //color for the clicked country
                },
                selectedHover: {},
              }}
              regionsSelectable={true}
              series={{
                regions: [
                  {
                    values: mapData, //this is your data
                    scale: ["#146804", "#ff0000"], //your color game's here
                    normalizeFunction: "polynomial",
                  },
                ],
              }}
            />
          </MapWrapper> */}
          {/* <div style={{ width: 500, height: 500 }}> */}
          <MapWrapper>
            <VectorMap
              map={"us_aea"}
              backgroundColor="#3b96ce"
              //   ref="map"
              containerStyle={{
                width: "100%",
                height: "100%",
              }}
              id="map1"
              containerClassName="map"
            />
          </MapWrapper>
          {/* </div> */}
        </Col>
      </Row>
    </Wrapper>
  );
}

export default Map;
