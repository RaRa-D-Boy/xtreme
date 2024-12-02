"use client";
import React from "react";
import { GridOverlay } from "../components/grid-overlay/gridOverlay";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const MotionPage = () => {
  const video = "/vidNew1.mp4";
  const gridLines1 = [
    { x1: "0%", y1: "0", x2: "0%", y2: "100%" },
    { x1: "10%", y1: "0", x2: "10%", y2: "100%" },
  ];
  return (
    <motion.section className="relative isolate overflow-hidden h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <GridOverlay lines={gridLines1} opacity={15} color="stroke-white/50" />
      <div className="relative z-20 ml-[10%] flex flex-col h-full justify-end">
        <div className="flex flex-col  mb-12">
          <motion.div
            className="text-[12px] uppercase font-thin my-5 leading-6 border-t pt-3 border-gray-200/50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-white px-8">X[SWAG]</span>
          </motion.div>

          {/* <div className="text-4xl md:text-[76px] font-normal px-8">Burmese Python</div> */}
          <motion.div
            className="text-4xl md:text-[76px] font-normal px-8 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Discover the Elegance
          </motion.div>
          <motion.div
            className="font-thin max-w-screen-md px-8 text-sm md:text-base py-6 pr-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Discover the latest trends in fashion with our exquisite xtrim
            collection, where sophistication meets sustainability. Each piece is
            designed to elevate your style, ensuring you stand out from the
            crowd. Explore our curated selection that embodies elegance and
            modernity.
            {/* Updated text */}
          </motion.div>
          <motion.div
            className="flex gap-4 items-center px-8"
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
        </div>
      </div>
    </motion.section>
  );
};

export default MotionPage;
