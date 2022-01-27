import React from "react";
import { Collapse } from "antd";
import StarIcon from "../../assets/icons/StarIcon";

const { Panel } = Collapse;

export default function PCollapseMenu() {
  return (
    <Collapse defaultActiveKey={["1"]} ghost>
      <Panel header="This is panel header 1" key="1">
        <span style={{ display: "flex", alignItems: "center" }}>
          <span style={{ marginRight: 8 }}>
            <StarIcon />
          </span>
          Here will be tree
        </span>
      </Panel>
    </Collapse>
  );
}
