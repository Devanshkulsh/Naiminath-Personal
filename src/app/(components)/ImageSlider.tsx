"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }: any) => (
    <span {...props}>{children}</span>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,
    fade: true,
    cssEase: "ease-in-out",
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    nextArrow: (
      <SlickButtonFix>
        <div className="next-slick-arrow">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </SlickButtonFix>
    ),
    prevArrow: (
      <SlickButtonFix>
        <div className="prev-slick-arrow">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
      </SlickButtonFix>
    ),
  };

  const slides = [
    {
      image: "/images/gallery/nabh3.png",
      mobileImage: "/images/gallery/nabh-phone.png",
      title: "",
      subtitle: "",
      cta: ""
    },
    {
      image: "/images/gallery/gallery1-min.jpg",
      title: "Premier Ayurvedic College",
      subtitle: "Welcome to our esteemed institution dedicated to preserving and advancing the ancient science of Ayurveda. Our college provides comprehensive education in traditional medicine, combining classical texts with modern research methodologies to train the next generation of Ayurvedic practitioners.",
      cta: "Explore Our Programs"
    },
    {
      image: "/images/gallery/gallery26-min.jpg",
      title: "Campus Herbal Garden",
      subtitle: "Our extensive medicinal plant garden houses over 500 species of therapeutic herbs and plants. This living laboratory serves as a hands-on learning resource for students, enabling them to study, identify, and understand the properties of medicinal plants used in Ayurvedic treatments.",
      cta: "Visit Our Garden"
    },
    {
      image: "/images/gallery/gallery25-min.jpg",
      title: "Cultural & Extracurricular Activities",
      subtitle: "Education extends beyond academics at our institution. We encourage students to participate in traditional dance, music, and cultural programs that celebrate our rich heritage. These activities foster creativity, teamwork, and help preserve our cultural traditions.",
      cta: "Join Our Programs"
    },
    {
      image: "/images/gallery/gallery27-min.jpg",
      title: "Interactive Learning Environment",
      subtitle: "Our modern classrooms provide an ideal setting for comprehensive Ayurvedic education. Students engage in interactive sessions, practical demonstrations, and collaborative learning experiences under the guidance of experienced faculty members and renowned Ayurvedic scholars.",
      cta: "Admission Enquiry"
    },
    {
      image: "/images/gallery/gallery28-min.jpg",
      title: "Holistic Student Development",
      subtitle: "We believe in nurturing well-rounded individuals through diverse extracurricular activities including traditional arts, sports, and cultural events. Our students develop not only academic excellence but also leadership skills, creativity, and a deep appreciation for Indian traditions.",
      cta: "Student Life"
    }
  ];

  return (
    <div className="relative h-[85vh] overflow-hidden bg-gray-900">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[85vh] w-full">
            {/* Image */}
            <div className="absolute inset-0">
              <picture>
                {"mobileImage" in slide && slide.mobileImage && (
                  <source media="(max-width: 767px)" srcSet={slide.mobileImage} />
                )}
                <img
                  className="w-full h-full object-cover"
                  src={slide.image}
                  alt={slide.title}
                />
              </picture>
              {index !== 0 && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
                </>
              )}
            </div>
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div className="max-w-5xl px-6">
                {slide.title && (
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight roboto-serif-heading">
                    {slide.title}
                  </h1>
                )}
                {slide.subtitle && (
                  <p className="text-base md:text-lg lg:text-xl text-white/95 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
                    {slide.subtitle}
                  </p>
                )}
                {slide.cta && (
                  <button 
                    className="bg-red-600 hover:bg-black text-white px-10 py-4 font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    style={{ backgroundColor: '#de0000' }}
                    onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#0d1317'}
                    onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#de0000'}
                  >
                    {slide.cta}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <style jsx global>{`
        .slick-dots {
          bottom: 30px;
        }
        
        .slick-dots li button:before {
          color: white;
          font-size: 12px;
          opacity: 0.6;
        }
        
        .slick-dots li.slick-active button:before {
          opacity: 1;
          color: #de0000;
        }
        
        .next-slick-arrow, .prev-slick-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 44px;
          height: 44px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .next-slick-arrow:hover, .prev-slick-arrow:hover {
          background: rgba(222,0,0,0.8);
        }
        
        .next-slick-arrow {
          right: 20px;
        }
        
        .prev-slick-arrow {
          left: 20px;
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
