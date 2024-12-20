import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import axios from 'axios';
import { useSearchParams } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState<any[]>([]);
  const [searchParams] = useSearchParams();
  const slugName = searchParams.get('slugName');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = 'https://uav-store-backend.onrender.com/api/v1/products';
        if (slugName) {
          url += `?slugName=${slugName}`;
        }
        const response = await axios.get(url);
        console.log("API Response:", response.data.products);
        setProducts(response.data.products || []); // Ensure it's an array
      } catch (error: any) { // Casting error to 'any' to avoid TS18046 error
        console.error("Error fetching products:", error.response?.data || error.message);
      }
    };

    fetchProducts();
  }, [slugName]);

  return (
    <Container className="pt-5 pb-4 mb-3">
      <Row xs={1} md={4} className="g-4">
        {products.length > 0 ? products.map((product) => {
          const imageUrl = product.images?.[0] ? `/productimg/${product.images[0]}` : "/default-image.jpg";
          return (
            <Col key={product.id}>
              <Card>
                <Card.Img variant="top" src={imageUrl} alt={product.name} />
                <Card.Body>
                  <Card.Title as="h4">{product.name}</Card.Title>
                  <Card.Subtitle as="h5">
                    {product.price} USD
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          );
        }) : (
          <Col>
            <p>No products available.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default ProductList;
