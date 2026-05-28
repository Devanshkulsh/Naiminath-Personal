import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
const Footer = () => {
  const customSize: SizeProp = "lg";
  return (
    <div className="bg-[#080808] py-8 md:py-[2%] grow bottom-0 w-full">
      <div className="max-w-screen text-gray-800 flex-wrap justify-center flex font-serif">
        <div className="p-5 md:basis-[25%] md:ps-[10%] w-full">
          <div className=" text-lg md:text-xl  text-white font-extrabold">Treatments</div>
          <div className="text-[#748182] my-6 md:my-8 text-[15px] md:flex md:flex-col gap-2 grid grid-cols-2">
            <a href="/hospital/opd?id=7">Abhyangam</a>

            <a href="/hospital/opd?id=8">Shirodhara</a>

            <a href="/hospital/opd?id=9">Kashayadhara</a>

            <a href="/hospital/opd?id=10">Greeva Basti</a>

            <a href="/hospital/opd?id=11">Janu Basti</a>

            <a href="/hospital/opd?id=12">Kati Basti</a>

            <a href="/hospital/opd?id=13">Spine Basti</a>

            <a href="/hospital/opd?id=14">Kizhi</a>

            <a href="/hospital/opd?id=15">Mukha Lepam</a>

            <a href="/hospital/opd?id=16">Netra Tarpanam</a>

            <a href="/hospital/opd?id=2">Panchakarma</a>

            {/* <a href="/private-bams-colleges">Private BAMS Colleges</a>

            <a href="/bams-fees">BAMS Fees</a> */}
          </div>
        </div>

        {/* About section */}
        <div className="p-5 md:basis-[25%] w-full">
          <div className="my-4 md:my-6 flex items-center justify-start md:justify-start gap-3 md:gap-4">
            <div className="h-[40px] w-[140px] md:h-[48px] md:w-[170px] bg-[url('/images/logo.png')] bg-contain bg-no-repeat bg-center"></div>
            <div className="h-[46px] w-[84px] md:h-[52px] md:w-[96px] bg-[url('/images/NABH-Logo-bg.png')] bg-contain bg-no-repeat bg-center"></div>
          </div>
          <div className="text-lg md:text-xl  text-white font-extrabold">
            About Naiminath Ayurveda
          </div>
          <p className="text-[#748182] my-6 md:my-8 text-[15px] font-serif leading-7 md:leading-8 tracking-wide">
            To provide world class education and treatment, this 100 bedded
            state of art Ayurvedic Hospital is functional since 2016 where more
            than 200 patients visit the Outdoor Department every day and around
            40 patients are present in the Indoor Department.
          </p>

          {/* social media links */}
          <div className=" flex gap-6 md:gap-8 justify-start md:justify-center">
            <a className="text-white text-xl hover:text-[#50b9ce]" href="https://www.facebook.com/naiminathagra/">
              <FaFacebook />
            </a>
            <a className="text-white text-xl hover:text-[#50b9ce]" href="https://www.instagram.com/naiminath/?hl=en">
              <FaInstagram />
            </a>
            <a className="text-white text-xl hover:text-[#50b9ce]" href="https://www.youtube.com/channel/UCDzQIdrr0QpFg5XK0UbKUIQ">
              <FaYoutube />
            </a>
            <a className="text-white text-xl hover:text-[#50b9ce]" href="https://twitter.com/nhmcagra?lang=en">
              <FaTwitter />
            </a>
          </div>
          {/* social link ended  */}
        </div>

        {/* address  */}
        <div className="p-5 md:basis-[25%] w-full">
          <div className=" text-white font-extrabold flex flex-col">
            <div className="text-lg md:text-xl">Naiminath Ayurveda</div>
            <div className="mt-6 md:mt-8 text-[14px]">ADDRESS</div>
            <div className="text-[15px] font-medium mt-2 font-serif leading-7 md:leading-8 tracking-wide">
              N.H. 19, Nawalpur, Kuberpur, Behind Maruti TrueValue Showroom,
              Etmadpur, Agra – 283202, Uttar Pradesh, India.
            </div>
            <Link
              href="/bams"
              className="text-[#50b9ce] text-[15px] font-sans font-semibold mt-8 md:mt-10 hover:text-white"
            >
              <span className="text-xl">&rarr;</span> UP BAMS Counselling
            </Link>
            <Link
              href="/doc/anti_rag.pdf"
              className="text-[#50b9ce] text-[15px] font-sans font-semibold mt-3  hover:text-white"
            >
              <span className="text-xl">&rarr;</span> Anti Ragging Committee
            </Link>
            <Link
              href="https://forms.eduqfix.com/namcharcaof/home" rel="noopener noreferrer" target="_blank"
              className="text-[#50b9ce] text-[13px] md:text-[15px] font-sans font-bold mt-3  hover:text-white"
            >
              <span className="text-xl">&rarr;</span> FEES PAYMENT: CLICK HERE TO PAY
              FEES
            </Link>
          </div>
        </div>

        {/* contact */}
        <div className="p-5 md:basis-[25%] w-full">
          <div className=" text-white font-extrabold flex flex-col">
            <div className="text-lg md:text-xl">Get In Touch</div>
            <div className="mt-6 md:mt-8 text-[14px]">EMAIL</div>
            <div className="text-[14px] font-serif font-medium text-start mt-2">
              <div className="break-all">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size={customSize}
                  className="pr-3"
                />
                <a href={'mailto:recipient@example.com?subject=Subject%20Text&body=Body%20Text'}>info@naiminathayurveda.org</a>
              </div>

              <div className="mt-2 break-all">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size={customSize}
                  className="pr-3"
                />
                <a href={'mailto:recipient@example.com?subject=Subject%20Text&body=Body%20Text'}> namcagra@gmail.com</a>
              </div>
            </div>
            <div className="mt-6 md:mt-8 text-[14px]">MOBILE</div>
            <div className="text-[14px] font-serif font-medium text-start mt-2 text-[#50b9ce]">
              <div className=" cursor-pointer hover:text-white">
                <FontAwesomeIcon
                  icon={faPhone}
                  size={customSize}
                  className="pr-2"
                />
                <a href={`tel:${8193896320}`} >+91-8193896320</a>
              </div>

              <div className="mt-2  cursor-pointer hover:text-white">
                <FontAwesomeIcon
                  icon={faPhone}
                  size={customSize}
                  className="pr-2"
                />
                <a href={`tel:${9528024473}`} >+91-9528024473</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
