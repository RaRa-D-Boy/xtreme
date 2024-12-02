"use client";
import React from "react";
import { GridOverlay } from "../components/grid-overlay/gridOverlay";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const HomePage = () => {
  const image = "/imgNew.jpg";
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
        backgroundPosition: "left",
        width: "100%",
        height: "100vh",
        backgroundRepeat: "no-repeat",
      }}
    >
      <GridOverlay lines={gridLines1} opacity={15} color="stroke-white/50" />
      <motion.div className="relative z-20 ml-[10%] flex flex-col h-full justify-end bg-gradient-to-tl from-orange-300/75 via-blue-200/15 to-transaparent">
        <motion.div className="flex flex-col pl-5 mb-12">
          <motion.div
            className="text-[12px] uppercase font-thin my-5 leading-6 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            X[SWAG]
          </motion.div>
          <motion.div
            className="text-4xl md:text-[76px] font-normal "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Xtrim
          </motion.div>
          <motion.div
            className="font-thin max-w-screen-md text-sm md:text-base py-4 pr-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Our curated collection celebrates the intersection of art and
            fashion, showcasing models in dynamic poses that embody the spirit
            of creativity. Each piece is designed to inspire self-expression,
            allowing wearers to make a bold statement. From striking silhouettes
            to vibrant colors, our collection invites you to explore the art of
            style and embrace your individuality.{" "}
          </motion.div>
          <motion.div
            className="flex gap-4 items-center "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomePage;
