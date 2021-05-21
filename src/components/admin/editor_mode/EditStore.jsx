import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

import EditStoreCards from "./EditStoreCards";
import SideMenuPanel from "../SideMenuPanel";

// This is a fetch request to bring in data from the database to display on the Admin Dashboard
const EditStore = () => {
  const [adminItems, setAdminItems] = useState([]);
  useEffect(() => {
    fetch("/api/item/")
      .then((res) => res.json())
      .then((data) => {
        setAdminItems(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="edit-store-container">
      <Row>
        <Col xl={2}>
          <SideMenuPanel />
        </Col>
        <Col xl={9}>
          <EditStoreCards Products={adminItems} />
        </Col>
      </Row>
    </div>
  );
};

export default EditStore;
