// import React, { Children } from "react";
// import styled from "styled-components";
// import * as _ from "lodash";
// import { Collapse, Select } from "antd";
// import {
//   FundProjectionScreenOutlined,
//   RocketOutlined,
//   PartitionOutlined,
// } from "@ant-design/icons";

// import themes from "utils/themes";
// const { Panel } = Collapse;

// const PanelHeader = styled.div`
//   display: flex;
//   align-items: center;
//   span {
//     font-weight: 700;
//   }
// `;

// const PanelItem = styled.div`
//   :hover {
//     border-radius: 10px !important;
//     background-color: rgba(255, 255, 255, 0.1) !important;
//   }
//   padding: 12px 16px;
//   cursor: pointer;
// `;

// function MenuItem({ isCollapsable, itemName, key, subItems, children }) {
//   console.log("children", children);
//   return (
//     <>
//       {isCollapsable ? (
//         <Panel
//           header={
//             <PanelHeader>
//               <RocketOutlined
//                 style={{ fontSize: "25px", marginRight: "5px" }}
//               />
//               <span> {itemName || "UNKNOWN NAME"} </span>
//             </PanelHeader>
//           }
//           key={key}
//           // extra={genExtra()}
//         >
//           {/* <PanelItem>Face Unlock </PanelItem>
//           <PanelItem>
//             Nodejs server for controlling argricultural system
//           </PanelItem> */}
//           {/* {children} */}
//           {/* <div> ec </div> */}
//         </Panel>
//       ) : (
//         <div> singgle item </div>
//       )}
//     </>
//   );
// }

// // {subItems
// //         ? subItems.map((subItem, idx) => <PanelItem>{"test"}</PanelItem>) */}
// //         : null

// export default React.memo(MenuItem);
