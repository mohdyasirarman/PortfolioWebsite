import { useEffect, useState } from "react";
import CanvasDesign from "./CanvasDesign";

const Herosection = () => {
  const [gapOfStroke, setGapOfStroke] = useState(50);

  useEffect(() => {
    const handleResize = () => {
      const currentScreenW = window.innerWidth;
      if (currentScreenW < 500) {
        setGapOfStroke(130);
      } else {
        setGapOfStroke(110);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative h-screen w-full bg-[#151515] font-drukwide overflow-hidden z-10">
      <CanvasDesign gapOfStroke={gapOfStroke} />
      <div className=" flex  flex-col justify-center font-poppins   items-center absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2  h-[70%] w-[70%]">
           <div className="text-white/80 text-[20px]">{`HELLO I'M`}</div>
           <div className="bg-gradient-to-r from-[#dc143c]  to-[#a80f2e] inline-block text-transparent bg-clip-text text-[70px] font-bold">{`SOFTWARE DEVELOPER`}</div>
           <p className="text-center text-white/80 ">{`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores saepe dolor similique officiis eligendi nisi ipsam asperiores est hic. Quod.`}</p>
      </div>
    </div>
  );
};

export default Herosection;