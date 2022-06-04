import React from 'react';
import Editprofile from "./editprofile";

import {Outlet, NavLink, useParams,Routes ,Route} from 'react-router-dom'
function SellerProfile() {
  return (
    <div>SellerProfile
   {/* <Routes>
    <Route path="edit" element={<Editprofile />} />
   </Routes> */}
    </div>
  )
}

export default SellerProfile;