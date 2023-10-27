import React from "react";
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact"
import NotFound from "./Components/NotFound";
import SingleProduct from "./Components/SingleProduct";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/products/:productId" element={<SingleProduct />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
