"use client";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/store";
import dynamic from "next/dynamic";
import Header from "./Header";
import ImageSlider from "./ImageSlider";
import MobileNavBar from "./MobileNavBar";
import Image from "next/image";
import { faVirusCovid } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import Link from "next/link";

import {
  faBook,
  faMailBulk,
  faPhone,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";


// const Header = dynamic(
//   () => import('./Header'),
//   { ssr: false }
// )
// const ImageSlider = dynamic(
//   () => import('./ImageSlider'),
//   { ssr: false }
// )

const BannerHeader = () => {
  const { imageSlide, setImageSlide } = useGlobalContext();
  const [isExpanded, setIsExpanded] = useState(false);


  const [isMobile, setIsMobile] = useState(false);
  const rounter = useRouter();
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const customSize: SizeProp = "lg";
  // const imageSlide = false;
  return (
    <div className=" md:relative">

      {/* self */}
      {isMobile && (<div className={`flex flex-row justify-center items-center w-full h-fit font-medium bg-[#ded636]`}>
        <div className="flex flex-row gap-2 my-4 justify-between m-auto font-bold  items-center text-[11px]"
        >

          <span className="font-bold text-red-900 text-[14px]">

            Admission enquiry :-
          </span>
          <FontAwesomeIcon icon={faPhone} color="#a33a2e" size={customSize} />

          <a href={`tel: +91-9528024473`} className="text-[14px]">

            +91-9528024473
          </a>


          {/* <div className="h-full border mx-3 border-[#a33a2e]"></div>
          <Link href={"/doc/perm_letter.pdf"}>Permission Letter</Link> */}
        </div>
      </div>)}
      {/* self */}

      {isMobile && (<div className=" flex flex-row justify-between w-full my-5">

        <div className="ml-5 flex items-center gap-2">
          <div className="w-[200px] h-[50px] bg-[url('/images/ayurvedalogo.png')] bg-no-repeat  bg-contain cursor-pointer"
            onClick={
              () => { rounter.push('/') }
            }></div>
          <div className="w-[90px] h-[50px] bg-[url('/images/NABH-Logo-bg.png')] bg-no-repeat bg-contain bg-center"></div>
        </div>

        <div className=" absolute z-20 right-0">

          {!isExpanded && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 mr-5"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
          {isExpanded && (


            <MobileNavBar isOpen={isExpanded} setOpen={setIsExpanded} />
          )}

        </div>

      </div>)}

      {!isMobile && <Header imageSlider={imageSlide} />}
      <div className="">{imageSlide && <ImageSlider />}</div>
    </div>
  );
};
export default BannerHeader;
