import React, { useState, useEffect } from "react";
import axiosInstance from "../../utilities/axiousEdition";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

const Delete: React.FC = () => {
  const [productId, setProductId] = useState<string>(""); // Stores the ID to delete
  const [error, setError] = useState<string>(""); // Error messages
  const [products, setProducts] = useState<{ id: number; name: string }[]>([]); // Products list

  // Fetch product list on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch products from the backend
  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get("/products");
      if (response.status === 200 && response.data.status === "success") {
        setProducts(response.data.products.map((product: any) => ({
          id: product.id,
          name: product.name,
        })));
      } else {
        setError("Failed to load products");
      }
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Error loading products");
    }
  };

  // Handle product deletion
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!productId) {
      setError("Product ID is required");
      return;
    }

    try {
      const response = await axiosInstance.delete(`/products/${productId}`);

      if (response.status === 204) {
        alert("Product deleted successfully");
        setProductId(""); 
        fetchProducts(); // Refresh product list after deletion
      } else {
        setError("Failed to delete product");
      }
    } catch (err: any) {
      console.error("Delete error:", err);
      setError("Error deleting product");
    }
  };

  return (
    <div className="container my-5">
      <div className="border p-4 rounded shadow" style={{ maxWidth: "520px", margin: "0 auto" }}>
        <h3 className="text-center mb-4">Delete UAV</h3>

        {/* Scrollable Product Table */}
        <div className="mb-4" style={{ maxHeight: "200px", overflowY: "auto" }}>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {products.slice(0, 10).map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        {/* Delete Form */}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formProductId">
            <Form.Label>Product ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product ID"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="danger" type="submit" className="w-100">
            Delete Product
          </Button>
        </Form>

        {error && <div className="alert alert-danger mt-3">{error}</div>}
      </div>
    </div>
  );
};

export default Delete;
