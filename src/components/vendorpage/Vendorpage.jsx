import React, {useState, useEffect} from "react";
import VendorProductCards from "./VendorProductCards";

// This displays the VendorProductCards using a fetch request to the database
const VendorPage = () => {
const [featured, setFeatured] = useState([]);
useEffect(() => {
  fetch("/api/item/")
  .then(res => res.json())
  .then(data => {
    setFeatured(data);
  })
  .catch(err => {
    console.error(err);
  });
}, [])

  return (
    <div> 
      <VendorProductCards ProductShown={featured} />
    </div>
  );
};

export default VendorPage;
