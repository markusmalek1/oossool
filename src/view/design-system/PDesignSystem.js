import React from "react";
import DSComponents from "../../component/design-system/DSComponents";
import DSForm from "../../component/design-system/DSForm";
import DSIcons from "../../component/design-system/DSIcons";
import DSSidebar from "../../component/design-system/DSSidebar";
import DSTypography from "../../component/design-system/DSTypography";

export default function PDesignSystem() {
  return (
    <div className="p-design-system">
      <div className="p-row">
        <div>
          <div style={{ display: "flex" }}>
            <DSTypography />
            <DSIcons />
          </div>
          <DSForm />
        </div>
        <DSComponents />
        <DSSidebar />
      </div>
    </div>
  );
}
