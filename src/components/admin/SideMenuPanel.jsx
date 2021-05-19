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
              <Link to="/admindash/editstore">
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
