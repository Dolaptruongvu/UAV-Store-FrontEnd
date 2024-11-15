import React, { useState, useEffect, useCallback } from "react";
import axiosInstance from "../../utilities/axiousEdition";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";  // Import useNavigate from react-router-dom

const Update: React.FC = () => {
  const [id, setId] = useState<string>(""); // Product ID to be inputted
  const [product, setProduct] = useState<any>({
    name: "",
    manufacturer: "",
    category: "",
    price: "",
    description: "",
    releaseDate: "",
    supplier: "",
  });
  const [error, setError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const navigate = useNavigate(); // useNavigate hook for navigation

  // Memoize the fetchProductData function using useCallback
  const fetchProductData = useCallback(async () => {
    if (id) {
      try {
        const response = await axiosInstance.get(`/products/${id}`);
        if (response.status === 200 && response.data.status === "success") {
          const productData = response.data.product;
          setProduct({
            ...productData,
            category: productData.category.join(", "), // Convert array to comma-separated string
          });
        } else {
          setError("Product not found.");
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Error fetching product details.");
      }
    }
  }, [id]);  // Dependency array includes 'id' since the function depends on it

  // Fetch product data when the ID is provided
  useEffect(() => {
    fetchProductData();
  }, [fetchProductData]);  // Now we can safely include fetchProductData in the dependency array

  // Handle form submission to update product
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Reset previous errors

    // Validate ID
    if (!id) {
      setError("Product ID is required.");
      return;
    }

    // Prepare updated product data, only send fields that are changed
    const updatedProductData: any = {};

    if (product.name) updatedProductData.name = product.name;
    if (product.manufacturer) updatedProductData.manufacturer = product.manufacturer;
    if (product.category) updatedProductData.category = product.category.split(",").map((cat: string) => cat.trim());
    if (product.price) updatedProductData.price = parseFloat(product.price);
    if (product.description) updatedProductData.description = product.description;
    if (product.releaseDate) updatedProductData.releaseDate = product.releaseDate;
    if (product.supplier) updatedProductData.supplier = product.supplier;

    try {
      const response = await axiosInstance.patch(`/products/${id}`, updatedProductData);

      if (response.status === 200) {
        setSuccessMessage("Product updated successfully!");
        setTimeout(() => {
          navigate("/management"); // Redirect to management page after successful update
        }, 2000);
      } else {
        setError("Failed to update product.");
      }
    } catch (err) {
      console.error("Update error:", err);
      setError("Error updating product.");
    }
  };

  return (
    <div className="container my-5">
      <div className="border p-4 rounded shadow" style={{ maxWidth: "520px", margin: "0 auto" }}>
        <h3 className="text-center mb-4">Update UAV</h3>

        {/* Product ID Input */}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formProductId">
            <Form.Label>Product ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </Form.Group>

          {/* Other form fields for the product */}
          <Form.Group className="mb-3" controlId="formProductName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formManufacturer">
            <Form.Label>Manufacturer</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter manufacturer"
              value={product.manufacturer}
              onChange={(e) => setProduct({ ...product, manufacturer: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product category (comma separated)"
              value={product.category}
              onChange={(e) => setProduct({ ...product, category: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter price"
              value={product.price}
              onChange={(e) => setProduct({ ...product, price: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter product description"
              value={product.description}
              onChange={(e) => setProduct({ ...product, description: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formReleaseDate">
            <Form.Label>Release Date</Form.Label>
            <Form.Control
              type="date"
              value={product.releaseDate}
              onChange={(e) => setProduct({ ...product, releaseDate: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formSupplier">
            <Form.Label>Supplier</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter supplier"
              value={product.supplier}
              onChange={(e) => setProduct({ ...product, supplier: e.target.value })}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Update Product
          </Button>
        </Form>

        {error && <div className="alert alert-danger mt-3">{error}</div>}
        {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
      </div>
    </div>
  );
};

export default Update;
