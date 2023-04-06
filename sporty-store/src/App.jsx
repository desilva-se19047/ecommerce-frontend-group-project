import React, { useState } from "react";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Signup";
import Login from "./pages/Signin";
import Cart from "./pages/Cart";

const App = () => {

  const [currentForm, setCurrentForm] = useState("signin");
  
    const toggleForm = () => {
      setCurrentForm(currentForm === "signin" ? "signup" : "signin");
    };
    
    return (
      <>
        <Home/>;
        <ProductList/>;
        <Product/>;
        <Cart/>;

        <div className="Load">
          {currentForm === "signin" ? 
            (<Login onFormSwitch={toggleForm} />) : 
            (<Register onFormSwitch={toggleForm} />)
          }
        </div>
      </>
  )
};

export default App;