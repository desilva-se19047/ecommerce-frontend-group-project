import Cart from './pages/Cart';
import Home from './pages/Home'
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect
} from "react-router-dom";
import Success from './pages/Success';


const App = () => {
  return (
    <Router>
      <Routes>

      

      <Route exact path="/" element={<Home />} />  
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/product/id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/success" element={<Success />} />
      {/*
      <Route path="/login"} >
        {user ? Redirect to ="/"/ : <Login/>}
      </Route>
      <Route path="/register"} >
        {user ? Redirect to ="/"/ : <Register/>}
      </Route>
      */
      }
      </Routes>
    </Router>
  );
};

export default App

