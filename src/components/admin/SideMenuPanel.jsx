import React from "react";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Envelope, Pencil } from "react-bootstrap-icons";

import "./SideMenuPanel.css";

const SideMenuPanel = () => {
  return (
    <div>
      <ProSidebar className="side-menu-panel">
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem style={{ fontSize: "1.5rem", fontFamily: "Baskerville"}}>Admin Dashboard</MenuItem>
            <SubMenu title="Inbox" icon={<Envelope />}>
              <MenuItem>Messages</MenuItem>
            </SubMenu>
            <SubMenu title="Editor Mode" icon={<Pencil />}>
              <MenuItem>Store</MenuItem>
              <MenuItem>Blog</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
        <SidebarFooter></SidebarFooter>
      </ProSidebar>
    </div>
  );
};

export default SideMenuPanel;
