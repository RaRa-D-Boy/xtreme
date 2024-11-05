"use client"
import React from "react";
import Image from "next/image";
import { GridOverlay } from "../components/grid-overlay/gridOverlay";
import { MdOutlineArrowOutward } from "react-icons/md";

const GravityPage = () => {
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
      image: "/imgNew18.jpg",
      tag: "new",
      title: "Monza Velcro",
      price: "$596.00",
    },
    {
      image: "/imgNew17.jpg",
      tag: "new",
      title: "Monza Velcro",
      price: "$596.00",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden h-auto bg-[#e6e3e6]">
      <GridOverlay lines={gridLines1} opacity={10} color="stroke-black/10" />

      <div className="relative z-20 ml-[10%] flex flex-col h-auto justify-end">
        <div className="text-sm  text-black font-thin mt-5 leading-6 flex justify-between items-center pb-3 px-8 border-b-2 border-black/5">
          <div className="uppercase">New world Style</div>
          <div className="">Show Now</div>
        </div>
        <section className="relative isolate overflow-hidden h-auto bg-transparent">
          <GridOverlay
            lines={gridLines2}
            opacity={10}
            color="stroke-black/10"
          />
          <div className="  h-full justify-end">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              {grids.map((item: any, key: number) => (
                <div key={key} className="md:aspect-square flex flex-col">
                  <div className="relative flex-grow min-h-[500px]">
                    <Image
                      src={item.image}
                      alt="image"
                      layout="fill"
                      objectFit="cover"
                      className="p-8 "
                    />
                  </div>
                  <div className="px-8 flex flex-col justify-end mb-5 z-10">
                    <button className="bg-white rounded-lg w-8 h-auto p-1 text-blue-500 text-center uppercase font-semibold text-[10px]">
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default GravityPage;
