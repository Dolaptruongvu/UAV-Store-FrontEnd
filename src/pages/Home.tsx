import React from "react";
import MyNavbar from "../components/navbar";
import ProductList from "../components/productList";
import ControlledCarousel from "../components/carousels";
import Footer from "../components/footer";

// Explicitly typing the Home component
const Home: React.FC = () => {
  return (
    <>
      <MyNavbar />
      <ControlledCarousel />
      <ProductList />
      <Footer />
    </>
  );
};

export default Home;
