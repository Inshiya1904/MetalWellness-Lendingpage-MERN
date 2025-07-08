import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animationVariants";
import API from "../services/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  e.preventDefault();
  try {
    const res = await API.post('/enquiry/create', formData);
    toast.success("Message sent successfully!");
    setShowMessage(true);
  } catch (error) {
    console.error("🔥 Error submitting enquiry:", error);
    toast.error("Failed to send message");
  }
  };

  const handleClose = () => {
    setShowMessage(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      country: "",
      message: "",
    });
  };
  return (
    <section
      id="contact"
      className="bg-heroBg flex items-center justify-center py-20 px-8"
    >
      <div className="container mx-auto">
        <div className="md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8">
          {/* left side */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold font-secondary mb-4 text-white">
              Make an appointment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
              <div className="flex items-start gap-4">
                <div className="p-3 flex items-center justify-center rounded-full bg-[#ffffff1a]">
                  <FaUserAlt className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">24 Hours Services</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 flex items-center justify-center rounded-full bg-[#ffffff1a]">
                  <FaEnvelope className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Expert Theropist</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 flex items-center justify-center rounded-full bg-[#ffffff1a]">
                  <FaPhoneAlt className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">High Quality Care</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 flex items-center justify-center rounded-full bg-[#ffffff1a]">
                  <FaGlobe className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Trusted Clinic</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* right side */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="space-y-8 p-8 bg-white shadow-xl rounded-md"
          >
            <h3 className="text-2xl font-bold mb-4">Book Appointement</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="flex flex-col lg:flex-row  gap-4">
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  name="name"
                  value={formData.name}
                  type="text"
                  placeholder="Name"
                  className="w-full p-4 -rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                  required
                />
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                  className="w-full p-4 -rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                  required
                />
              </div>

              <div className="flex flex-col lg:flex-row  gap-4">
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                 
                  type="text"
                  maxLength="10"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  value={formData.phone}
                  name="phone"
                  placeholder="Contact Number"
                  className="w-full p-4 -rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                  required
                />
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                  value={formData.country}
                  name="country"
                  type="text"
                  placeholder="Country"
                  className="w-full p-4 -rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                  required
                />
              </div>
              <textarea
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                value={formData.message}
                name="message"
                rows="5"
                className="w-full p-4 -rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                placeholder="Message"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full p-3 bg-primary text-white rounded-md hover:bg-primary/90"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {showMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
          <div className="bg-white p-8 rounded-md shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p>Thank you, {formData.name} for submitting you query</p>
            <button
              onClick={handleClose}
              className="mt-4  py-2 px-4 bg-primary text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
