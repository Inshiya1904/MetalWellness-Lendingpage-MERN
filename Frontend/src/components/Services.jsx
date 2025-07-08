import React, { useState } from "react";
import couple from "../assets/service1.webp";
import parenting from "../assets/service2.webp";
import stuck from "../assets/service3.webp";
import confidence from "../assets/service4.webp";
import { button, li } from "framer-motion/client";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animationVariants";
import { AnimatePresence } from "framer-motion";

const tabs = [
  {
    title: "Couple Counseling",
    content: {
      heading: "Couple Counseling",
      text: "Explore ways to reconnect and strengthen your relationship with meaningful conversations and conflict resolution techniques.",
      benefits: [
        "Understanding Relationship Dynamics",
        "Effective Communication Techniques",
        "Conflict Resolution Strategies",
      ],
      image: couple,
    },
  },
  {
    title: "Parenting Skills",
    content: {
      heading: "Parenting Skills",
      text: "Empower your parenting journey with techniques to foster healthy relationships and effective communication with your children.",
      benefits: [
        "Positive Discipline",
        "Building Trust",
        "Effective Communication",
      ],
      image: parenting,
    },
  },
  {
    title: "Feeling Stuck",
    content: {
      heading: "Feeling Stuck",
      text: "Feeling lost or overwhelmed? We'll help you break through mental blocks and move forward with clarity.",
      benefits: ["Mental Clarity", "Goal Setting", "Emotional Support"],
      image: stuck,
    },
  },
  {
    title: "Self-Confidence",
    content: {
      heading: "Self-Confidence",
      text: "Build unshakable confidence and a strong sense of self through guided support and empowering exercises.",
      benefits: ["Improve Self-Image", "Overcome Fear", "Build Inner Strength"],
      image: confidence,
    },
  },
];
const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="bg-[#f7f8fc]">
      <div className="pt-20 px-4 container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center space-y-5"
        >
          <h2 className="text-4xl font-bold font-secondary text-heroBg">
            What Can We Do Together
          </h2>
          <p className="md:w-2/3 mx-auto">
            At Mindleap, we believe that mental wellness is a journey — and
            you're not alone. Whether you're looking to strengthen
            relationships, improve communication, or build emotional resilience,
            we’re here to guide and support you every step of the way.
          </p>
        </motion.div>

        {/* service category */}
        <div className=" md:w-4/5 mx-auto">
          {/* Tab Buttons */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-wrap justify-between items-center mt-10 gap-4 md:gap-8"
          >
            {tabs.map((tab, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-5 py-2 rounded border ${
                    activeTab === index
                      ? "bg-primary text-white"
                      : "bg-white text-gray-800 hover:bg-green-100"
                  }`}
                >
                  {tab.title}
                </button>
              );
            })}
          </motion.div>
          {/* Active Tab Content */}
          <div className="flex flex-col-reverse lg:flex-row justify-between py-5 gap-6 items-stretch">
            {/* Text Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="bg-white  w-full lg:w-1/2 rounded-xl p-6 md:p-10 shadow flex flex-col justify-between"
            >
              <div className="space-y-5">
                <h1 className="text-primary text-2xl md:text-3xl font-semibold">
                  {tabs[activeTab].content.heading}
                </h1>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  {tabs[activeTab].content.text}
                </p>
                <h2 className="text-xl md:text-2xl font-semibold">Benefits</h2>
                <ul className="list-disc pl-5 space-y-3 text-gray-700 text-sm md:text-base">
                  {tabs[activeTab].content.benefits.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="w-full lg:w-1/2 rounded-xl overflow-hidden"
            >
              <img
                src={tabs[activeTab].content.image}
                alt={tabs[activeTab].content.heading}
                className="w-full h-full max-h-[600px] object-cover rounded-xl"
              />
            </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
