"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import { useGlobalContext } from "@/app/context/store";
import { Helmet } from "react-helmet";

const Facilities = () => {
  const { setImageSlide } = useGlobalContext();
  
  useEffect(() => {
    console.log('Page loaded');
    setImageSlide(false);
  }, [setImageSlide]);

  return (
    <>
    
    <head>
    
    <title>Facilities - Naiminath Ayurveda : Top BAMS College in India</title>
    <meta name="description" content=" "/>
    </head>

    <div className="flex flex-col items-center justify-center font-sans h-full w-full pb-16">
      <div
        className=" bg-[url('/images/aboutus_bg.jpg')] bg-cover h-[20vh] w-full flex items-center justify-center 
    text-[#54595f] md:text-[32px] text-[28px] font-extrabold border-b-[0.009px] border-[#8b939465]"
      >
        Our Facilities
      </div>
      <div className="flex md:flex-row flex-col w-[70vw] justify-center items-start mt-8 ">
        <div className=" flex flex-col w-full gap-3 items-start justify-center">
          <strong className=" text-[30px] text-[#212121]">Regular OPDs:</strong>
          <ol className="list-decimal list-inside space-y-2 text-[17px] text-[#95989b] ps-6">
            <li className="mb-2">Kayachikitsa</li>
            <li className="mb-2">Kaumarbhritya</li>
            <li className="mb-2">Panchkarma</li>
            <li className="mb-2">Prasuti ‘evum’ Stri Roga</li>
            <li className="mb-2">Shalya Tantra</li>
            <li className="mb-2">Shalakya Tantra</li>
            <li className="mb-2">Swasthvritta</li>
            <li className="mb-2">Dental</li>
            <li className="mb-2">Physiotherapy</li>
          </ol>
        </div>
        <div className=" flex flex-col w-full gap-3 items-start justify-center md:mt-0 mt-5">
          <strong className=" text-[30px] text-[#212121]">
            Other Facilities:
          </strong>
          <ol className="list-decimal list-inside space-y-2 text-[17px] text-[#95989b] ps-6">
            <li className="mb-2">Pathology</li>
            <li className="mb-2">Hi-tech Diagnostics Centre</li>
            <li className="mb-2">State of the art Panchkarma Theatres</li>
            <li className="mb-2">Modular Operation Theatre</li>
            <li className="mb-2">Labour Theatre</li>
            <li className="mb-2">Cancer Care</li>
            <li className="mb-2">Diabetes Special OPD</li>
            <li className="mb-2">Dialysis Unit</li>
            <li className="mb-2">Ayurvedic Diet Consultation</li>
            <li className="mb-2">Yoga</li>
            <li className="mb-2">Organic Farming</li>
            <li className="mb-2">ICU & NICU</li>
            <li className="mb-2">Medical Research Centre</li>
            <li className="mb-2">In-house Drug store</li>
            <li className="mb-2">Sanskrit classes</li>
            <li className="mb-2">Ambulatory services</li>
            <li className="mb-2">Canteen</li>
            <li className="mb-2">Telemedicine</li>
            <li className="mb-2">Obesity clinic</li>
            <li className="mb-2">Dental Dialysis</li>
            <li className="mb-2">
              IPD (General, Semi-private, deluxe and super deluxe rooms)
            </li>
          </ol>
        </div>
      </div>
    </div>
    </>
  );
};

export default Facilities;
