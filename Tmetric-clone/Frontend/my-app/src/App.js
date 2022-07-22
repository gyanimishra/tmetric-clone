import { Route, Routes } from "react-router-dom";
import "./App.css";
import Price from "./Components/Price";
import About from "./Components/Sidebar/pages/About";
import Analytics from "./Components/Sidebar/pages/Analytics";
import Dashboard from "./Components/Sidebar/pages/Dashboard";
import Product from "./Components/Sidebar/pages/Product";
import ProductList from "./Components/Sidebar/pages/ProductList";
import Sidebar from "./Components/Sidebar/Sidebar";
import Comment from "./Components/Sidebar/pages/Comment";
import Signin from "./Components/Signin";
import Signup from "./Components/SignUp";

function App() {
  return (
    <div>
      {/* <Signup/>
     <Signin/>
      // */}
      <Price />
{/* 
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar> */}
    </div>
  );
}

export default App;
