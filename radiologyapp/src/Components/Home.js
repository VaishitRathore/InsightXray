import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../home.css";

export default function Home() {
  const navigate = useNavigate();

  const handleAnalyzeClick = () => {
    navigate("/upload-image"); // Redirect to the upload page
  };

  return (
    <div className="home-container">
      {/* Animated Title */}
      <motion.h1
        className="home-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Chest X-ray Analysis
      </motion.h1>

      {/* Description */}
      <motion.p
        className="home-description"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Welcome to our Chest X-Ray Analysis platform, an advanced solution
        leveraging the power of Machine Learning to assist in the early
        detection of various chest-related conditions. Our platform is designed
        to support healthcare professionals by providing quick, reliable, and
        highly accurate insights into chest X-ray images. Our system’s
        intelligent algorithms are trained on extensive datasets, ensuring it
        meets high standards of diagnostic accuracy while continually adapting
        to new data, thus improving its precision over time.
      </motion.p>

      {/* Analyze Button */}
      <motion.button
        className="analyze-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleAnalyzeClick} // Navigate to upload page on click
      >
        Get Started
      </motion.button>
    </div>
  );
}
