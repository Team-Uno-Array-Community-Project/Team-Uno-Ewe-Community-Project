import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import EditStore from "./editor_mode/EditStore";
import EditBlog from "./editor_mode/EditBlog";
import SideMenuPanel from "./SideMenuPanel";
import Inbox from "./mailbox/Inbox";
import Message from "./mailbox/Message";

import InboxData from "./mailbox/InboxData";
import MessageData from "./mailbox/MessageData";

import "./AdminDash.css";
import LoginForm from "./Login";

const AdminDash = () => {
  return (
    
    <Container className="admindash-container" fluid>
    <div>
      <header>
        <SideMenuPanel />
      </header>
      <main>
        <Switch>
          <Route path ='/admindash/login' component={LoginForm} />
          <Route path="/admindash/editstore" component={EditStore} />
          <Route path="/admindash/editblog" component={EditBlog} />
          <Route path="/admindash/inbox" render={(props) => <Inbox InboxData={InboxData} {...props} />}
          />
          ƒ <Route path="/admindash/inbox/messages" render={(props) => <Message MessageData={MessageData} {...props} />}
          />
        </Switch>
      </main>
    </div>
    </Container>
  );
};

export default AdminDash;
