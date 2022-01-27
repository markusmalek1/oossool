import React, { useState } from "react";
import { Layout } from "antd";

export default function PSideBarResp({ menu }) {
  const [collapsed, setCollapsed] = useState(false);
  const [width, setWidth] = useState("306px");
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout.Sider
      className="sidebar"
      breakpoint={"lg"}
      theme="dark"
      collapsedWidth={0}
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      collapsedWidth="32px"
    >
      {menu}
    </Layout.Sider>
  );
}
