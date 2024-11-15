import React, { useState } from "react";
import axiosInstance from "../../utilities/axiousEdition";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Delete: React.FC = () => {
  const [productId, setProductId] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); 

    if (!productId) {
      setError("Product ID is required");
      return;
    }

    try {
      const response = await axiosInstance.delete(`/products/` + productId);

      if (response.status === 204) {
        alert("Product deleted successfully");
        setProductId(""); 
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
