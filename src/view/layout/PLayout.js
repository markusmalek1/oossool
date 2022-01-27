import { Layout } from "antd";
import React, { useState } from "react";
import PContentUi from "../ui/content/PContentUi";
import PHeaderUi from "../ui/header/PHeaderUi";
import PHeaderLayout from "./header/PHeaderLayout";
import PSidebarLayout from "./sidebar/PSidebarLayout";

const { Content } = Layout;

export default function PLayout() {
  return (
    <div className="p-layout-fixed">
      <PHeaderLayout />
      <Layout>
        <PSidebarLayout />
        <Content style={{ margin: "32px 16px" }}>
          <PHeaderUi />
          <PContentUi />
        </Content>
      </Layout>
    </div>
  );
}
