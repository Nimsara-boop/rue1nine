import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { assets } from "../assets/assets";

const images = [
  assets.hd1,
  assets.hd2,
  assets.hd3,
  assets.hd4,
];

export default function Carousel() {
  const x = useMotionValue(0);
  const originalRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (originalRef.current) {
      setWidth(originalRef.current.offsetWidth);
    }
  }, []);

  useAnimationFrame((_, delta) => {
    if (!width) return;

    const moveBy = (delta / 1000) * 100; // speed control
    let current = x.get() - moveBy;

    if (current <= -width) {
      current = 0;
    }

    x.set(current);
  });

  return (
    <div className="w-full overflow-hidden pb-12">
      <motion.div
        style={{ x }}
        className="flex"
      >
        {/* ORIGINAL */}
        <div ref={originalRef} className="flex gap-16 px-16">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              className="w-[500px] h-[300px] object-cover rounded-2xl shadow-lg flex-shrink-0"
              alt=""
            />
          ))}
        </div>

        {/* DUPLICATE */}
        <div className="flex gap-16">
          {images.map((src, index) => (
            <img
              key={`dup-${index}`}
              src={src}
              className="w-[500px] h-[300px] object-cover rounded-2xl shadow-lg flex-shrink-0"
              alt=""
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

{/*import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { assets } from "../assets/assets";

const images = [
  assets.hd1,
  assets.hd2,
  assets.hd3,
  assets.hd4,
];

export default function Carousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const originalRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (originalRef.current) {
      setWidth(originalRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden pb-12">
      <motion.div
        ref={trackRef}
        className="flex will-change-transform"
        animate={{ x: -width }}
        transition={{
          ease: "linear",
          duration: 12,
          repeat: Infinity,
        }}
      >
        
        <div ref={originalRef} className="flex gap-16">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              className="w-[500px] h-[300px] object-cover rounded-2xl shadow-lg flex-shrink-0"
              alt=""
            />
          ))}
        </div>

        
        <div className="flex gap-16">
          {images.map((src, index) => (
            <img
              key={`dup-${index}`}
              src={src}
              className="w-[500px] h-[300px] object-cover rounded-2xl shadow-lg flex-shrink-0"
              alt=""
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

{/*import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { assets } from "../assets/assets";

const images = [
  assets.hd1,
  assets.hd2,
  assets.hd3,
  assets.hd4,
];

export default function Carousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth((16*4)+(containerRef.current.scrollWidth / 2));
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden pb-12">
      <motion.div
        ref={containerRef}
        className="flex gap-16 will-change-transform"
        animate={{ x: -width }}
        transition={{
          ease: "linear",
          duration: 10,
          repeat: Infinity,
        }}
      >
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            className="w-[500px] h-[300px] object-cover rounded-2xl shadow-lg flex-shrink-0"
            alt=""
          />
        ))}
      </motion.div>
    </div>
  );
}


{/*import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const images = [
  assets.hd1,
  assets.hd2,
  assets.hd3,
  assets.hd4,
];

export default function Carousel() {
  return (
    <div className="relative w-full overflow-hidden pb-12">
      <motion.div
        className="flex gap-16 will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 5 ,
          repeat: Infinity,
        }}
      > */}
        {/* Original set */}
       {/*} {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className="w-1/2 h-full object-cover rounded-2xl shadow-lg"
            alt=""
          />
        ))}

        {/* Duplicate set for seamless loop */}
     {/*}   {images.map((src, index) => (
          <img
            key={`duplicate-${index}`}
            src={src}
            className="w-1/2  h-full object-cover rounded-2xl shadow-lg"
            alt=""
          />
        ))}
      </motion.div>
    </div>
  );
}*/}