import React from "react";
import PCollapseMenu from "../collapse-menu/PCollapseMenu";
import PTree from "../tree/PTree";

export default function DSSidebar() {
  return (
    <div className="ds-layout">
      <span className="p-section">SIDEBAR COMPONENT</span>
      <PCollapseMenu />
      <br />
      <PTree />
    </div>
  );
}
