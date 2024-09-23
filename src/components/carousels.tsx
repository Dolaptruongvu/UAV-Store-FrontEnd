import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './carousels-image';
import axios from 'axios';

function ControlledCarousel() {
  // Khai báo kiểu dữ liệu cho state `index`
  const [index, setIndex] = useState<number>(0);
  const [products,setProducts] = useState<any[]>([]);

  // Định nghĩa kiểu dữ liệu cho hàm handleSelect
  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  // get top 3 Products
  useEffect(()=>{
    const fetchProducts = async() =>{
      try{
        const response = await axios.get('http://127.0.0.1:5000/api/v1/products/top3Products')
        setProducts(response.data.data)
        
      }catch(err){
        console.log(err)
      }
    }
    fetchProducts();

  },[])

  return (
    <Carousel 
      activeIndex={index} 
      onSelect={handleSelect} 
      controls={false} 
      style={{ 
        height: '500px', 
        margin: '0 auto', 
        display: 'block', 
        boxShadow: '-22px 26px 58px rgba(0, 0, 0, 0.176)' 
      }}
    >
      {products && products.map((product,idx)=>(
         <Carousel.Item style={{ height: '100%' }}>
            <CarouselImage img={`${product.slug}`} text="First slide" />
            <Carousel.Caption>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </Carousel.Caption>
         </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;
