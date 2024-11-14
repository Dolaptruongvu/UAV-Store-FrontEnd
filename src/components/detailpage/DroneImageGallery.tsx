import React, { useState } from "react";

const images = [
  "https://flycamvn.com/wp-content/uploads/2018/05/8b3d2f61-bde9-4679-8eac-82412c828d26.jpg",
  "https://cdn-icons-png.flaticon.com/512/10220/10220778.png",
  "https://qtu.edu.vn/wp-content/uploads/2023/08/love-3099659_1280.png",
  "https://data.textstudio.com/output/sample/animated/5/2/9/5/your-2-5925.gif",
  "https://c8.alamy.com/comp/2D39EFE/mom-word-calligraphy-with-a-heart-shape-isolated-on-white-background-2D39EFE.jpg",
  "https://i.etsystatic.com/9002979/r/il/aa4676/2026789069/il_fullxfull.2026789069_w43o.jpg",
]; 


const DroneImageGallery: React.FC = () => {
    const [mainImage, setMainImage] = useState(images[0]);
  
    return (
      <div className="text-center mb-4">
        {/* Main Image */}
        <div style={{ display: "inline-block", width: "600px", height: "400px" }}>
          <img
            src={mainImage}
            alt="Main Drone"
            className="rounded shadow mb-3"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
  
        {/* Thumbnail Gallery */}
        <div className="d-flex justify-content-center">
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                width: "80px",
                height: "80px",
                margin: "0 5px",
                cursor: "pointer",
              }}
            >
              <img
                src={image}
                alt={`Drone view ${index + 1}`}
                onClick={() => setMainImage(image)}
                className="img-thumbnail"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default DroneImageGallery;