import React from "react";
import VendorProductCards from "./VendorProductCards";
import YarnData from "../vendorpage/YarnData";
// import FibersData from "../vendorpage/FibersData";
// import ToolsData from "../vendorpage/ToolsData";


const VendorPage = () => {
  return (
    <div>
      <VendorProductCards YarnData={YarnData} />
      {/* <VendorProductCards FibersData={FibersData} /> */}
      {/* <VendorProductCards ToolsData={ToolsData} /> */}
    </div>
  );
};

export default VendorPage;
