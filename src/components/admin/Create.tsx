import React, { useState } from "react";
import axiosInstance from "../../utilities/axiousEdition";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom"; // Updated import

const Create: React.FC = () => {
  const [name, setName] = useState<string>(""); // Name of the product
  const [manufacturer, setManufacturer] = useState<string>(""); // Manufacturer
  const [category, setCategory] = useState<string>(""); // Category
  const [price, setPrice] = useState<string>(""); // Price
  const [description, setDescription] = useState<string>(""); // Description
  const [releaseDate, setReleaseDate] = useState<string>(""); // Release Date
  const [supplier, setSupplier] = useState<string>(""); // Supplier
  const [error, setError] = useState<string>(""); // Error message
  const [successMessage, setSuccessMessage] = useState<string>(""); // Success message
  const navigate = useNavigate(); // Use navigate instead of history

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Reset previous errors

    // Validate fields
    if (!name || !manufacturer || !category || !price || !description || !releaseDate || !supplier) {
      setError("Please fill in all fields.");
      return;
    }

    const productData = {
      name,
      manufacturer,
      category: category.split(",").map((cat) => cat.trim()), // Convert comma-separated string to array
      price: parseFloat(price),
      description,
      releaseDate,
      supplier,
      type: { category: "UAV" }, // Assuming this is a required field with a default structure
      isProminent: false, // You can customize this as needed
    };

    try {
      // Make POST request to create product
      const response = await axiosInstance.post("/products", productData);

      if (response.status === 201) {
        setSuccessMessage("Product created successfully!");
        // Reset form fields
        setName("");
        setManufacturer("");
        setCategory("");
        setPrice("");
        setDescription("");
        setReleaseDate("");
        setSupplier("");
        setTimeout(() => {
          navigate("/management"); // Use navigate to redirect to management page
        }, 2000);
      } else {
        setError("Failed to create product.");
      }
    } catch (err) {
      console.error("Create error:", err);
      setError("Error creating product.");
    }
  };

  return (
    <div className="container my-5">
      <div className="border p-4 rounded shadow" style={{ maxWidth: "520px", margin: "0 auto" }}>
        <h3 className="text-center mb-4">Create UAV</h3>

        {/* Create Product Form */}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formProductName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formManufacturer">
            <Form.Label>Manufacturer</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter manufacturer"
              value={manufacturer}
              onChange={(e) => setManufacturer(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCategory">
            <Form.Label>Category (comma separated)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              step="0.01"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter product description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formReleaseDate">
            <Form.Label>Release Date</Form.Label>
            <Form.Control
              type="date"
              value={releaseDate}
              onChange={(e) => setReleaseDate(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formSupplier">
            <Form.Label>Supplier</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter supplier name"
              value={supplier}
              onChange={(e) => setSupplier(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Create Product
          </Button>
        </Form>

        {error && <div className="alert alert-danger mt-3">{error}</div>}
        {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
      </div>
    </div>
  );
};

export default Create;
