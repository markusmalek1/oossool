import React, { useState } from "react";
import { Tree } from "antd";
import HiddenIcon from "../../assets/icons/HiddenIcon";
import ExpandIcon from "../../assets/icons/ExpandIcon";
const treeData = [
  {
    title: "Advertising",
    key: "0-0",
    children: [
      {
        title: "Heineken",
        key: "0-0-0",
        children: [
          {
            title: "Fl",
            key: "0-0-0-0",
          },
          {
            title: "UCL",
            key: "0-0-0-1",
          },
        ],
      },
      {
        title: "Daimler",
        key: "0-0-1",
      },
    ],
  },
  {
    title: "Social Media",
    key: "0-1",
    children: [
      {
        title: "Youtube",
        key: "0-1-0-0",
      },
      {
        title: "Instagram",
        key: "0-1-0-1",
      },
    ],
  },
  {
    title: "NGOs",
    key: "0-2",
  },
  {
    title: "Abandoned projects",
    key: "0-3",
  },
];

export default function PTree() {
  const [expandedKeys, setExpandedKeys] = useState(["0-0-0", "0-0-1"]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(false);

  const onExpand = (expandedKeysValue) => {
    console.log("onExpand", expandedKeysValue); // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.

    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onSelect = (selectedKeysValue, info) => {
    console.log("onSelect", info);
    setSelectedKeys(selectedKeysValue);
  };

  return (
    <Tree
      showIcon
      onExpand={onExpand}
      expandedKeys={expandedKeys}
      autoExpandParent={autoExpandParent}
      onSelect={onSelect}
      selectedKeys={selectedKeys}
      treeData={treeData}
      switcherIcon={<ExpandIcon />}
    />
  );
}
