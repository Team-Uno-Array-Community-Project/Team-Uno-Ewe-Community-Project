import React, {useState, useEffect} from "react";
import EditStoreCards from "./EditStoreCards";
// import VendorProductCards from "../../vendorpage/VendorProductCards"

const EditStore = () => {
  const [adminItems, setAdminItems] = useState([]);
useEffect(() => {

  fetch("/api/item/")
  .then(res => res.json())
  .then(data => {
   
    setAdminItems(data);
  })
  .catch(err => {
    console.error(err);
  });
}, [])


// const [show, setShow] = useState(true);
// const handleSave = () => {
//   if (
//    setAdminItems.featured === 9);
//    return (setAdminItems);
   
  

//   }

  
  return (
    <div> 
      <EditStoreCards Products={adminItems} />
    </div>
  );
};

export default EditStore;