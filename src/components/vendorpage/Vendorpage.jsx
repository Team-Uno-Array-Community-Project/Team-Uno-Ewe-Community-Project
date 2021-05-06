import React from 'react'
import VendorProductCards from './VendorProductCards';
import VendorpageData from "../homepage/HomepageData";

const VendorPage = () => {
  return (
    <div>
      <VendorProductCards VendorpageData={VendorpageData}/>
    </div>
  )
}

export default VendorPage