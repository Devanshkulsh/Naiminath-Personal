'use client'
import {
  faBook,
  faMailBulk,
  faPhone,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import NavBar from "./NavBar";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Header = ({ imageSlider }: { imageSlider: boolean }) => {
  const customSize: SizeProp = "lg";
  const router = useRouter();

  return (
    <div
      className={`flex flex-col w-full h-fit ${
        imageSlider ? "bg-transparent" : "bg-green-500"
      } font-medium bg-orange-400`}
    >
      <div className="flex flex-col w-full justify-center">
        
        {/* --- TOP BAR START --- */}
        <div className="flex flex-col md:flex-row justify-between items-center border-[#748182] bg-[#ded636] py-3 px-4 md:px-12 gap-3 md:gap-0">
          
          {/* Left Side: Timing & Email */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-start items-center text-center text-[13px] md:text-[14px] text-stone-700 w-full md:w-auto">
            <div className="flex items-center gap-1.5">
              <FontAwesomeIcon icon={faStopwatch} color="#a33a2e" size={customSize} />
              <span>Open Hours-9am to 4pm</span>
            </div>
            
            <div className="hidden sm:block h-4 border-l border-[#a33a2e]"></div>
            
            <div className="flex items-center gap-1.5">
              <FontAwesomeIcon icon={faMailBulk} color="#a33a2e" size={customSize} />
              <a href="mailto:info@naiminathayurveda.org" className="hover:underline">
                info@naiminathayurveda.org
              </a>
            </div>
          </div>

          {/* Right Side: Enquiry, Phone, Permission & Button */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-3 text-[12px] md:text-[14px] font-semibold w-full md:w-auto">
            
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-red-900">Admission enquiry :-</span>
              <FontAwesomeIcon icon={faPhone} color="#a33a2e" size={customSize} />
              <a href="tel:+91-9528024473" className="hover:underline">
                +91-9528024473
              </a>
            </div>

            <div className="hidden sm:block h-4 border-l border-[#a33a2e]"></div>
            
            <Link href="/doc/Yearly_Permission.pdf" className="hover:underline">
              Permission Letter
            </Link>
            
            <div className="hidden sm:block h-4 border-l border-[#a33a2e]"></div>

            {/* Admission Button */}
            <a 
              href="https://bams-admission.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center whitespace-nowrap rounded-md border border-[#7a0f0f] bg-[#de0000] px-3 py-1.5 gap-1.5 text-[11px] md:text-[12px] font-bold text-white shadow-[0_2px_8px_rgba(0,0,0,0.25)] transition duration-200 hover:bg-[#b00000]"
            >
              <FontAwesomeIcon icon={faBook} color="#fff500" className="text-[11px] md:text-[12px]" />
              <span className="leading-none">Admission Open</span>
            </a>
          </div>

        </div>
        {/* --- TOP BAR END --- */}

        {/* --- MAIN NAVBAR START --- */}
        <div className="flex flex-col md:flex-row px-4 md:px-12 w-full h-fit justify-between items-center bg-white py-4 gap-4 md:gap-0 border-b border-slate-300">
          <div className="flex items-center gap-3">
            <div className="w-[240px] h-[50px]">
              <div 
                className="w-full h-full bg-[url('/images/ayurvedalogo.png')] bg-no-repeat bg-contain cursor-pointer" 
                onClick={() => router.push('/')}
              ></div>
            </div>
            <div className="w-[110px] h-[58px]">
              <div className="w-full h-full bg-[url('/images/NABH-Logo.png')] bg-no-repeat bg-contain bg-center"></div>
            </div>
          </div>
          <NavBar />
        </div>
        {/* --- MAIN NAVBAR END --- */}

      </div>
    </div>
  );
};

export default Header;
