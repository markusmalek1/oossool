import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import StarIcon from "../../assets/icons/StarIcon";
import PInput from "../../component/form/input/PInput";
import SearchIcon from "../../assets/icons/SearchIcon";
import PHeader from "../../component/header/PHeader";
import PTree from "../../component/tree/PTree";
import PContentUi from "./content/PContentUi";
import PHeaderUi from "./header/PHeaderUi";
import HiddenIcon from "../../assets/icons/HiddenIcon";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function PUi() {
  const [collapsed, setCollapsed] = useState(false);
  const [width, setWidth] = useState("306px");
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <PHeader />
      <Layout className="p-sider-layout">
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
          collapsedWidth="32px"
          width={width}
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
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: "32px 16px" }}>
            <PHeaderUi />
            <PContentUi />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
