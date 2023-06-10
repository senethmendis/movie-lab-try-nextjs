"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {motion as m} from 'framer-motion'

const Movie = ({ title, id, poster, releaseDate }) => {
  const imgPath = "https://image.tmdb.org/t/p/original";
  return (
    <m.div
    initial={{opacity:0,scale:0}}
    whileInView={{opacity:1,scale:1}}
  
    className="flex flex-col justify-center items-center text-center" >
      <Link href={`/${id}`}>
        <Image width={250} height={250} src={imgPath + poster} alt={title}></Image>
      </Link>
      <h1 className="pt-5">{title}</h1>
      <h1>{releaseDate}</h1>
    </m.div>
  );
};

export default Movie;
