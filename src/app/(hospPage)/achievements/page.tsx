"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useGlobalContext } from "@/app/context/store";

const achievements = [
  {
    title: "BW Healthcare Summit 2024 Award Nomination",
    description:
      "Naiminath Ayurvedic Medical College, Hospital and Research Centre, Agra was nominated for the Business World Healthcare Summit 2024 Award in the category of Institutional Excellence in Healthcare Education and Training. This recognition reflects the institution’s commitment to delivering quality Ayurvedic education, clinical training, and healthcare excellence.",
    image: "/achievements/achievement1.jpg",
  },
  {
    title: "BW Healthcare Excellence Award 2024",
    description:
      "Naiminath Ayurvedic Medical College, Hospital and Research Centre, Agra was honored with the prestigious BW Healthcare Excellence Award for Institutional Excellence in Healthcare Education and Training. This achievement recognizes the institution’s dedication to academic excellence, quality healthcare education, and the continuous development of future healthcare professionals.",
    image: "/achievements/achievement2.jpg",
  },
  {
    title: "Top 10 Ayurvedic Colleges in India 2024",
    description:
      "Naiminath Ayurvedic Medical College, Hospital and Research Centre, Agra was recognized by Higher Education Review as one of the Top 10 Ayurvedic Colleges in India for 2024. This prestigious recognition reflects the institution’s commitment to academic excellence, quality education, and the advancement of Ayurvedic healthcare and research.",
    image: "/achievements/achievement7.jpg",
  },
  {
    title: "Institutional Excellence in Healthcare Education & Training",
    description:
      "Naiminath Ayurvedic Medical College, Hospital and Research Centre, Agra received the BW Healthcare Excellence Award 2024 for Institutional Excellence in Healthcare Education and Training. This prestigious recognition acknowledges the institution’s outstanding contribution to quality healthcare education, professional training, and its commitment to fostering excellence in Ayurvedic medical learning and practice.",
    image: "/achievements/achievement3.jpg",
  },
  {
    title: "CCRAS-SPARK Research Program Selection",
    description:
      "Siddharth Sharma (Batch 2022–23) was selected for the Studentship Program for Ayurveda Research (KEN CCRAS-SPARK), a prestigious initiative promoting research excellence in Ayurveda. Guided by Prof. Dr. Girish M. Shende and the Research and Innovation Cell, this achievement highlights the institution’s strong focus on academic research, innovation, and student success.",
    image: "/achievements/achievement5.jpg",
  },
  {
    title: "India's Top 10 Ayurveda Colleges Recognition",
    description:
      "Naiminath Ayurvedic Medical College, Hospital and Research Centre, Agra was recognized among India’s Top 10 Ayurvedic Colleges for 2024 by The Academic Insights. This distinguished honor acknowledges the institution’s significant contributions to Ayurvedic education, academic excellence, and its commitment to shaping the future of healthcare through quality learning and research.",
    image: "/achievements/achievement6.jpg",
  },
  {
    title: "AIIA Pre-Incubation Training Selection",
    description:
      "A student team from Naiminath Ayurvedic Medical College earned the opportunity to receive Pre-Incubation Training at AIIA, New Delhi, marking an important milestone in fostering innovation and entrepreneurship in Ayurveda. Led by Chhayashree B.M. with team member Lata Kumari (Batch 2022–23), the achievement reflects the institution’s commitment to nurturing future leaders and advancing medical innovation.",
    image: "/achievements/achievement4.jpg",
  },
  {
    title: "NABH AYUSH Entry-Level Hospital Certification",
    description:
      "Naiminath Ayurvedic Medical College Hospital and Research Centre, Agra achieved NABH AYUSH Entry-Level Hospital Certification from the National Accreditation Board for Hospitals & Healthcare Providers (NABH). This certification reflects the institution’s adherence to recognized quality standards in patient care, healthcare services, and hospital management, reinforcing its commitment to excellence in Ayurvedic healthcare delivery.",
    image: "/achievements/achievement9.jpg",
  },
  {
    title: "NABH Certified Ayurvedic Healthcare Services",
    description:
      "Naiminath Ayurvedic Medical College Hospital and Research Centre, Agra received NABH AYUSH Entry-Level Hospital Certification for its comprehensive range of Ayurvedic healthcare services, including Panchakarma, Kayachikitsa, Shalakya Tantra, Shalya Tantra, Kaumarbhritya, Damshtra Chikitsa, Swasthavritta, Prasuti Evam Stri Roga, and Yoga Services. This recognition demonstrates the institution’s commitment to maintaining high standards of quality, patient safety, and excellence in Ayurvedic healthcare delivery.",
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
