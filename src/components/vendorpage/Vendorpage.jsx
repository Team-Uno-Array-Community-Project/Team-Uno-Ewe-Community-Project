import React from "react";
import VendorProductCards from "./VendorProductCards";


const VendorPage = (props) => {

  return (
    <div> 
      <VendorProductCards ProductShown={props.ProductShown} />
    </div>
  );
};

export default VendorPage;
