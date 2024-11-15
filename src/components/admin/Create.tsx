import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import axiosInstance from '../../utilities/axiousEdition';

const Create: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [manufacturer, setManufacturer] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const [releaseDate, setReleaseDate] = useState<string>('');
  const [supplier, setSupplier] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(0);
  const [isProminent, setIsProminent] = useState<boolean>(false);
  const [productImage, setProductImage] = useState<File | null>(null);
  const [carouselImage, setCarouselImage] = useState<File | null>(null);
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('manufacturer', manufacturer);
    formData.append('category', category);
    formData.append('price', price.toString());
    formData.append('description', description);
    formData.append('releaseDate', releaseDate);
    formData.append('supplier', supplier);
    formData.append('quantity', quantity.toString());
    formData.append('isProminent', isProminent.toString());
    formData.append('type', JSON.stringify({ type: 'drone' }));

    if (productImage) formData.append('productImage', productImage);
    if (isProminent && carouselImage) formData.append('carouselImage', carouselImage);

    try {
      const response = await axiosInstance.post('/products', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.status === 201) {
        alert('Product created successfully!');
        setName('');
        setManufacturer('');
        setCategory('');
        setPrice(0);
        setDescription('');
        setReleaseDate('');
        setSupplier('');
        setQuantity(0);
        setIsProminent(false);
        setProductImage(null);
        setCarouselImage(null);
      }
    } catch (err: any) {
      setError('Error creating product: ' + err.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Form
        className="border p-4 rounded shadow"
        style={{ width: '520px' }}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicManufacturer">
          <Form.Label>Manufacturer</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter manufacturer"
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicReleaseDate">
          <Form.Label>Release Date</Form.Label>
          <Form.Control
            type="date"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSupplier">
          <Form.Label>Supplier</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter supplier"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formIsProminent">
          <Form.Check
            type="checkbox"
            label="Is this product prominent?"
            checked={isProminent}
            onChange={(e) => setIsProminent(e.target.checked)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProductImage">
          <Form.Label>Product Image</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => {
              const target = e.target as HTMLInputElement;
              if (target.files) setProductImage(target.files[0]);
            }}
            required={!isProminent || productImage !== null}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCarouselImage">
          <Form.Label>Carousel Image</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => {
              const target = e.target as HTMLInputElement;
              if (target.files) setCarouselImage(target.files[0]);
            }}
            disabled={!isProminent} // Disabled when 'isProminent' is false
          />
        </Form.Group>

        {error && <div className="alert alert-danger">{error}</div>}

        <Button variant="primary" type="submit" className="w-100">
          Create Product
        </Button>
      </Form>
    </div>
  );
};

export default Create;
