import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import { Routes, Route, Link } from "react-router-dom";
import Nav from "./component/ui/nav.js";
import ShopContext from "./component/shopContext";
import About from "./pages/about";
import Home from "./pages/home.js";
import Items from "./pages/items.js";
import Contact from "./pages/contact.js";
import Shop from "./pages/shop.js";
import Product_details from "./pages/product_details.js";
import Category_details from "./pages/category_details.js";
import FooterView from "./pages/footer.js";
import Profile from "./profile/profile";
import LoginPage from "./useraccount/login";
import Registration from "./useraccount/registration";
import Dashboard from "./useraccount/dashboard";
import Checkout from "./products/chekoutform";
import AddCart from "./products/cart.js";
import Orders from "./useraccount/orders";
import Wishlist from "./useraccount/wishlist";
import Supportticket from "./useraccount/supportticket";
import Profileinfo from "./useraccount/profileinfo";
import Address from "./useraccount/address";
import Paymentmethod from "./useraccount/paymentmethod";
import Ordersdetails from "./useraccount/ordersdetails";
import Error from "./pages/error";

function App() {
 
  return (
    <div className="App">
      <ShopContext>
        <Nav />

        <Routes>
          <Route path="/about" element={<About />} />

          <Route path="/" element={<Home />} />

          <Route path="/items/:id" element={<Items />} />

          <Route path="/shop" element={<Shop />} />

          <Route path="/contact" element={<Contact />} />

          {/* <Route path="/user" element={<Profile />} /> */}

          <Route path="/shop/product/:slug/" element={<Product_details />} />

          <Route path="/category/:slug/" element={<Category_details />} />

          <Route path="/cart" element={<AddCart />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Registration />} />
        
          <Route path="/user/" element={<Dashboard />} >
            <Route path="profile" element={<Profileinfo />} />
            <Route path="address" element={<Address />} />
            <Route path="paymentmethod" element={<Paymentmethod />} />
            <Route  path="orders/" element={<Orders />} />
              
            
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="supportticket" element={<Supportticket />} />
          </Route>
          <Route path="details/:id" element={<Ordersdetails />} />
          

          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <FooterView />
      </ShopContext>
    </div>
  );
}

export default App;
