"use client"
import React from "react";
import { GridOverlay } from "../components/grid-overlay/gridOverlay";
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";
import { motion } from "framer-motion";
const CollectionPage = () => {

  const gridLines1 = [
    { x1: "0%", y1: "0", x2: "0%", y2: "100%" },
    { x1: "10%", y1: "0", x2: "10%", y2: "100%" },
  ];

  const grids = [
    {
      image: "/imgNew3.jpg",
      tag: "capsule 2",
      title: "Burmese Python",
      description:
        "Our regenerative snakeskin collection was designed with the planet in mind—from heel to toe, sole to laces. Now featuring our best selling silhouettes, we’ve expanded our Burmese Python collection to include two new styles: Monza and Rail.",
    },
    {
      image: "/imgNew5.png",
      tag: "capsule 2",
      title: "Burmese Python",
      description:
        "Our regenerative snakeskin collection was designed with the planet in mind—from heel to toe, sole to laces. Now featuring our best selling silhouettes, we’ve expanded our Burmese Python collection to include two new styles: Monza and Rail.",
    },
  ];
  return (
    <section className="relative isolate overflow-hidden h-screen">
      <motion.div className="  grid grid-cols-1 md:grid-cols-2">
        {grids.map((items, key) => (
          <div className="w-full h-screen md:h-full" key={key}>
            <div className="w-full relative isolate overflow-hidden h-screen">
              <Image
                src={items.image}
                alt="image"
                fill
                sizes="(max-width: 768px) 100vw, "
                className="object-cover"
              />
              <div
                className={`${
                  key === 0
                    ? " ml-[22%] absolute bottom-0 left-0 text-white"
                    : "absolute bottom-0 left-0 px-10 text-white"
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
                  className="text-4xl font-normal "
                >
                  {items.title}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
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
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <GridOverlay lines={gridLines1} opacity={15} color="stroke-white/50" />
    </section>
  );
};

export default CollectionPage;
