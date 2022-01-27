import React from "react";
import { Select } from "antd";
import ExpandIcon from "../../../assets/icons/ExpandIcon";

const { Option } = Select;

export default function PSelect(props) {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <div className="p-select">
      <Select
        id={props.id}
        placeholder={props.placeholder}
        onChange={handleChange}
        suffixIcon={<ExpandIcon />}
      >
        {props.option.map((e) => (
          <Option value={e}>{e}</Option>
        ))}
      </Select>
    </div>
  );
}
