import React, { useState } from "react";
import { Layout } from "antd";
import TopicMenu from "./TopicMenu";
import PNavbar from "./PNavbar";
import PSideBarResp from "./PSideBarResp";

export default function PLayoutSide() {
  const topics = ["First topic", "Second topic", "Third topic"];
  const [contentIndex, setContentIndex] = useState(0);
  const [selectedKey, setSelectedKey] = useState("0");
  const changeSelectedKey = (event) => {
    const key = event.key;
    setSelectedKey(key);
    setContentIndex(+key);
  };
  const Menu = (
    <TopicMenu
      topics={topics}
      selectedKey={selectedKey}
      changeSelectedKey={changeSelectedKey}
    />
  );
  return (
    <div className="App">
      <PNavbar menu={Menu} />
      <Layout>
        <PSideBarResp menu={Menu} />
        <Layout.Content className="content">
          {topics[contentIndex]}
        </Layout.Content>
      </Layout>
    </div>
  );
}
