import React from "react";
import { motion } from "framer-motion";

const containerStyle = {
  position: "relative",
  width: "1.5rem",
  height: "1.5rem",
};

const circleStile = {
  display: "block",
  width: "2rem",
  height: "2rem",
  border: "0.5rem solid #64fff74b",
  borderTop: "0.5rem solid #64FFF7",
  borderRadius: "50%",
  position: "absolute",
  boxSizing: "border-box",
  top: 0,
  left: 0,
};

const spinTransition = {
  loop: Infinity,
  duration: 1,
  ease: "linear",
};

const LoadingSpinner = () => {
  return (
    <div style={containerStyle}>
      <motion.div
        animate={{
          rotate: 360,
        }}
        style={circleStile}
        transition={spinTransition}
      />
    </div>
  );
};

export default LoadingSpinner;
