import React, { useState, useEffect } from "react";
import axiosInstance from "../../utilities/axiousEdition";

const Update: React.FC = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    manufacturer: "",
    category: "",
    price: 0,
    description: "",

  });

  const [error, setError] = useState("");

  useEffect(() => {

    const fetchProductData = async (id: string) => {
      try {
        const response = await axiosInstance.get(`/products/:id`);
        setFormData(response.data);
      } catch (err) {
        setError("Error fetching product data");
      }
    };


    const productId = "product-id"; 
    fetchProductData(productId);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axiosInstance.patch(`/products/${formData.id}`, formData);
      alert("Product updated successfully");
    } catch (err: any) {
      setError("Error updating product");
    }
  };

  return (
    <div>
      <h3>Update UAV</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="manufacturer" className="form-label">Manufacturer</label>
          <input
            type="text"
            className="form-control"
            id="manufacturer"
            name="manufacturer"
            value={formData.manufacturer}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Product
        </button>
      </form>
      {error && <div className="alert alert-danger mt-2">{error}</div>}
    </div>
  );
};

export default Update;
