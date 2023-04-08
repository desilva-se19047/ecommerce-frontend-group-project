import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import CompareProduct from "./pages/CompareProduct";
import Wishlist from "./pages/Wishlist";
import Signin from "./pages/Signin";
import Forgotpass from "./pages/Forgotpass";
import Signup from "./pages/Signup";
import Resetpass from "./pages/Resetpass";
import SingleBlog from "./pages/SingleBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPloicy from "./pages/RefundPloicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermAndContions from "./pages/TermAndContions";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./components/MainLayout";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Colorlist from "./pages/Colotlist";
import Categorylist from "./pages/Categorylist";
import Brandlist from "./pages/Brandlist";
import Productlist from "./pages/Productlist";
import Addcolor from "./pages/Addcolor";
import Addcat from "./pages/Addcat";
import Addbrand from "./pages/Addbrand";
import Addproduct from "./pages/Addproduct";
import ViewOrder from "./pages/ViewOrder";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";
import Resetpassword from "./pages/Resetpassword";




function App() {
  return (
    <>
      <BrowserRouter>

          <Routes>

            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="product" element={<OurStore />} />
              <Route path="product/:id" element={<SingleProduct />} />
              <Route path="blogs" element={<Blog />} />
              <Route path="blog/:id" element={<SingleBlog />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="compare-product" element={<CompareProduct />} />
              <Route path="wishlist" element={<Wishlist />} />
              <Route path="signin" element={<Signin />} />
              <Route path="user-forgot-password" element={<Forgotpass />} />
              <Route path="signup" element={<Signup />} />
              <Route path="user-reset-password" element={<Resetpass />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="refund-policy" element={<RefundPloicy />} />
              <Route path="shipping-policy" element={<ShippingPolicy />} />
              <Route path="term-conditions" element={<TermAndContions />} />
            </Route>

            <Route path="/admin" element={<Login />} />
            <Route path="/admin/reset-password" element={<Resetpassword />} />
            <Route path="/admin/forgot-password" element={<Forgotpassword />} />
            <Route path="/admin/dashboard" element={<MainLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="orders" element={<Orders />} />
              <Route path="order/:id" element={<ViewOrder />} />
              <Route path="customers" element={<Customers />} />
              <Route path="list-color" element={<Colorlist />} />
              <Route path="color" element={<Addcolor />} />
              <Route path="color/:id" element={<Addcolor />} />
              <Route path="list-category" element={<Categorylist />} />
              <Route path="category" element={<Addcat />} />
              <Route path="category/:id" element={<Addcat />} />
              <Route path="list-brand" element={<Brandlist />} />
              <Route path="brand" element={<Addbrand />} />
              <Route path="brand/:id" element={<Addbrand />} />
              <Route path="list-product" element={<Productlist />} />
              <Route path="product" element={<Addproduct />} />
            </Route>

          </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
