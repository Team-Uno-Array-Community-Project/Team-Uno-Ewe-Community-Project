import React from "react";
import { Link } from "react-router-dom";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Envelope, Pencil, CurrencyDollar } from "react-bootstrap-icons";

// Function that creates the Menu Panel for Admin view only.
// This menu allows the admin to navigate through their inbox and messages
// received from completed Contact Forms, and also, have editing permissions
// 1) To change inventory displayed in Featured Products portion of public site
// 2) To author new blog posts which will appear on public site.
const SideMenuPanel = () => {
  return (
    <div>
      <ProSidebar className="side-menu-panel">
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem style={{ fontSize: "1.5rem", fontFamily: "Baskerville" }}>
              Admin Dashboard
            </MenuItem>
            <SubMenu title="Inbox" icon={<Envelope />}>
              <Link to="/admindash">
                <MenuItem>View Messages</MenuItem>
              </Link>
            </SubMenu>
            <SubMenu title="Store" icon={<CurrencyDollar />}>
              <Link to="/editstore">
                <MenuItem>Edit Store</MenuItem>
              </Link>
            </SubMenu>
            <SubMenu title="Blog" icon={<Pencil />}>
              <Link to="/editblog">
                <MenuItem>Post to Blog</MenuItem>
              </Link>
            </SubMenu>
          </Menu>
        </SidebarContent>
        <SidebarFooter></SidebarFooter>
      </ProSidebar>
    </div>
  );
};

export default SideMenuPanel;
