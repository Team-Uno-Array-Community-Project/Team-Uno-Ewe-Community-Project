import React, { useState, useEffect } from "react";
import EditStoreCards from "./EditStoreCards";

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
      <EditStoreCards Products={adminItems} />
    </div>
  );
};

export default EditStore;
