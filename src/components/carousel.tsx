import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";

const images = [assets.hd3, assets.hd4];
const loopCount = 1000;

export default function Carousel() {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [loopWidth, setLoopWidth] = useState(0);

  useEffect(() => {
    if (trackRef.current) {
      setLoopWidth(trackRef.current.scrollWidth / loopCount);
    }
  }, []);

  useAnimationFrame((_, delta) => {
    if (!loopWidth) return;

    const moveBy = (delta / 1000) * 100;
    let current = x.get() - moveBy;

    if (current <= -loopWidth) {
      current += loopWidth;
    }

    x.set(current);
  });

  const loopedImages = Array.from(
    { length: images.length * loopCount },
    (_, index) => images[index % images.length]
  );

  return (
    <div className="w-full overflow-hidden pb-8 md:pb-12">
      <motion.div style={{ x }} className="flex will-change-transform">
        <div ref={trackRef} className="flex gap-4 px-4 md:gap-16 md:px-16">
          {loopedImages.map((src, index) => (
            <img
              key={`${src}-${index}`}
              src={src}
              className="h-[42vw] w-[72vw] shrink-0 rounded-2xl object-cover shadow-lg sm:h-[34vw] sm:w-[60vw] md:h-75 md:w-125"
              alt=""
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}