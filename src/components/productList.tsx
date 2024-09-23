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
        let url = 'http://127.0.0.1:5000/api/v1/products';
        if (slugName) {
          url += `?slugName=${slugName}`;
        }
        const response = await axios.get(url);
        console.log("API Response:", response.data.products);
        // Ensure the response data is an array
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    
    fetchProducts();
  }, [slugName]);

  return (
    <Container className="pt-5 pb-4 mb-3">
      <Row xs={1} md={4} className="g-4">
        {products.length > 0 ? products.map((product) => (
          <Col key={product.id}> {/* Using product.id as the key */}
            <Card>
              <Card.Img variant="top" src={`/productimg/${product.images[0]}`} alt={product.name} />
              <Card.Body>
                <Card.Title as={'h4'}>{product.name}</Card.Title>
                <Card.Subtitle as={'h5'}>
                  {product.price} USD
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        )) : (
          <Col>
            <p>No products available.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default ProductList;
