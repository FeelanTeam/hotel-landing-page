import { motion } from "framer-motion";
import React from "react";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
};

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="lg-px-36 md:px-36 sm:px-8"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PageWrapper;
