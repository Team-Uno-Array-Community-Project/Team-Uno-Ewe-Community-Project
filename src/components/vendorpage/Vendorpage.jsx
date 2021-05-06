import React from 'react'
import VendorProductCards from './VendorProductCards';
import VendorpageData from "../vendorpage/VendorpageData";

const VendorPage = () => {
  return (
    <div>
      <VendorProductCards VendorpageData={VendorpageData}/>
    </div>
  )
}

export default VendorPage