import React from "react";
import { projectData } from "./productCard";
import Image from "next/image";
import Link from "next/link";
const Sec1 = () => {
  return (
    <div className="w-[100%] min-h-screen flex flex-col justify-center bg-[url(/main5.avif)]  ">
      <div className="bg-[#780000] text-[#dddcdc]">
        <div className="text-left py-3 md:py-7 px-5">
          <h1 className="text-3xl md:text-4xl font-bold ">
            Explore the World
          </h1>
        </div>
        <div className="text-left py-3 px-5">
          <h1 className="md:text-2xl text-center font-medium text-sm">
            Discover the world through captivating stories and vivid imagery.
            Our blog brings you closer to iconic landmarks, hidden gems, and
            breathtaking landscapes from around the globe. From the enchanting
            forests to the mesmerizing auroras, we invite you to explore and
            experience the magic of our world`s wonders. Join us on this journey
            and let your imagination soar!
          </h1>
        </div>
      </div>
      <div className="w-[90%] mx-auto grid grid-cols-1 my-5 md:grid-cols-3 gap-7">
        {projectData.map((project, index) => (
          <Link href={`/post/${project.id}`}>
            <div
              key={index}
              className="pb-4 m-1 rounded-md transition-all hover:scale-105 duration-200 shadow-xl border items-center"
            >
              <Image
                src={project.image}
                alt="error"
                width={200}
                height={200}
                className="size-[350px] p-3 rounded-2xl bg-center cursor-pointer  "
              />

              <div>
                <h2 className="font-bold text-2xl px-3">{project.title}</h2>
                <p className=" text-md px-3">{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sec1;
