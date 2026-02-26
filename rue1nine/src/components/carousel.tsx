import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
];

export default function Carousel() {
  return (
    <div className="relative w-full overflow-hidden py-12">
      <motion.div
        className="flex gap-16 will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 25,
          repeat: Infinity,
        }}
      >
        {/* Original set */}
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className="w-64 h-40 object-cover rounded-2xl shadow-lg"
            alt=""
          />
        ))}

        {/* Duplicate set for seamless loop */}
        {images.map((src, index) => (
          <img
            key={`duplicate-${index}`}
            src={src}
            className="w-64 h-40 object-cover rounded-2xl shadow-lg"
            alt=""
          />
        ))}
      </motion.div>
    </div>
  );
}