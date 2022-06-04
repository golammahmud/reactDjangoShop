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
import Checkout from "./products/chekoutform";
import AddCart from "./products/cart.js";

// customer account section import
import LoginPage from "./useraccount/login";
import Registration from "./useraccount/registration";
import Dashboard from "./useraccount/dashboard";
import Orders from "./useraccount/orders";
import Wishlist from "./useraccount/wishlist";
import Supportticket from "./useraccount/supportticket";
import Profileinfo from "./useraccount/profileinfo";
import Address from "./useraccount/address";
import Paymentmethod from "./useraccount/paymentmethod";
import Ordersdetails from "./useraccount/ordersdetails";

// seller section components import
import SellerDashboard from "./seller/dashboard";
import SellerProfile from "./seller/profile";
import SellerOrders from "./seller/orders";
import Addproduct from "./seller/addproduct";
import SellerNavbar from "./seller/sellarnavbar";
import Products from "./seller/products";
import Editprofile from "./seller/editprofile";
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
          <Route path="/checkout" element={<Checkout />} />
          {/* customer section */}

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/user/" element={<Dashboard />}>
            <Route index element={<Profileinfo />} />
            <Route path="profile" element={<Profileinfo />} />
            <Route path="address" element={<Address />} />
            <Route path="paymentmethod" element={<Paymentmethod />} />
            <Route path="orders" element={<Orders />}>
              <Route path=":orderId" element={<Ordersdetails />} />
            </Route>
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="supportticket" element={<Supportticket />} />
          </Route>

          {/* seller routing section */}
          <Route path="/seller" element={<SellerNavbar />}>
            <Route index element={<SellerDashboard />} />
            <Route path="dashboard" element={<SellerDashboard />} />
            <Route path="addproduct" element={<Addproduct />} />
            <Route path="orders" element={<SellerOrders />} />
            <Route path="profile" element={<SellerProfile />} />

            <Route path="products" element={<Products />} />
          </Route>

          {/* cart section */}
          <Route path="cart" element={<AddCart/>} />
          <Route path="checkout" element={<Checkout />}/>

          <Route path="*" element={<Error />} />
        </Routes>
        <FooterView />
      </ShopContext>
    </div>
  );
}

export default App;
