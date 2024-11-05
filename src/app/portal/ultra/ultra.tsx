"use client";
import React from "react";
import { GridOverlay } from "../components/grid-overlay/gridOverlay";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
const UltraPage = () => {
  const image = "/imgNew19.jpg";
  const gridLines1 = [
    { x1: "0%", y1: "0", x2: "0%", y2: "100%" },
    { x1: "10%", y1: "0", x2: "10%", y2: "100%" },
  ];
  return (
    <section
      className="relative isolate overflow-hidden h-screen"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        backgroundRepeat: "no-repeat",
      }}
    >
      <GridOverlay lines={gridLines1} opacity={15} color="stroke-white/50" />
      <motion.div className="relative z-20 px-[10%] flex flex-col h-full justify-end md:justify-center">
        <div className="flex flex-col pl-5 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-[12px] uppercase font-thin my-5 leading-6 "
          >
            capsule 2
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-[76px] font-normal "
          >
            Burmese Python
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="font-thin max-w-screen-md py-4"
          >
            Our regenerative snakeskin collection was designed with the planet
            in mind—from heel to toe, sole to laces. Now featuring our best
            selling silhouettes, we’ve expanded our Burmese Python collection to
            include two new styles: Monza and Rail.{" "}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="flex gap-4 items-center "
          >
            <button className="text-sm  font-thin my-5 leading-6 group">
              <div className="flex items-center">
                <div className="blinking-element mr-2 w-1 h-1 rounded-full group-hover:w-0 group-hover:bg-transparent transition-all group-hover:h-0 bg-white"></div>
                Show Now
                <span className="hidden group-hover:translate-x-2 transition-all group-hover:inline">
                  {" "}
                  <MdOutlineArrowOutward className="text-sm font-bold" />
                </span>
              </div>
            </button>
            <button className="text-sm  font-thin my-5 leading-6 group">
              <div className="flex items-center">
                <div className="blinking-element mr-2 w-1 h-1 rounded-full group-hover:w-0 group-hover:bg-transparent transition-all group-hover:h-0 bg-white"></div>
                Learn More
                <span className="hidden group-hover:translate-x-2 transition-all group-hover:inline">
                  {" "}
                  <MdOutlineArrowOutward className="text-sm font-bold" />
                </span>
              </div>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default UltraPage;
