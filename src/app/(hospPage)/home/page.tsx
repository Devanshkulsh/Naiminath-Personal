"use client";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import React, { useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGlobalContext } from "@/app/context/store";
import { Helmet } from "react-helmet";
import Link from "next/link";
import VideoTestimonial from "@/app/(components)/testimonials/VideoTestimonial";

type SliderItem = {
  image: string;
  text: string;
  link?: string;
};

const HomePage = () => {
  const { setImageSlide } = useGlobalContext();

  useEffect(() => {
    console.log("Page loaded");
    setImageSlide(true);
  }, [setImageSlide]);

  return (
    <>
      {/* <head>
        <title>
          Naiminath Ayurveda : Best Private BAMS College in Agra, UP
        </title>
        <meta
          name="description"
          content="Experience excellence at Naiminath Ayurveda, the leading private BAMS college in Agra, UP. Begin your journey towards a fulfilling career in Ayurveda now!"
        />
      </head> */}
      <div className="w-max-full flex flex-col justify-center items-center -mt-4 font-sans pb-20">
        {/* ayurveda treatement section */}
        <div
          className="w-full flex flex-col justify-center items-center bg-cover bg-no-repeat
      bg-[url('https://hindijaankaari.in/wp-content/uploads/2023/12/greenbg-scaled.jpeg')] font-sans"
        >
          <div className=" bg-slate-500 w-full h-3 mb-[32px]"></div>
          <OpdSection />

          <AyurvedaTreatmentSection />

          {/* <WhatIsAyurveda /> */}
        </div>

        <AboutUsSection />
        <div className="w-full flex flex-col justify-center items-center pt-5">

          <PrivateBamsSection />
        </div>

        <div className="mb-14 mt-5 text-center">

          <div className="mt-5 mb-5">

            <h2 className="text-[26px] md:text-[32px]  text-[#525252] font-semibold">
              {/* Most Appreciated Services */}
              A Glimpse Of Campus
            </h2>
            <p className="text-center text-lg my-[3px] capitalize">
              A place to learn, grow, and thrive.
            </p>
          </div>


          {/* Previous added ayurveda picture */}
          {/* <div className="flex flex-row flex-wrap justify-center flex-4 gap-2 "> */}

          {/* <Image width="100" height="100" className="rounded-md w-auto h-60" src="/images/gallery/n1.jpg" alt="Patient 1" />
            <Image width="100" height="100" className="rounded-md w-auto h-60" src="/images/gallery/n2.jpg" alt="Patient 2" />
            <Image width="100" height="100" className="rounded-md w-auto h-60 sm:w-48 sm:h-60" src="/images/gallery/n3.jpg" alt="Patient 3" />
            <Image width="100" height="100" className="rounded-md w-auto h-60" src="/images/gallery/n4.jpg" alt="Patient 4" /> */}

          {/* Previous added ayurveda picture section end */}

          {/* if want the ayurved image back comment from here */}
          <div className="flex flex-row flex-wrap justify-center flex-4 gap-2 md:w-[78%] w-[95%] m-auto ">

            <Image width="300" height="240" className="rounded-md w-auto h-60 sm:w-[calc(50%-10px)] md:w-[calc(33.33%-10px)] lg:w-[calc(25%-10px)]" src="/images/gallery/gallery1-min.jpg" alt="Campus Glimpse" />
            <Image width="300" height="240" className="rounded-md w-auto h-60 sm:w-[calc(50%-10px)] md:w-[calc(33.33%-10px)] lg:w-[calc(25%-10px)]" src="/images/gallery/gallery4-min.jpg" alt="Campus Glimpse" />
            <Image width="300" height="240" className="rounded-md w-auto h-60 sm:w-[calc(50%-10px)] md:w-[calc(33.33%-10px)] lg:w-[calc(25%-10px)]" src="/images/gallery/gallery10-min.jpg" alt="Campus Glimpse" />
            <Image width="300" height="240" className="rounded-md w-auto h-60 sm:w-[calc(50%-10px)] md:w-[calc(33.33%-10px)] lg:w-[calc(25%-10px)]" src="/images/gallery/gallery22-min.jpg" alt="Campus Glimpse" />
            {/* remove till here */}
          </div>
        </div>
        {/* <NaiminathAyurvedaSection /> */}

        {/* video testimonials added */}
        <Testimonial />
      </div >
    </>
  );
};

// const AyurvedaTreatmentSection = () => {
//   const sliderItems: SliderItem[] = [
//     { image: "/images/ayd_treate1.jpg", text: "Abhyangam" },
//     { image: "/images/ayd_treate2.jpg", text: "Shirodhara" },
//     { image: "/images/ayd_treate3.jpg", text: "Kashayadhara" },
//     { image: "/images/ayd_treate4.jpg", text: "Greeva Basti" },
//     { image: "/images/ayd_treate5.jpg", text: "Janu Basti" },
//     { image: "/images/ayd_treate6.jpg", text: "Kati Basti" },
//     { image: "/images/ayd_treate7.jpg", text: "Spine Basti" },
//     { image: "/images/ayd_treate8.jpg", text: "Kizhi" },
//   ];


const AyurvedaTreatmentSection = () => {
  const sliderItems = [
    { image: "/images/ayd_treate1.jpg", text: "Abhyangam", link: "https://naiminathayurveda.org/hospital/opd?id=7" },
    { image: "/images/ayd_treate2.jpg", text: "Shirodhara", link: "https://naiminathayurveda.org/hospital/opd?id=8" },
    { image: "/images/ayd_treate3.jpg", text: "Kashayadhara", link: "https://naiminathayurveda.org/hospital/opd?id=9" },
    { image: "/images/ayd_treate4.jpg", text: "Greeva Basti", link: "https://naiminathayurveda.org/hospital/opd?id=10" },
    { image: "/images/ayd_treate5.jpg", text: "Janu Basti", link: "https://naiminathayurveda.org/hospital/opd?id=11" },
    { image: "/images/ayd_treate6.jpg", text: "Kati Basti", link: "https://naiminathayurveda.org/hospital/opd?id=12" },
    { image: "/images/ayd_treate7.jpg", text: "Spine Basti", link: "https://naiminathayurveda.org/hospital/opd?id=13" },
    { image: "/images/ayd_treate8.jpg", text: "Kizhi", link: "https://naiminathayurveda.org/hospital/opd?id=14" },
  ];

  return (
    <>
      <h2 className="text-[28px] md:text-[34px] text-[#525252] font-semibold">
        Ayurvedic Treatments
      </h2>
      <p className="text-[14px] md:text-[19px] text-[#7c7777] font-semibold">
        List of Ayurvedic Treatments
      </p>
      <div className="w-[80%] md:w-[66%] my-[3%] md:mx-[20%] mx-[10%] items-center justify-center">
        <AyurvedaTreatmentImageSlider items={sliderItems} />
      </div>
    </>
  );

  return (
    <div className="slider">
      {sliderItems.map((item, index) => (
        <a key={index} href={item.link}>
          <img src={item.image} alt={item.text} />
        </a>
      ))}
    </div>
  );

};
{/*
const AyurvedaTreatmentSection = () => {
  const sliderItems: SliderItem[] = [
    { image: "/images/ayd_treate1.jpg", text: "Abhyangam" },
    { image: "/images/ayd_treate2.jpg", text: "Shirodhara" },
    { image: "/images/ayd_treate3.jpg", text: "Kashayadhara" },
    { image: "/images/ayd_treate4.jpg", text: "Greeva Basti" },
    { image: "/images/ayd_treate5.jpg", text: "Janu Basti" },
    { image: "/images/ayd_treate6.jpg", text: "Kati Basti" },
    { image: "/images/ayd_treate7.jpg", text: "Spine Basti" },
    { image: "/images/ayd_treate8.jpg", text: "Kizhi" },
  ];
  return (
    <>
      <h2 className="text-[28px] md:text-[34px] text-[#525252] font-semibold">
        Ayurvedic Treatments
      </h2>
      <p className="text-[14px] md:text-[19px] text-[#7c7777] font-semibold">
        List of Ayurvedic Treatments
      </p>
      <div className="w-[80%] md:w-[66%] my-[3%] md:mx-[20%] mx-[10%] items-center justify-center">
      <AyurvedaTreatmentImageSlider items={sliderItems} />
      </div>
    </>
  );
};
*/}

const OpdSection = () => {
  const sliderItems: SliderItem[] = [
    { image: "/images/images.jpeg", text: "Kaumarbhritya", link: "https://naiminathayurveda.org/hospital/opd?id=1" },
    { image: "/images/opd2.jpg", text: "Kayachikitsa", link: "https://naiminathayurveda.org/hospital/opd?id=0" },
    { image: "/images/opd3.jpg", text: "Panchkarma", link: "https://naiminathayurveda.org/hospital/opd?id=2" },
    { image: "/images/opd4.jpg", text: "Prasuti & Stri Roga", link: "https://naiminathayurveda.org/hospital/opd?id=3" },
    { image: "/images/opd5.jpg", text: "Shalakya Tantra", link: "https://naiminathayurveda.org/hospital/opd?id=4" },
    { image: "/images/opd6.jpg", text: "Shalya Tantra", link: "https://naiminathayurveda.org/hospital/opd?id=5" },
    { image: "/images/opd7.jpg", text: "Swasthavritta", link: "https://naiminathayurveda.org/hospital/opd?id=6" },
    // { image: "/images/images.jpeg", text: "Kaumarbhritya" , link:"https://naiminathayurveda.org/hospital/opd?id=1"},
  ];
  return (
    <>
      <h2 className="text-[28px] md:text-[34px] text-[#525252] font-semibold">OPD</h2>
      <p className="text-[14px] md:text-[19px] text-[#7c7777] font-semibold">Explore Our Range of Outpatient Departments(OPDs)</p>
      <div className="w-[80%] md:w-[66%] my-[3%] md:mx-[20%] mx-[10%] items-center justify-center">
        <AyurvedaTreatmentImageSlider items={sliderItems} />
      </div>

    </>
  );
};

{/*
const WhatIsAyurveda = () => {
  return (
    <div className="w-[90%] md:w-[70%] my-[4%] mx-[10%] flex md:flex-row flex-col">
      <div className="w-[300px] h-[300px] md:w-[28vw] md:h-[46vh] bg-contain bg-no-repeat bg-[url('/images/ayurveda_img.png')]" />
      <div className="md:w-[44vw] h-full md:ms-[5%]">
        <label className=" text-[32px] font-semibold text-[#525252]">
          What is Ayurveda?
        </label>
        <p className="text-[#042d04] mt-[3%]">
          Ayurveda is an ancient knowledge cultivated by the sages of India. It
          has been developed from various treatises and manuscripts and has made
          its way to becoming one of the ancient most but modern health care
          techniques. ‘Ayur’ means life and ‘Veda’ means science. Thus, the term
          ‘Ayurveda’ means ‘science of life’. The theories and notions of
          Ayurveda have been practiced since the past 5000 years. It recommends
          methods for appropriate living and longevity. It includes instructions
          to maintain good health as well as dealing with illness through yoga,
          treatments, herbal medicines, correct diet and lifestyle changes.
        </p>
        <p className="text-[#042d04] mt-[3.5%]">
          Ayurveda prescribes many treatments for various medical conditions
          such as rheumatism, respiratory problems, blood pressure, cholesterol,
          paralysis etc. This system of medicine is special in that it makes use
          of only natural ingredients and as a result are totally harmless and
          at the same time highly curative.
        </p>
      </div>
    </div>
  );
};
*/}
const PrivateBamsSection = () => {
  return (
    <div className="w-[90%] md:w-[70%] h-full mt-[2%] md:mx-[10%] mx-[5%] flex md:flex-row-reverse flex-col justify-center items-center md:items-start">
      <div className="w-[300px] h-[400px] md:w-[40vw] md:h-[35vw] bg-contain -mt-[4%] bg-no-repeat bg-[url('/images/private_bams_img.jpg')]" />
      <div className="md:w-[44vw] h-full md:mr-[10%]">
        <label className="text-2xl md:text-3xl text-[#525252] font-semibold">
          Naiminath Ayurveda: Leading Excellence in BAMS Education and Practice(India)
        </label>
        <p className="text-[#7c7777] mt-[3%]">
          Naiminath Ayurveda, situated in the historic city of Agra, Uttar Pradesh, stands out as one of the top ayurvedic colleges in Agra and among the private ayurvedic colleges in UP. Renowned for its unwavering commitment to quality education and state-of-the-art facilities, Naiminath Ayurveda has emerged as a leader in the field of Ayurvedic medicine. Its comprehensive curriculum seamlessly integrates traditional Ayurvedic practices with modern medical advancements, ensuring graduates are well-equipped for the professional world. What sets Naiminath Ayurveda apart is its emphasis on practical training and experiential learning. With access to well-equipped laboratories and guidance from experienced faculty members, students develop essential skills and gain hands-on experience, preparing them with confidence and expertise. The college&apos;s excellent faculty further enriches the learning experience, providing students with invaluable mentorship and expertise. Additionally, Naiminath Ayurveda stands as one of the private BAMS colleges in UP, offering competitive private BAMS college fees in UP. The college also offers unique opportunities for internships at the attached hospital, allowing students to further enhance their practical knowledge under the mentorship of seasoned practitioners. This holistic approach to education distinguishes Naiminath Ayurveda as a premier institution in the field of Ayurvedic medicine.        </p>
        {/*         <p className="text-[#7c7777] mt-[3.5%]">
          What sets Naiminath Ayurveda apart from other institutions is its
          emphasis on practical training and experiential learning. Students
          have access to well-equipped laboratories where they can develop their
          skills and gain hands-on experience under the guidance of experienced
          faculty members. This approach ensures that graduates are prepared to
          enter the professional world with confidence and expertise.
        </p> */}
      </div>
    </div>
  );
};

// const NaiminathAyurvedaSection = () => {
//   return (
//     <div className="w-[90%] md:w-[70%] h-full mt-[3%] md:mx-[10%] mx-[5%]  flex md:flex-row-reverse flex-col ">

//       <div className="md:w-[44vw] h-full mr-[1%]">
//         <label className="text-2xl md:text-3xl text-[#525252] font-semibold">
//           Naiminath Ayurveda : Inside Agra&apos;s Ayurvedic Medical College
//         </label>
//         <p className="text-[#7c7777] mt-[3%]">
//           Located in the historical city of Agra, Naiminath Ayurveda is a hidden
//           gem that stands out as the top ayurvedic college in Agra. This
//           prestigious ayurvedic medical college offers a unique blend of
//           traditional practices and modern advancements, making it one of the
//           most sought-after institutions for aspiring ayurvedic practitioners.
//           Stepping foot inside its hallowed halls feels like entering a
//           sanctuary devoted to ancient healing wisdom.
//         </p>
//         <p className="text-[#7c7777] mt-[3.5%]">
//           What sets Naiminath apart from other private ayurvedic colleges in UP
//           is its emphasis on practical experience alongside theoretical
//           knowledge. Students here have the unique opportunity to engage in
//           hands-on learning through internships at the attached hospital. Under
//           the expert guidance of seasoned practitioners, they gain invaluable
//           insight into diagnosing ailments, prescribing treatments, and
//           observing patients’ progress firsthand. Depending upon the type of
//           colleges, there are different fees structures for private BAMS
//           colleges fees in UP.
//         </p>
//       </div>
//       <div className=" w-[300px] h-[220px] md:w-[48vw] md:h-[30vw]  mt-[2%] bg-contain bg-no-repeat bg-[url('/images/namida_ayurveda.png')]" />
//     </div>
//   );
// };

const AboutUsSection = () => {
  return (
    <div className="w-full h-fit bg-blue-300 relative mt-0">
      <Image
        src="/images/about_home_bg.jpg"
        className="w-full h-[85vh] object-cover"
        alt="about image"
        width={1600}
        height={800}
      />
      <div className="w-full-max flex flex-col absolute md:top-[12%] top-[5%] text-justify md:mx-0 mx-[5%] md:start-[45%] md:right-[10%]">
        <label className="md:text-3xl text-2xl font-semibold text-[#525252]">
          About Us
        </label>
        <p className="text-[#381a04] mt-[5%] text-[14px] md:text-[16px]">
          Naiminath Ayurvedic College, Hospital and Research Centre is a pioneer
          in the field of Ayurvedic treatment in the world. The Hospital offers
          treatment for every ailment and is extremely affordable. The Hospital
          is successfully running Out patient departments in Kayachikitsa,
          Kaumarbhritya, Panchkarma, Prasuti & Stri Roga, Shalakya tantra,
          Shalya tantra, Swasthavritta, Dental and Physiotherapy. The Hospital
          prides itself in providing a well-equipped, hygienically maintained
          panchkarma therapy rooms to suit the need and affordability of one and
          all.<br />
        </p>
        <p className="text-[#381a04] mt-[3%] text-[14px]  md:text-[16px]">
          To provide world class education and treatment, this 100 bedded state
          of art Ayurvedic Hospital is functional since 2016 where more than 200
          patients visit the Outdoor Department every day and around 40 patients
          are present in the Indoor Department.
        </p>

        <Link
          className="mt-[6%] w-fit h-fit px-[26px] pt-[5px] pb-[10px] text-[16px] text-white rounded-[20px] bg-[#e63280]
          hover:underline"
          href="/about"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <div className="gap-6 flex flex-col">
      <div>

        <h1 className="text-center font-semibold text-[28px] md:text-[34px]  text-[#525252]"> Testimonial&apos;s</h1>
        <p className="text-center text-lg my-[3px]">What People Say About US</p>
      </div>

      <div className="flex justify-between gap-2 flex-col sm:flex-row">

        <iframe src="https://www.youtube.com/embed/VzHCtwGn6-0?si=kvYJNU7pJyh0NKX4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="sm:w-[400px] lg:w-[560px] h-[315px]"></iframe>


        <iframe src="https://www.youtube.com/embed/1KE89Nvwfko?si=d3bNxq-qkAoHFXRM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="sm:w-[400px] lg:w-[560px] h-[315px]"></iframe>

      </div>
    </div>
  );
};

const AyurvedaTreatmentImageSlider = ({ items }: { items: SliderItem[] }) => {
  const customSize: SizeProp = "xl";

  const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className="slick-arrow w-fit h-fit absolute z-10 top-[30%] md:top-[40%] left-[5%]"
        onClick={onClick}
      >
        <FontAwesomeIcon
          size={customSize}
          icon={faChevronLeft}
          color="rgba(238,238,238,.9)"
        />
      </div>
    );
  };


  const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className="slick-arrow w-fit h-fit absolute z-10 top-[30%] md:top-[40%] right-[5%]"
        onClick={onClick}
      >
        <FontAwesomeIcon
          size={customSize}
          icon={faChevronRight}
          color="rgba(238,238,238,.9)"
        />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    vertical: false,
    useTransform: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings} className="text-[#7c7777] relative ">
      {items.map((item, index) => (
        <a key={index} href={item.link} className="slide-link">
          <div key={index} className=" p-[8px] text-center slide-content relative">
            <div
              className=" h-[12vh] w-[18vw] md:h-[235px] md:w-[235px] bg-cover bg-no-repeat rounded-[10px]"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            {/* <p className="[10px] text-center slide-content flex flex-col items-center"> */}

            <p className="text-[11px] sm:text-[11px] md:text-[18px] mt-2">
              {/*                         <p className="absolute bottom-0 left-0 right-0 text-[11px] md:text-[18px] bg-white bg-opacity-75"> */}

              {item.text}
            </p>
          </div>
        </a>
      ))}
    </Slider>

  );
};
export default HomePage;
