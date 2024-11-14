import React, { useState } from "react";

const Create: React.FC = () => {
  const [name, setName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [category, setCategory] = useState("");
  const [weight, setWeight] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [batteryLife, setBatteryLife] = useState("");
  const [range, setRange] = useState("");
  const [maxSpeed, setMaxSpeed] = useState("");
  const [sensorType, setSensorType] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [supplier, setSupplier] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [ratings, setRatings] = useState("");
  const [price, setPrice] = useState("");
  const [accessoriesIncluded, setAccessoriesIncluded] = useState("");
  const [compatibility, setCompatibility] = useState("");
  const [type, setType] = useState("");
  const [images, setImages] = useState<File[]>([]);

  const handleCreate = () => {
    console.log("Create UAV:", {
      name,
      manufacturer,
      category,
      weight,
      dimensions,
      batteryLife,
      range,
      maxSpeed,
      sensorType,
      releaseDate,
      supplier,
      quantity,
      description,
      ratings,
      price,
      accessoriesIncluded,
      compatibility,
      type,
      images,
    });
    alert("UAV creation placeholder - No API available yet.");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files ? Array.from(e.target.files) : [];
    setImages(selectedFiles);
  };

  return (
    <div className="my-4">
      <h5>Create UAV</h5>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="form-control my-2" />
      <input type="text" placeholder="Manufacturer" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} className="form-control my-2" />
      <input type="text" placeholder="Category (comma separated)" value={category} onChange={(e) => setCategory(e.target.value)} className="form-control my-2" />
      <input type="text" placeholder="Weight" value={weight} onChange={(e) => setWeight(e.target.value)} className="form-control my-2" />
      <input type="text" placeholder="Dimensions" value={dimensions} onChange={(e) => setDimensions(e.target.value)} className="form-control my-2" />
      <input type="text" placeholder="Battery Life" value={batteryLife} onChange={(e) => setBatteryLife(e.target.value)} className="form-control my-2" />
      <input type="text" placeholder="Range" value={range} onChange={(e) => setRange(e.target.value)} className="form-control my-2" />
      <input type="text" placeholder="Max Speed" value={maxSpeed} onChange={(e) => setMaxSpeed(e.target.value)} className="form-control my-2" />
      <input type="text" placeholder="Sensor Type" value={sensorType} onChange={(e) => setSensorType(e.target.value)} className="form-control my-2" />
      <input type="date" placeholder="Release Date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} className="form-control my-2" />
      <input type="text" placeholder="Supplier" value={supplier} onChange={(e) => setSupplier(e.target.value)} className="form-control my-2" />
      <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="form-control my-2" />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control my-2" />
      <input type="number" placeholder="Ratings" value={ratings} onChange={(e) => setRatings(e.target.value)} className="form-control my-2" />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control my-2" />
      <input type="text" placeholder="Accessories Included (comma separated)" value={accessoriesIncluded} onChange={(e) => setAccessoriesIncluded(e.target.value)} className="form-control my-2" />
      <input type="text" placeholder="Compatibility" value={compatibility} onChange={(e) => setCompatibility(e.target.value)} className="form-control my-2" />
      <input type="text" placeholder="Type (JSON format)" value={type} onChange={(e) => setType(e.target.value)} className="form-control my-2" />
      <input type="file" multiple onChange={handleFileChange} className="form-control my-2" />
      <button onClick={handleCreate} className="btn btn-primary">Add UAV</button>
    </div>
  );
};

export default Create;
