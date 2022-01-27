import React from "react";
import SearchIcon from "../../assets/icons/SearchIcon";
import PInput from "../form/input/PInput";
import PSelect from "../form/select/PSelect";

export default function DSForm() {
  return (
    <div className="ds-layout">
      <span className="p-section">FORM INPUTS</span>
      <PInput placeholder="Placeholder" prefix={<SearchIcon />} />
      <br />
      <PSelect placeholder="Select placeholder" />
    </div>
  );
}
