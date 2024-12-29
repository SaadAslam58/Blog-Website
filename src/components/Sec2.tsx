import React from "react";
import { FaPlane, FaMapMarker, FaShip, FaCar } from "react-icons/fa";

const Sec2 = () => {
  return (
    <div className=" flex justify-center items-center w-full h-[23vh] md:min-h-[41vh] bg-[#780000]">
      <div className="md:flex grid grid-cols-2 grid-rows-2 justify-center items-center w-[90%] md:text-4xl text-2xl md:gap-0 gap-5 text-[#dddcdc] ">
        <div className="border-x-2 font-semibold md:p-5 p-3">
          <h1 className="flex justify-center items-center gap-2">
            <FaPlane />
            Travelsa
          </h1>
        </div>
        <div className="border-r-2 md:border-none font-semibold md:p-5 p-3">
          <p className="flex justify-center items-center gap-2 ">
            <FaMapMarker />
            Discover <span className="md:flex hidden">the world with us</span>
          </p>
        </div>
        <div className="border-x-2 font-semibold md:p-5 p-3">
          <h1 className="flex justify-center items-center gap-2">
            <FaShip />
            Siora
          </h1>
        </div>
        <div className="border-r-2 font-semibold md:p-5 p-3">
          <h1 className="flex justify-center items-center gap-2">
            <FaCar />
            CrapsU
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Sec2;
