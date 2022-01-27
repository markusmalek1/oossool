import React from "react";
import ExpandIcon from "../../assets/icons/ExpandIcon";
import HiddenIcon from "../../assets/icons/HiddenIcon";
import StarIcon from "../../assets/icons/StarIcon";
import PlayIcon from "../../assets/icons/PlayIcon";
import SearchIcon from "../../assets/icons/SearchIcon";

export default function DSIcons() {
  return (
    <div className="ds-layout">
      <span className="p-section">ICONS</span>
      <div
        style={{
          width: 150,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ExpandIcon />
        <HiddenIcon />
        <StarIcon />
        <PlayIcon />
        <SearchIcon />
      </div>
    </div>
  );
}
