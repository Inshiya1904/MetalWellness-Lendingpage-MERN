import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animationVariants";

const WorkingStep = () => {
  return (
    <section className="relative bg-working-Img bg-cover py-4 bg-center">
      <div className="absolute inset-0 bg-heroBg bg-opacity-80"></div>
      <div className="relative container mx-auto px-4 py-20">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-white text-center mb-20"
        >
          <h2 className="text-4xl font-bold font-secondary mb-4">
            How It Works
          </h2>
          <p className="text-lg lg:w-1/2 w-full mx-auto">
            Taking care of your mental wellness has never been easier. Just
            follow these simple steps to begin your journey toward a healthier,
            happier mind.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col lg:w-4/5 mx-auto md:flex-row gap-8"
        >
          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center">
              1
            </div>
            <h3 className="text-lg font-medium  mt-8">Fill Out a Quick Form</h3>
            <p className="my-2">
              Share a few details about yourself and what you're seeking support
              for. This helps us understand your needs better.
            </p>
          </div>

          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center">
              2
            </div>
            <h3 className="text-lg font-medium mt-8">
              Get Matched with a Therapist
            </h3>
            <p className="my-2">
              Based on your needs, we’ll connect you with a qualified mental
              wellness expert who’s the right fit for you.
            </p>
          </div>

          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center">
              3
            </div>
            <h3 className="text-lg font-medium mt-8">
              Start Your First Session
            </h3>
            <p className="my-2">
              Begin your journey with a 1-on-1 counseling session — online or in
              person — and take your first step toward healing and growth.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkingStep;
