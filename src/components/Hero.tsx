import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="relative overflow-hidden text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Tech <span className="text-accent">Conference</span> 2025
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Inspiring talks, hands-on workshops, and world-class networking
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <Link to="/register" className="bg-accent px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
          Register Now 
        <ArrowRight />
      </Link>
      </motion.div>
    </div>
  );
}

export default Hero;
