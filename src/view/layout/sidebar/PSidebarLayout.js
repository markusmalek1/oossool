import React, { useState } from "react";
import { Layout, Menu } from "antd";
import PDrawerLayout from "../drawer/PDrawerLayout";
import PMenuLayout from "../menu/PMenuLayout";

const { SubMenu } = Menu;

export default function PSidebarLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [width, setWidth] = useState("306px");
  const [collapsedWidth, setCollapsedWidth] = useState("32px");
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div>
      <Layout.Sider
        className="p-sidebar-layout"
        breakpoint={"lg"}
        theme="dark"
        width={width}
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        collapsedWidth={collapsedWidth}
      >
        <PMenuLayout />
      </Layout.Sider>
      <PDrawerLayout />
    </div>
  );
}
