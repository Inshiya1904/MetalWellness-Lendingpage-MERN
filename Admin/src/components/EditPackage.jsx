import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";
import toast from 'react-hot-toast';

const EditPackage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pkg, setPkg] = useState(null);
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const res = await API.get(`/pricing/admin/${id}`);
        console.log(res)
        setPkg(res.data);
        console.log(res.data)
        setFeatures(res.data.features || []);
        console.log(res.data.features )
      } catch (err) {
        console.error("Error fetching package:", err.response?.data || err.message);
        toast.error("Failed to fetch package data.");
      }
    };
    fetchPackage();
  }, [id]);

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...features];
    newFeatures[index] = value;
    setFeatures(newFeatures);
  };

  const addFeatureField = () => setFeatures([...features, ""]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/pricing/update/${id}`, {
        ...pkg,
        features: features.filter(f => f.trim() !== "")
      });
      toast.success("Package updated!");
      navigate("/admin/pricing");
    } catch (err) {
      console.error("Error updating package:", err.response?.data || err.message);
      toast.error("Failed to update package.");
    }
  };

  if (!pkg) return <div>Loading...</div>;

  return (
    <div className="max-w-md mx-auto mt-8 p-4 shadow rounded bg-white">
      <h2 className="text-2xl font-bold mb-4">Edit Package</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={pkg.name}
          onChange={e => setPkg({ ...pkg, name: e.target.value })}
          placeholder="Package Name"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          pattern="[0-9]*"
          inputMode="numeric"
          value={pkg.price}
          onChange={e => setPkg({ ...pkg, price: Number(e.target.value) })}
          placeholder="Price"
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          value={pkg.description}
          onChange={e => setPkg({ ...pkg, description: e.target.value })}
          placeholder="Description"
          className="w-full border p-2 rounded"
          required
        />
        <div>
          <label className="block font-semibold mb-1">Features</label>
          {features.map((f, idx) => (
            <input
              key={idx}
              value={f}
              onChange={e => handleFeatureChange(idx, e.target.value)}
              placeholder={`Feature ${idx + 1}`}
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
        <div className="flex items-center justify-between">
             <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Update Package
        </button>
        <button
          type="submit"
          onClick={()=> navigate("/admin/pricing")}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Back
        </button>
        </div>
       
      </form>
    </div>
  );
};

export default EditPackage;
