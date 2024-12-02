"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { GridOverlay } from "../components/grid-overlay/gridOverlay";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

interface GridProps {
  image: string;
  tag: string;
  title: string;
  price: string;
}
const FlyPage = () => {
  const [pageWidth, setPageWidth] = useState(0);
  const gridLines1 = [
    { x1: "0%", y1: "0", x2: "0%", y2: "100%" },
    { x1: "10%", y1: "0", x2: "10%", y2: "100%" },
  ];
  const gridLines2 = [
    { x1: "0%", y1: "0", x2: "0%", y2: "100%" },
    { x1: "25%", y1: "0", x2: "25%", y2: "100%" },
    { x1: "50%", y1: "0", x2: "50%", y2: "100%" },
    { x1: "75%", y1: "0", x2: "75%", y2: "100%" },
  ];
  const gridLines3 = [
    { x1: "0%", y1: "0", x2: "0%", y2: "100%" },
    { x1: "50%", y1: "0", x2: "50%", y2: "100%" },
  ];

  const grids= [
    {
      image: "/imgNew7.jpg",
      tag: "X[Style]",
      title: "I-flawa",
      price: "$596.00",
    },
    {
      image: "/imgNew12.jpg",
      tag: "X[Dope]",
      title: "Jeze",
      price: "$596.00",
    },
    {
      image: "/imgNew11.jpg",
      tag: "X[Elegance]",
      title: "Dark Red",
      price: "$596.00",
    },
    {
      image: "/imgNew8.jpg",
      tag: "X[Pose]",
      title: "Kunta",
      price: "$596.00",
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const pagewidth = window.innerWidth;
      setPageWidth(pagewidth);
    }
  }, []);

  return (
    <section className="relative isolate overflow-hidden h-auto bg-[#e6e3e6]">
      <GridOverlay lines={gridLines1} opacity={10} color="stroke-black/10" />

      <motion.div className="relative z-20 ml-[10%] flex flex-col h-auto justify-start sm:justify-end">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-sm  text-black font-thin mt-5 leading-6 flex justify-between items-center pb-3 px-8 border-b-2 border-black/5"
        >
          <div className="uppercase">New world Style</div>
          <div className="">Show Now</div>
        </motion.div>
        <section className="relative isolate overflow-hidden h-auto bg-transparent">
          <GridOverlay
            lines={pageWidth <= 1270 ? gridLines3 : gridLines2}
            opacity={10}
            color="stroke-black/10"
          />
          <div className="  h-full justify-end">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
              {grids.map((item: GridProps, key: number) => (
                <div key={key} className="sm:aspect-square flex flex-col ">
                  <motion.div
                    initial={{ y: 50 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative flex-grow min-h-[500px]"
                  >
                    <Image
                      src={item.image}
                      alt="image"
                      layout="fill"
                      className="p-8 object-cover"
                    />
                  </motion.div>
                  <motion.div
                    className="px-8 flex flex-col justify-end mb-5 z-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                  >
                    <button className="bg-white rounded-lg w-20 h-auto p-1 text-blue-500 text-center uppercase font-semibold text-[10px]">
                      {item.tag}
                    </button>
                    <div className="text-black text-[11px] font-thin my-2">
                      {item.title}
                    </div>
                    <div className="mt-[-12px]">
                      <button className="text-[11px] group font-thin text-black leading-6 ">
                        <div className="flex items-center ">
                          <div className="blinking-element mr-1  w-1 h-1 bg-black rounded-full group-hover:w-0 group-hover:bg-transparent transition-all group-hover:h-0"></div>
                          <span className="group-hover:hidden ">
                            {item.price}
                          </span>
                          <span className="hidden group-hover:translate-x-2 transition-all group-hover:inline">
                            Quick add{" "}
                            <MdOutlineArrowOutward className="inline text-sm" />
                          </span>
                        </div>
                      </button>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </section>
  );
};

export default FlyPage;
