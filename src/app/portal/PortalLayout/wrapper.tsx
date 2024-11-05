import React from "react";
import Image from "next/image";

const Wrapper = () => {
  const image = "/imgNew.jpg";
  return (
    <section
      className="relative isolate overflow-hidden  h-screen"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <svg
        className="absolute inset-0 z-10 h-full w-full stroke-black opacity-25"
        aria-hidden="true"
      >
        <line x1="0%" y1="0" x2="0%" y2="100%" strokeWidth="1" />
        <line x1="10%" y1="0" x2="10%" y2="100%" strokeWidth="1" />
      </svg>
      {/* <div>he</div> */}
      <div className="flex flex-col bg-white relative  ">
        <div className="flex flex-1">
          <div className="hidden xl:flex xl:w-64 xl:flex-col">
            <div className="flex flex-col pt-5 overflow-y-auto  w-[500px]   h-screen">
              <Image
                src={image}
                alt="logo"
                className="w-full h-full object-cover"
                layout="fill"
              />
              hi
            </div>
          </div>

          <div className="flex flex-col flex-1 overflow-x-hidden border-b-2 ">
            <main className="border-b-2 border-slate-200">yo</main>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Wrapper;
