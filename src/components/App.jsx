// import Navbar from "./components/Navbar.jsx";
import Home from "./Home.jsx";
import Products from "./Products.jsx";
// import Footer from "./components/Footer.jsx";
//Import SingleProduct from "./components/SingleProduct.jsx"
import "../style/index.css";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      {/* <Navbar /> */}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        {/* <Route path="/products/:productId" element={<SingleProduct />} /> */}

       </Routes>


      {/* <Footer /> */}
    </>
  );
}
