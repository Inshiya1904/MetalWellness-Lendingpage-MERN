import enquiryModel from "../Models/enquiryModel.js";

export const createEnquiry = async (req, res) => {
  try {
    const newEnquiry = new enquiryModel(req.body);
    await newEnquiry.save();
    res.json({ message: "Enquiry submitted", enquiry: newEnquiry });
  } catch (err) {
    res.status(400).json({ error: "Invalid data", details: err.message });
  }
};

export const getAllEnquiries = async (req, res) => {
  try {
    const enquiries = await enquiryModel.find().sort({ createdAt: -1 });
    res.json(enquiries);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
