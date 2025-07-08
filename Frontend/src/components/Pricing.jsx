import { h3, li } from "framer-motion/client";
import React, { useEffect, useState } from "react";
import { fadeIn } from "../utils/animationVariants";
import { motion } from "framer-motion";
import API from "../services/api";
// const packages = [
//   {
//     name: "Bronze Package",
//     price: "$99",
//     description:
//       "Ideal for individuals or small businesses looking to get started with mental wellness.",
//     features: [
//       "Access to basic wellness resources",
//       "Weekly mental wellness tips",
//       "Community support group access",
//     ],
//   },
//   {
//     name: "Silver Package",
//     price: "$199",
//     description:
//       "A great choice for growing businesses with additional features and support for mental wellness.",
//     features: [
//       "All Bronze Package features",
//       "Monthly guided meditation sessions",
//       "Personalized wellness plan",
//       "Access to expert webinars",
//     ],
//   },
//   {
//     name: "Golden Package",
//     price: "$299",
//     description:
//       "Perfect for larger businesses needing advanced mental wellness features and premium support.",
//     features: [
//       "All Silver Package features",
//       "Weekly one-on-one coaching sessions",
//       "Advanced mental wellness tracking tools",
//       "24/7 access to mental wellness experts",
//     ],
//   },
// ];
const Pricing = () => {
  const [packages, setPackages] = useState([]);

  const fetchPackages = async () => {
    try {
      const res = await API.get("/pricing/public");
      console.log(res)
      setPackages(res.data);
      console.log(res.data)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);


  const handleScrollToContact = () => {
    const targetElement = document.getElementById("contact");
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="pricing" className="bg-[#f7f8fc] pt-32">
      <div className="container mx-auto px-8">
        {/* Title */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold font-secondary mb-3">
            Perfect for Small & Large Brands
          </h2>
          <p className="text-lg mb-12 md:w-2/3 mx-auto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            perspiciatis esse tempore. Quos quia quaerat nulla, id inventore
            esse possimus atque aperiam architecto porro iure omnis dolores sed
            ut magni!
          </p>
        </motion.div>
        {/* packages */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" flex flex-col md:w-5/6 mx-auto md:flex-row gap-8 pb-12"
        >
          {packages.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 flex-1 shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-4">{item.name}</h3>
                <hr className="w-24 border border-primary" />
                <p className="text-3xl font-bold mb-4">
                  ${item.price} <span className="text-lg font-normal">/mo</span>
                </p>
                <p className="text-lg mb-4">{item.description}</p>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  {item.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button
                  onClick={handleScrollToContact}
                  className="bg-primary text-white px-4 py-2 rounded"
                >
                  Get Started
                </button>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
