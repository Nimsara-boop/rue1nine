"use client";
import { assets } from "../assets/assets";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function RuesWorld() {
  const navigate = useNavigate();
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const reveal: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1], // cubic-bezier luxury ease
    },
  },
};
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-screen w-full flex items-center justify-center">

        {/* IMAGE */}
        <img
          src={assets.hd1} 
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />

        {/* DARK GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80" />

        {/* GRAIN */}
        <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: `url(${assets.grain})`, backgroundRepeat: "repeat", backgroundSize: "300px" }} />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={reveal}
          className="relative text-center px-6"
        >
          <h1 className="uppercase font-extrabold tracking-widest pt-20 text-[12vw] leading-none">
            RUE’S WORLD
          </h1>

          <p className="mt-6 text-lg md:text-xl tracking-wide">
            PREMIUM IS A MINDSET. <br /> NOT A PRICE TAG.
          </p>

          <button className="mt-8 border border-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-500" onClick={() => {navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" });}}>
            Enter The Movement →
          </button>
        </motion.div>
      </section>

      {/* ================= STATEMENT ================= */}
      <section className="bg-black py-32 px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold uppercase leading-tight">
            WE DON’T FOLLOW TRENDS. <br />
            WE PRINT THEM.
          </h2>

          <p className="mt-10 max-w-2xl mx-auto text-lg text-gray-300">
            RUE1NINE was built to disrupt overpriced fashion.
            High graphics. Heavy energy. Personal pieces.
            Premium feel. Accessible always.
          </p>
        </motion.div>
      </section>

      {/* ================= SPLIT MANIFESTO ================= */}
      <section className="bg-[#F5F5F5] text-black py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <motion.img
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            src={assets.coolt_head}
            className="w-full h-[600px] object-cover"
            alt=""
          />

          {/* TEXT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={reveal}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-extrabold uppercase">
              THIS IS RUE’S WORLD.
            </h2>

            <p className="mt-8 text-lg leading-relaxed">
              A space where graphic energy meets everyday accessibility.
              Where personalization isn’t luxury — it’s standard.
              Where street culture meets premium execution.
            </p>

            <button className="mt-8 border-b-2 border-black uppercase tracking-widest text-sm hover:tracking-wider transition-all"
            onClick={() => {navigate("/PrestigeLine"); window.scrollTo({ top: 0, behavior: "smooth" });}}>
              CREATE YOURS →
            </button>
          </motion.div>
        </div>
      </section>

      {/* ================= HIGH GRAPHIC ================= */}
      <section className="relative bg-[#F5F5F5] text-black py-40 overflow-hidden">

        {/* MASSIVE BACKGROUND TEXT */}
        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-10 pointer-events-none" >
          <h1 className="text-[15vw] font-black uppercase leading-none">
            HIGH.
          </h1>
          <h1 className="text-[15vw] font-black uppercase leading-none">
            GRAPHIC.
          </h1>
          <h1 className="text-[15vw] font-black uppercase leading-none">
            ENERGY.
          </h1>
        </div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center px-6"
          initial="hidden"
          whileInView="visible"
          variants={reveal}
          viewport={{ once: true }}
        >
          <p className="text-2xl md:text-3xl font-semibold">
            We don’t believe premium should cost premium.
            We engineer graphics loud enough to speak without you saying a word.
          </p>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          src={assets.rw2} /* INSERT WIDE IMAGE */
          className="mt-20 w-full h-[600px] object-cover"
          alt=""
        />
      </section>

      {/* ================= PERSONALIZATION PARALLAX ================= */}
      <section
        ref={parallaxRef}
        className="relative h-[90vh] flex items-center justify-center overflow-hidden"
      >
        <motion.img
          style={{ y: yParallax }}
          src={assets.turtlehead}/* INSERT CLOSE-UP */
          className="absolute inset-0 w-full h-[120%] object-cover"
          alt=""
        />

        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          className="relative text-center"
          initial="hidden"
          whileInView="visible"
          variants={reveal}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-8xl font-extrabold uppercase">
            MADE TO BE YOURS.
          </h2>

          <p className="mt-6 text-lg tracking-wide">
            Add your story. Add your name. Add your code.
          </p>


        </motion.div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="bg-black py-32 px-6 text-center">
        {[
          "01. AFFORDABLE",
          "02. HIGH GRAPHIC",
          "03. PERSONAL",
          "04. UNAPOLOGETIC",
        ].map((item, i) => (
          <h2
            key={i}
            className="text-5xl md:text-7xl font-black uppercase my-10 text-transparent stroke-text hover:text-white transition-all duration-500 cursor-pointer"
          >
            {item}
          </h2>
        ))}
      </section>

      {/* ================= MARQUEE ================= */}
      <section className="bg-white text-black py-8 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee text-4xl font-black uppercase tracking-widest">
          RUE1NINE RUE1NINE RUE1NINE RUE1NINE RUE1NINE RUE1NINE
        </div>
      </section>

      {/* ================= FINAL ================= */}
      <section className="bg-white text-black py-40 text-center px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={reveal}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-8xl font-extrabold uppercase leading-tight">
            PREMIUM. <br /> WITHOUT PERMISSION.
          </h2>

          <p className="mt-8 text-lg uppercase tracking-wide">
            WELCOME TO RUE’S WORLD.
          </p>

          <button className="mt-10 bg-black text-white px-12 py-4 uppercase tracking-widest hover:bg-red-600 transition-all duration-500"
          onClick={() => {navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" });}}>
            SHOP RUE1NINE →
          </button>
        </motion.div>
      </section>
    </main>
  );
}