"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useGlobalContext } from "@/app/context/store";

const AboutUs = () => {
  const { setImageSlide } = useGlobalContext();

  useEffect(() => {
    console.log("Page loaded");
    setImageSlide(false);
  }, [setImageSlide]);

  return (
    <div>
      <head>
        <title>About us</title>
        <meta name="description" content="NA" />
      </head>

      <div className="flex flex-col items-center justify-center font-sans h-full w-full">
        <div
          className=" bg-[url('/images/aboutus_bg.jpg')] bg-cover h-[20vh] w-full flex items-center justify-center 
      text-[#54595f] md:text-[32px] text-[28px] font-extrabold border-b-[0.009px] border-[#8b939465]"
        >
          About Us
        </div>
        <div className="bg-[url('/images/About_naiminath_hospital-overlay (1).webp')] bg-center bg-cover
bg-no-repeat  flex md:flex-row flex-col justify-center gap-6 mt-10 lg:px-20 sm:px-0 ">


          <Image
            src="/images/About_naiminath_hospital.webp"
            className="w-[390px] h-[240px] md:h-[290px] rounded-[7px] shadow-md ring-1 ring-slate-100 mx-auto sm:mx-0"
            alt="about image"
            width={800}
            height={400}
          />

          <div className="text-[#000000]">
            {/*   <div className="w-[95%] md:w-[85%] h-full mt-3 md:mx-[10%] mx-[5%] py-[2%]">*/}
            <p className="mt-3 ml-2 mr-2">
              Naiminath Ayurveda is an institution dedicated to quality education and healthcare in the field of Ayurveda. Established in 2016, the college and hospital are managed by Shri Bhagwan Mahavir Jain Minority Educational Society.
              The institute houses a 100-bedded Ayurvedic hospital with a well-functioning OPD serving over 200 patients daily and an IPD facility for around 40 patients. With a blend of traditional Ayurvedic knowledge and modern medical practices, Naiminath Ayurveda focuses on practical training, experiential learning, and patient-centric care.
            </p>
            <p className="mt-3 ml-2 mr-2">
              The college offers a comprehensive curriculum that not only covers
              traditional Ayurvedic practices but also integrates modern medical
              advancements with its emphasis on practical training and
              experiential learning. Students have access to well-equipped
              laboratories where they can develop their skills and gain hands-on
              experience under the guidance of experienced faculty members. This
              approach ensures that graduates are prepared to enter the
              professional world with confidence and expertise. The Hospital
              prides itself in providing a well-equipped, hygienically
              maintained panchkarma therapy rooms to suit the need and
              affordability of one and all.
            </p>
          </div>
        </div>
        <div className="w-[95%] md:w-[85%] h-full mt-3 md:mx-[10%] mx-[5%] py-[2%]">
          <p className=" mt-3 ml-250">
            What sets Naiminath apart from other private ayurvedic colleges in
            UP is its emphasis on practical experience alongside theoretical
            knowledge. This prestigious ayurvedic medical college offers a
            unique blend of traditional practices and modern advancements,
            making it one of the most sought-after institutions for aspiring
            ayurvedic practitioners. Students here have the unique opportunity
            to engage in hands-on learning through internships at the attached
            hospital.
          </p>
          <p className=" mt-3 ml-250">
            We have Outpatient departments in Kayachikitsa, Kaumarbhritya,
            Panchkarma, Prasuti & Stri Roga, Shalakya tantra, Shalya tantra,
            Swasthavritta, Dental and Physiotherapy. The Hospital prides
            itself in providing a well-equipped, hygienically maintained
            panchkarma therapy rooms to suit the need and affordability of one
            and all.
          </p>

          <h3 className=" text-[24px] font-semibold mt-6">  Sustainable, Scalable and Replicability of Operations</h3>
          <p className="mt-3">
            Through years of practice and practical learnings we have developed detailed SOPs for each and every department which helps us in ramping up our staff on a faster and precise manner. A holistic periodic training curriculum is available for continuity of learning and upgrading our knowledge base. Training processes have been bifurcated for Clinical, Non-Clinical and Physicians separately for clear understanding of job roles. Regular knowledge transfer sessions are conducted to enable cross training and intra-operability of employees.
          </p>
          <div className=" text-[24px] font-semibold mt-6"> Affordability and Accessibility </div>
          <p className="mt-3">
            The institute believes in the principles of healthcare for all and hence our price points have been fixed at a minimal rate based on the general public economic status in the city. Naiminath Ayurvedic Hospital has adopted 5 neighbouring villages and provide free of cost treatment to them all. Regular free camps are conducted for patients who cannot afford quality healthcare in the city and are treated here with exceptional results.
          </p>

        </div>

        <div className="relative mt-5 md:mt-12 w-full md:h-[70vh] h-[90vh] bg-orange-700 flex justify-center items-center overflow-hidden ">
          <Image
            src="/images/abou_us_green_tea_bg-overlay (3).webp"
            className="w-full h-full rounded-[7px] object-cover"
            alt="about image"
            layout="fill"
          />
          <div
            className="absolute top-2 md:top-1/4 w-[90vw] md:w-[75vw] md:h-full flex md:flex-row flex-col
           justify-center items-start bg-opacity-70 gap-2 md:gap-10"
          >
            <div className=" md:basis-1/2 font-semibold">
              <div className="text-[#3c4f43] md:text-[32px] text-[26px] font-semibold">
                Vision
              </div>
              <p className="md:mt-3 text-[#506759]">
                Our vision is to be an innovative, leading global Ayurvedic
                Medical College, Hospital and Research Centre dedicated to
                transforming the youth into the most competent doctors equipped
                with highest professional as well as clinical skills in the
                field of Ayurveda System of Medicine through rigorous and
                intensive training with Holistic approach and appropriate
                guidance.
              </p>
            </div>
            <div
              className=" md:basis-1/2 font-semibold"
              style={{ textShadow: "1px 1px 2px #89bd7f" }}
            >
              <div className="md:text-[30px] text-[24px] font-semibold">
                Mission
              </div>
              <p className="md:mt-3">
                The mission of Naiminath Ayurvedic Hospital is to improve the
                health of our Community and the Global Community by setting the
                standard of excellence in patient care. We aim –
              </p>
              <p className="md:mt-3">
                To be the world’s preeminent Ayurvedic healthcare institution.
              </p>
              <p className="md:mt-3">
                To educate budding healthcare professionals and to participate
                in appropriate clinical research.
              </p>
              <p className="md:mt-3 ">
                To cultivate an environment of trust, honesty, mutual respect
                and compassion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
