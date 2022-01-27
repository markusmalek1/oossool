import React, { useState } from "react";
import { Drawer, Menu } from "antd";
import HiddenIcon from "../../../assets/icons/HiddenIcon";
import StarIcon from "../../../assets/icons/StarIcon";
import PInput from "../../../component/form/input/PInput";
import SearchIcon from "../../../assets/icons/SearchIcon";
import PTree from "../../../component/tree/PTree";

const { SubMenu } = Menu;

export default function PDrawerLayout() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="p-drawer-layout">
      <span className="p-trigger-layout" onClick={() => setVisible(true)}>
        <HiddenIcon />
      </span>
      <Drawer
        placement="left"
        onClose={() => setVisible(false)}
        closable
        visible={visible}
      >
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <SubMenu key="sub1" title="Starred locations">
            <Menu.Item key="1">
              <span className="p-fav-menu">
                <span style={{ marginRight: 8 }}>
                  <StarIcon />
                </span>
                Shark festival 2021
              </span>
            </Menu.Item>
            <Menu.Item key="2">
              <span className="p-fav-menu">
                <span style={{ marginRight: 8 }}>
                  <StarIcon />
                </span>
                Women in Tech
              </span>
            </Menu.Item>
            <Menu.Item key="3">
              <span className="p-fav-menu">
                <span style={{ marginRight: 8 }}>
                  <StarIcon />
                </span>
                Shark festival 2021
              </span>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title="Browser">
            <PInput
              placeholder="Filter"
              prefix={<SearchIcon />}
              style={{ marginTop: 16 }}
            />
            <div style={{ margin: "16px 0" }}>
              <PTree />
            </div>
          </SubMenu>
        </Menu>
      </Drawer>
    </div>
  );
}
