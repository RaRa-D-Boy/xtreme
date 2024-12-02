"use client";
import React from "react";
import { GridOverlay } from "../components/grid-overlay/gridOverlay";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
const ContextPage = () => {
 
  const gridLines1 = [
    { x1: "0%", y1: "0", x2: "0%", y2: "100%" },
    { x1: "10%", y1: "0", x2: "10%", y2: "100%" },
  ];

  const gridLines2 = [
    { x1: "0%", y1: "0", x2: "0%", y2: "100%" },
    { x1: "50%", y1: "0", x2: "50%", y2: "100%" },
  ];

  const grids = [
    {
      tag: "X[SWAG]",
      title: "Unleash Your Style",
      description:
        "Step into the spotlight with our X[SWAG] collection, where bold meets beautiful. Each piece is designed to make a statement, combining edgy designs with high-quality materials. Whether you're hitting the streets or making an entrance, X[SWAG] is your go-to for standout fashion.",
    },
    {
      tag: "X[SWAG]",
      title: "Burmese Python",
      description:
        "Our regenerative snakeskin collection was designed with the planet in mind—from heel to toe, sole to laces. Now featuring our best selling silhouettes, we’ve expanded our Burmese Python collection to include two new styles: Monza and Rail.",
    },
  ];
  return (
    <section className="relative isolate overflow-hidden h-screen bg-white py-8">
      <GridOverlay lines={gridLines2} opacity={15} color="stroke-black/15" />
      <motion.div className="  grid grid-cols-1 md:grid-cols-2 ">
        {grids.map((items, key) => (
          <div className="w-full h-[500px] md:h-full " key={key}>
            <div className="w-full">
              <div
                className={`${
                  key === 0
                    ? " ml-[12%] absolute bottom-50 left-0 px-6 w-full md:w-[80%] text-black"
                    : "absolute bottom-0 left-0 pl-20 md:pl-0 lg:px-10 text-black md:ml-[50%] "
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {items.tag}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="w-full md:w-[50%] text-4xl md:text-6xl font-normal"
                >
                  {items.title}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className={`${
                    key === 0
                      ? " text-sm font-thin my-5 leading-6 px-0 md:w-[40%]"
                      : "text-sm font-thin my-5 leading-6 w-full"
                  }`}
                >
                  {items.description}
                </motion.div>
                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}>
                  <button className="text-sm  font-thin my-5 leading-6 group">
                    <div className="flex items-center">
                      <div className="blinking-element mr-2 w-1 h-1 rounded-full group-hover:w-0 group-hover:bg-transparent transition-all group-hover:h-0 bg-black"></div>
                      Show Now
                      <span className="hidden group-hover:translate-x-2 transition-all group-hover:inline">
                        {" "}
                        <MdOutlineArrowOutward className="text-sm font-bold" />
                      </span>
                    </div>
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <GridOverlay lines={gridLines1} opacity={15} color="stroke-black/15" />
    </section>
  );
};

export default ContextPage;
