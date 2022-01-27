import React from "react";
import SearchIcon from "../../../assets/icons/SearchIcon";
import StarIcon from "../../../assets/icons/StarIcon";
import PButton from "../../../component/button/PButton";
import PInput from "../../../component/form/input/PInput";
import PSelect from "../../../component/form/select/PSelect";

export default function PHeaderUi() {
  return (
    <header className="p-content-header">
      <PInput
        placeholder="Type your search text here in OQL"
        prefix={<SearchIcon />}
      />
      <div className="p-content-sub-header">
        <div className="p-header-items">
          <PInput
            placeholder="Title or path contains"
            prefix={<SearchIcon />}
          />
        </div>
        <div className="p-header-items">
          <PSelect
            id="select1"
            placeholder="Upload date"
            option={["today", "yesterday"]}
          />
        </div>
        <div className="p-header-items">
          <PSelect
            id="select2"
            placeholder="Tags"
            option={["video", "image"]}
          />
        </div>
        <div className="p-header-items">
          <PSelect
            id="select3"
            placeholder="Uploader"
            option={["Malek", "Arbi"]}
          />
        </div>
        <div className="p-header-items">
          <PSelect id="select4" placeholder="More" option={["month", "Year"]} />
        </div>

        <div className="p-header-items">
          <PButton value="Search" />
        </div>
      </div>
    </header>
  );
}
