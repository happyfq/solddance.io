'use client';
import React from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      exit={{ opacity: 0 }}
    >
      <Navbar />
      <div className="flex flex-col gap-4 p-4">{children}</div>
      <Footer />
    </motion.div>
  );
};

export default Layout;
