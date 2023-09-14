// import Navbar from "./components/Navbar.jsx";
import Home from "./Home.jsx";
import Products from "./Products.jsx";
// import Footer from "./components/Footer.jsx";
import Product from "./Product.jsx"
import "../style/index.css";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      {/* <Navbar /> */}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productID" element={<Product />} />

       </Routes>


      {/* <Footer /> */}
    </>
  );
}
