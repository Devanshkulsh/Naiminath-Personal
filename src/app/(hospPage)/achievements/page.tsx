"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useGlobalContext } from "@/app/context/store";

const achievements = [
  {
    title: "Academic Excellence Recognition",
    image: "/achievements/achievement1.jpg",
  },
  {
    title: "Student Achievement Ceremony",
    image: "/achievements/achievement2.jpg",
  },
  {
    title: "Institutional Honour",
    image: "/achievements/achievement7.jpg",
  },
  {
    title: "Award of Distinction",
    image: "/achievements/achievement3.jpg",
  },
  {
    title: "Merit Recognition",
    image: "/achievements/achievement5.jpg",
  },
  {
    title: "Proud Moment at NAMC",
    image: "/achievements/achievement6.jpg",
  },
  {
    title: "Excellence in Ayurveda Education",
    image: "/achievements/achievement4.jpg",
  },
  {
    title: "Celebrating Dedication",
    image: "/achievements/achievement8.jpg",
  },
  {
    title: "Achievement Showcase",
    image: "/achievements/achievement9.jpg",
  },
  {
    title: "Milestone Recognition",
    image: "/achievements/achievement10.jpg",
  },
];

const Achievements = () => {
  const { setImageSlide } = useGlobalContext();

  useEffect(() => {
    setImageSlide(false);
  }, [setImageSlide]);

  return (
    <>
      <head>
        <title>Achievements - Naiminath Ayurveda</title>
        <meta
          name="description"
          content="Achievements and recognitions of Naiminath Ayurvedic Medical College, Hospital and Research Centre."
        />
      </head>

      <main className="w-full bg-[#eef1f2] pb-16 text-[#0d1317]">
        <section className="relative flex min-h-[24vh] w-full items-center justify-center overflow-hidden bg-[url('/images/aboutus_bg.jpg')] bg-cover bg-center px-5 text-center">
          <div className="absolute inset-0 bg-white/35" />
          <div className="relative z-10 max-w-4xl py-10">
            <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.22em] text-[#a33a2e]">
              NAMC Honours
            </p>
            <h1 className="text-[32px] font-extrabold leading-tight text-[#30373d] md:text-[48px]">
              Achievements
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] font-medium leading-7 text-[#54595f] md:text-[17px]">
              A curated gallery of recognitions, proud milestones, and moments
              that reflect the commitment of our students, faculty, and
              institution.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-12 w-[92vw] max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 border-l-4 border-[#de0000] bg-white px-5 py-5 shadow-sm md:flex-row md:items-end md:px-7">
            <div>
              <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#a33a2e]">
                Recognition Gallery
              </p>
              <h2 className="mt-2 text-[26px] font-extrabold text-[#212121] md:text-[36px]">
                Celebrating Every Proud Moment
              </h2>
            </div>
            <p className="max-w-xl text-[15px] leading-7 text-[#6f7579]">
              Each achievement is presented with its title so the gallery can
              grow cleanly as new certificates, awards, and institutional
              highlights are added.
            </p>
          </div>

          <div className="grid auto-rows-[260px] grid-cols-1 gap-5 sm:grid-cols-2 lg:auto-rows-[300px] lg:grid-cols-4">
            {achievements.map((achievement, index) => {
              const isFeature = index === 0 || index === 5;
              const isTall = index === 2 || index === 8;

              return (
                <article
                  key={achievement.image}
                  className={`group relative overflow-hidden rounded-[8px] bg-white shadow-[0_14px_40px_rgba(13,19,23,0.14)] ring-1 ring-black/5 ${
                    isFeature ? "lg:col-span-2 lg:row-span-2" : ""
                  } ${isTall ? "lg:row-span-2" : ""}`}
                >
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    sizes={
                      isFeature
                        ? "(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 92vw"
                        : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 92vw"
                    }
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1317]/85 via-[#0d1317]/18 to-transparent" />
                  <div className="absolute left-0 top-0 m-4 bg-[#fff700] px-3 py-1 text-[12px] font-extrabold text-[#0d1317] shadow-sm">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="text-[20px] font-extrabold leading-snug md:text-[24px]">
                      {achievement.title}
                    </h3>
                    <div className="mt-3 h-[3px] w-16 bg-[#de0000]" />
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default Achievements;
