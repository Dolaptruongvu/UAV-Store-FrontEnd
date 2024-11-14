import React from "react";
import MyNavbar from "../components/navbar";
import Footer from "../components/footer";
import DroneImageGallery from "../components/detailpage/DroneImageGallery";
import DroneSpecifications from "../components/detailpage/DroneSpecifications";
import DroneDescription from "../components/detailpage/DroneDescription";
import DronePrice from "../components/detailpage/DronePrice";
import TechnicalTable from "../components/detailpage/TechnicalTable";
import ReviewsSection from "../components/detailpage/ReviewsSection";
import RelatedProducts from "../components/detailpage/RelatedProducts";
import ShippingInfo from "../components/detailpage/ShippingInfo";
import AddToCartButton from "../components/detailpage/AddToCartButton";
import Background from "../components/detailpage/Background";
import InnerBox from "../components/detailpage/InnerBox";

const DroneDetail: React.FC = () => {
  return (
    <>
      <Background /> 
      <MyNavbar />
      <div className="container my-5">
        <h2
          className="text-center mb-4"
          style={{
            color: "#ffffff", 
            fontWeight: "bold", 
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.6)",
            fontSize: "3rem", 
          }}
        >
          DJI Phantom 4 Pro
        </h2>
        <InnerBox> 
          <DroneImageGallery />
          <DronePrice />
          <DroneSpecifications />
          <DroneDescription />
          <TechnicalTable />
          <ReviewsSection />
          <RelatedProducts />
          <ShippingInfo />
          <AddToCartButton />
        </InnerBox>
      </div>
      <Footer />
    </>
  );
};

export default DroneDetail;
