import priceModel from "../Models/pricingModel.js";


export const addPricingPackage = async(req,res) => {
     try {
    const { name, price, description, features } = req.body;
    console.log("BODY:", req.body);
    const newPackage = new priceModel({ name, price, description, features });
    await newPackage.save();
    res.json({ message: "Package added", newPackage });
  } catch (err) {
    res.status(400).json({ error: "Invalid data" });
  }
}

export const getPricingPackage = async (req,res) => {
      try {
    const packages = await priceModel.find();
    res.json(packages);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
}

export const getSinglePricingPackage = async (req,res) => {
      try {
        const {id} = req.params
    const packageData = await priceModel.findById(id);
    if (!packageData) {
      return res.status(404).json({ error: 'Package not found' });
    }
    res.json(packageData);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
}


export const editPricingPackage = async (req,res) => {
    try {
    const { name, price, description, features } = req.body;
    const newPackage = new priceModel({ name, price, description, features });
    await newPackage.save();
    res.json({ message: "Package added", newPackage });
  } catch (err) {
    res.status(400).json({ error: "Invalid data" });
  }
}


export const deletePricingPackage = async (req,res) => {
     try {
    const { id } = req.params;
    const deleted = await priceModel.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "Package not found" });
    res.json({ message: "Package deleted" });
  } catch (err) {
    res.status(400).json({ error: "Delete failed" });
  }
}