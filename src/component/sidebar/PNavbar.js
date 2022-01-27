import React, { useState } from "react";
import { Drawer, Button } from "antd";
import HiddenIcon from "../../assets/icons/HiddenIcon";

export default function PNavbar({ menu }) {
  const [visible, setVisible] = useState(false);
  return (
    <nav className="navbar">
      <Button
        className="menu"
        type="primary"
        icon={<HiddenIcon />}
        onClick={() => setVisible(true)}
      />
      <Drawer
        title="Topics"
        placement="left"
        onClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        {menu}
      </Drawer>
      <a href="/">
        <h3>Logo</h3>
      </a>
    </nav>
  );
}
