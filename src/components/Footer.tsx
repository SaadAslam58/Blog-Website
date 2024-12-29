import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { projectData } from "./productCard";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="md:h-[51vh] bg-[url(/main5.avif)] w-full ">
      <div className="md:mx-5 mx-6 flex flex-row justify-between item-center ">
        <div className=" bg-[#780000] w-full md:h-[40vh] md:w-[33%] my-6  rounded-3xl">
          <div className="px-8 py-5 flex flex-col justify-left ">
            <h2 className="text-[28px] font-semibold text-[#dddcdc]">
              Contact
            </h2>
            <h1 className="text-[48px] font-bold">Get in touch</h1>
            <Link href="mailto:hellomedia555@example.com" target="_blank">
              <p className="text-[#dddcdc] underline">
                hellomedia555@gmail.com
              </p>
            </Link>
            <div className="flex justify-left items-center pt-2 gap-x-3">
              <Link
                href="https://www.linkedin.com/in/saad-aslam-2167a32bb/"
                target="_blank"
              >
                <FaLinkedin className="size-[40px] text-[#dddcdc]" />
              </Link>
              <Link href="https://github.com/SaadAslam58" target="_blank">
                <FaGithub className="size-[40px] text-[#dddcdc]" />
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:grid md:grid-cols-3   items-center gap-3 ">
          {projectData.slice(0, 3).map((project) => (
            <div key={project.id}>
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={200}
                  height={200}
                  className="size-[200px] rounded-xl border-2 border-[#780000] transition-all "
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl">
                  <span className="text-white text-xl grid grid-3 md:text-xl font-bold">
                    {project.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
