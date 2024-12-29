import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-[57vh] md:h-screen w-full  ">
      <div className="relative w-full h-full">
        <div className="w-full h-full">
          <Image
            src="/main5.avif"
            alt="bg"
            width={400}
            height={400}
            className="w-[100%] h-full"
            priority
            quality={100}
          />
        </div>
        <div className=" absolute inset-0 flex flex-col justify-center items-center text-center text-black ">
          <h1 className="text-lg md:text-xl lg:text-4xl font-serif mb-2">
            Welcome To My Blog Website
          </h1>
          <p className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-wide mb-4">
            Explore the World
          </p>
          <p className="text-sm md:text-lg lg:text-xl font-medium max-w-md md:max-w-lg lg:max-w-xl">
            Discover new adventures, savor the best cuisines, and embrace the
            beauty of the world around us.Enjoy feel the breeze life goes and
            off just by travelling around the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
