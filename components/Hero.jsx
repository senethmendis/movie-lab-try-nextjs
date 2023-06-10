"use client"
import Image from "next/image";
import React from "react";
import {motion as m} from 'framer-motion'

export  function Hero  ()  {
  return (
    <m.div initial={{opacity:0}} whileInView={{opacity:1}}div className="w-full mx-auto max-w-[1240px]">
      
      <div
        className="bg-gradient-to-r from-red-600 h-[500px] w-full  bg-cover bg-center relative
        "
      >
        <Image
          className="w-full h-full object-cover absolute mix-blend-overlay"
          src="https://playbackonline.ca/wp/wp-content/uploads/2020/05/Screen-Shot-2020-05-04-at-1.41.10-PM.png"
          alt=""
          width={500}
          height={500}
        ></Image>
        <div className="w-full h-full flex md:flex-row flex-col items-center pl-10">
          <h1 className="text-3xl font-bold">
            Welcome to <br /> <span className="text-6xl ">Movie Lab</span>
          </h1>
        </div>
      </div>
    </m.div>
  );
}
