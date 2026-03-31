import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import heroBg1 from "@/assets/hero-bg-1.jpg";
import heroBg2 from "@/assets/hero-bg-3.jpg";
import heroBg3 from "@/assets/hero-bg-2.jpg";

const backgrounds = [heroBg1, heroBg2, heroBg3];

export default function FixedBackground() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <AnimatePresence mode="sync">
        <motion.img
          key={currentBg}
          src={backgrounds[currentBg]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-[#003366]/70" />
    </div>
  );
}
