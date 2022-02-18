import React from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
const Home = () => {
    return (
      <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Categories />
        <Products/>
        <Newsletter/>
        <Footer/>
      </div>
    );
  };
  
  export default Home;