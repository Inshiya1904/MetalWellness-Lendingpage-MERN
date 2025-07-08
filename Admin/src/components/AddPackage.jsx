import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AddPackage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState([""]);
  const navigate = useNavigate();

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...features];
    newFeatures[index] = value;
    setFeatures(newFeatures);
  };

  const addFeatureField = () => {
    setFeatures([...features, ""]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/pricing/create", {
        name,
        price,
        description,
        features,
      });
      navigate("/admin/pricing");
      toast.success("Package added successfully!");
      // Clear form
      setName("");
      setPrice("");
      setDescription("");
      setFeatures([""]);
    } catch (error) {
      console.error(
        "Error adding package: ",
        error.response?.data || error.message
      );
      toast.error("Failed to add package.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 shadow-lg rounded bg-white">
      <h2 className="text-2xl font-bold mb-4">Add New Package</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Package Name"
          className="w-full border p-2 rounded"
          required
        />
        <input
          value={price}
          required
          type="text"
          pattern="[0-9]*"
          inputMode="numeric"
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price (e.g. $99)"
          className="w-full border p-2 rounded"
         
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full border p-2 rounded"
          required
        />
        <div>
          <label className="block font-semibold mb-1">Features</label>
          {features.map((f, index) => (
            <input
              key={index}
              type="text"
              value={f}
              onChange={(e) => handleFeatureChange(index, e.target.value)}
              placeholder={`Feature ${index + 1}`}
              className="w-full border p-2 rounded mb-2"
            />
          ))}
          <button
            type="button"
            onClick={addFeatureField}
            className="text-blue-500 underline"
          >
            + Add Another Feature
          </button>
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded"
          >
            Add Package
          </button>
          <Link to={"/admin/pricing"}>
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded"
            >
              Back
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddPackage;
