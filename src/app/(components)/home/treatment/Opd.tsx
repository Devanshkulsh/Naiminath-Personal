import React from 'react'
import { LuMessageSquare, LuHeart } from "react-icons/lu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Opd = () => {
    const treatment = [
        // { image: "/images/images.jpeg", text: "Kaumarbhritya", link: "https://naiminathayurveda.org/hospital/opd?id=1" },
        { image: "/images/opd2.jpg", text: "Kayachikitsa", link: "https://naiminathayurveda.org/hospital/opd?id=0" },
        { image: "/images/opd3.jpg", text: "Panchkarma", link: "https://naiminathayurveda.org/hospital/opd?id=2" },
        { image: "/images/opd4.jpg", text: "Prasuti & Stri Roga", link: "https://naiminathayurveda.org/hospital/opd?id=3" },
        { image: "/images/opd5.jpg", text: "Shalakya Tantra", link: "https://naiminathayurveda.org/hospital/opd?id=4" },
        { image: "/images/opd6.jpg", text: "Shalya Tantra", link: "https://naiminathayurveda.org/hospital/opd?id=5" },
        { image: "/images/opd7.jpg", text: "Swasthavritta", link: "https://naiminathayurveda.org/hospital/opd?id=6" },
        { image: "/images/opd7.jpg", text: "Agad OPD", link: "https://naiminathayurveda.org/hospital/opd?id=6" },
    ]

    var settings = {
        dots: true,
        infinite: true,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
        ]
    };

    return (
        <div className='flex w-full flex-col justify-center mt-[0px] mb-[80px] md:mt-[-43px] md:mb-[50px]'>
            <div className="why-wrapper">
                <h3 className="why-heading lined-heading roboto-serif-heading">Our OPDs</h3>
                {/* <hr className="hr" /> */}
            </div>
            <div className="h-auto px-8 md:px-[40px] mt-16  m-auto  group-hover:bg-black max-w-[1366px] w-full justify-center items-center">

                <Slider {...settings}>
                    {
                        treatment.map((obj, i) => (
                            <a key={i} href={obj.link} className="slide-link">
                                <div key={i} className=" p-[8px] text-center slide-content relative">
                                    <div
                                        className=" h-[12vh] w-[18vw] md:h-[210px] md:w-[235px] bg-cover bg-no-repeat rounded-[10px]"
                                        style={{ backgroundImage: `url(${obj.image})` }}
                                    />
                                    {/* <p className="[10px] text-center slide-content flex flex-col items-center"> */}

                                    <p className="text-[11px] sm:text-[11px] md:text-[18px] mt-2">
                                        {/*                         <p className="absolute bottom-0 left-0 right-0 text-[11px] md:text-[18px] bg-white bg-opacity-75"> */}

                                        {obj.text}
                                    </p>
                                </div>
                            </a>
                        ))
                    }
                </Slider >
            </div>
        </div>
    )
}

export default Opd
