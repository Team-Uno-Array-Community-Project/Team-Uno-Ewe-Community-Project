import React, {useState, useEffect} from "react";
import EditStoreCards from "../../admin/editor_mode/EditStoreCards";


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

  // const [disabled, setDisabled] = useState(false);
  // const onChecked = (e) => {

  // }
  return (
    <div> 
      <EditStoreCards ProductShown={adminItems} />
    </div>
  );
};

export default EditStore;