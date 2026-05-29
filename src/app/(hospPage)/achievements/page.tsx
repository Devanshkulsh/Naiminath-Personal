"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useGlobalContext } from "@/app/context/store";

const achievements = [
  {
    title: "Academic Excellence Recognition",
    description:
      "A proud recognition of academic commitment and consistent performance within the institution.",
    image: "/achievements/achievement1.jpg",
  },
  {
    title: "Student Achievement Ceremony",
    description:
      "Celebrating students whose dedication, discipline, and learning spirit brought honour to NAMC.",
    image: "/achievements/achievement2.jpg",
  },
  {
    title: "Institutional Honour",
    description:
      "A meaningful milestone that reflects the college's continued growth in Ayurveda education.",
    image: "/achievements/achievement7.jpg",
  },
  {
    title: "Award of Distinction",
    description:
      "Recognition for outstanding contribution, excellence, and a culture of continual improvement.",
    image: "/achievements/achievement3.jpg",
  },
  {
    title: "Merit Recognition",
    description:
      "Honouring meritorious work and the sincere efforts behind every achievement.",
    image: "/achievements/achievement5.jpg",
  },
  {
    title: "Proud Moment at NAMC",
    description:
      "A memorable achievement that adds to the institution's journey of learning and service.",
    image: "/achievements/achievement6.jpg",
  },
  {
    title: "Excellence in Ayurveda Education",
    description:
      "Recognising the pursuit of quality education, clinical exposure, and professional values.",
    image: "/achievements/achievement4.jpg",
  },
  {
    title: "Achievement Showcase",
    description:
      "A glimpse of the recognitions earned through teamwork, focus, and institutional dedication.",
    image: "/achievements/achievement9.jpg",
  },
  {
    title: "Milestone Recognition",
    description:
      "Marking an important milestone in the continuing progress of Naiminath Ayurveda.",
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

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, index) => (
              <article
                key={achievement.image}
                className="group overflow-hidden rounded-[8px] bg-white shadow-[0_12px_34px_rgba(13,19,23,0.1)] ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(13,19,23,0.16)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#dfe5e7]">
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 92vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 bg-[#fff700] px-3 py-1 text-[12px] font-extrabold text-[#0d1317] shadow-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="px-5 py-5">
                  <h3 className="text-[19px] font-extrabold leading-snug text-[#212121]">
                    {achievement.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-[#666d72]">
                    {achievement.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Achievements;
