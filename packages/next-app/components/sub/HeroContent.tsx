"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";


const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center mt-[150px] px-[50px] w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto placeholder:text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[15px] px-[15px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Start to Exchange your Waste Now!
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[700px] w-auto h-auto"
        >
          <span>
            Turn Trash into CASH - Send and Receive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              W2E Token{" "}
            </span>
            while Recycling with <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
              {" "}
              Waste2Earn{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Be part of the revolution in giving worth to scrap things around us...
        </motion.p>
        <div className="flex flex-row gap-5">
          <Link href="/sells/addSell">
            <motion.a
              variants={slideInFromLeft(1)}
              className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
            >
              Click Here
            </motion.a>
          </Link>

          <Link href="/user">
            <motion.a
              variants={slideInFromLeft(1.5)}
              className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
            >
              Become a Validator
            </motion.a>
          </Link>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/3d-2.png"
          alt="work icons"
          height={500}
          width={500}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
