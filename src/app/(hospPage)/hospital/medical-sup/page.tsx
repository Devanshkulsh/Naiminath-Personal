'use client'
import { useGlobalContext } from "@/app/context/store";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const MedicalSup = () => {
  const { setImageSlide } = useGlobalContext();

  useEffect(() => {
    console.log('Page loaded');
    setImageSlide(false);
  }, [setImageSlide]);

  return (
    <>
      <head>
        <title>Medical Superintendent - Naiminath Ayurveda : Top BAMS College </title>
      </head>
      <div className="flex flex-col justify-center items-center font-serif">
        <div className=" text-3xl mt-10 text-gray-800 text-center font-sans font-bold">Medical Superintendent</div>
        <div className="md:w-[60vw] w-[90vw] flex flex-col bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl m-12">
          <details className="py-6 group" open={false}>
            <summary className="flex items-center justify-between cursor-pointer px-6">
              <h5 className="text-lg font-medium text-gray-900">Basic Details</h5>

              <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </summary>
            <div className="border-t border-gray-300 mt-6"></div>
            <div className="mt-4 leading-relaxed text-red-500 px-6">
              <div className=" font-serif">
                <p>
                  Name : <span className="font-normal text-gray-700">Prof. Dr. Sanjay Kumar Chheepa</span>
                </p>
                <p>
                  Department : <span className="font-normal text-gray-700">Kaumarbritya  </span>
                </p>
                <p>
                  D.O.B.: <span className="font-normal text-gray-700">30-04-1981</span>
                </p>
                <p>
                  Teacher Code: <span className="font-normal text-gray-700">AYKC01851</span>
                </p>
                <p>
                  Date of Joining: <span className="font-normal text-gray-700"> 09-08-2024</span>
                </p>
                <p>
                  Teaching Experience:{" "}
                  <span className="font-normal text-gray-700">11 Years 9 months</span>
                </p>
              </div>

              <div className="mt-4">
                <p className=" font-serif text-red-500">Current Address:</p>
                <span className="ml-4 text-gray-700">
                  House No. 3 Radha Vihar Bhood ke bagh, Kamla nagar, new Agra. UP 282005 
                </span>
              </div>

              {/* <div className="mt-4 font-bold">
                <p className="font-bold mb-5">Contact:</p>
                <p className="ml-4">
                  <span className="text-black font-normal">1.</span>{" "}
                  <span className=" text-red-500">Phone:</span>{" "}
                  <span className="text-gray-700">+919860569679</span>
                </p>
                <p className="ml-4">
                  <span className="text-black font-normal ">2.</span>{" "}
                  <span className=" text-red-500">Email:</span>{" "}
                  <span className="text-gray-700">drgbpatil@gmail.com</span>
                </p>
              </div> */}
            </div>
          </details>

          <details className="py-6 group" open={false}>
            <summary className="flex items-center justify-between cursor-pointer px-6">
              <h5 className="text-lg font-medium text-gray-900">
                Academic Qualification
              </h5>

              <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </summary>
            <div className="border-t border-gray-300 mt-6"></div>
            <div className="mt-4 px-6">
              <p className="font-bold mb-5">Educational Qualifications:</p>
              <p className="ml-4">
                <span className="text-black">1.</span>{" "}

                <span className="font-normal capitalize">
                  UG Qualification (University & Year): AWADESH PRATAP SINGH VISHWAVIDYALAYA, REWA 2008
                </span>
              </p>
              <p className="ml-4">
                <span className="text-black">2.</span>{" "}
                <span className="font-normal capitalize">
                  PG Qualification with Subject (University & Year): VIKRAM VISHWAVIDYALAYA, UJJAIN 2013
                </span>
              </p>
            </div>
          </details>
        </div>
        {/* <div className="w-[60vw] flex flex-col bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl m-12">
        <details className="py-6 group" open={false}>
          <summary className="flex items-center justify-between cursor-pointer px-6">
            <h5 className="text-lg font-medium text-gray-900">Basic Details</h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>
          <div className="border-t border-gray-300 mt-6"></div>
          <div className="mt-4 leading-relaxed text-gray-700 px-6">
            <div className="font-bold">
              <p>
                D.O.B.: <span className="font-normal">06.07.1966</span>
              </p>
              <p>
                Registration Number: <span className="font-normal">46702</span>
              </p>
              <p>
                Date of Joining: <span className="font-normal">21.04.2022</span>
              </p>
              <p>
                Teaching Experience:{" "}
                <span className="font-normal">13 years, Sharir Kriya</span>
              </p>
            </div>

            <div className="mt-4">
              <p className="font-bold">Current Address:</p>
              <p className="ml-4">
                1109, Basera Heights, Fatehabad Road, Kalal Kheria, Agra, Uttar
                Pradesh – 283202
              </p>
            </div>

            <div className="mt-4 font-bold">
              <p className="font-bold mb-5">Contact:</p>
              <p className="ml-4">
                <span className="text-black font-normal">1.</span>{" "}
                <span className=" text-red-500">Phone:</span>{" "}
                <span className="">+919528024473</span>
              </p>
              <p className="ml-4">
                <span className="text-black font-normal ">2.</span>{" "}
                <span className=" text-red-500">Email:</span>{" "}
                <span className="">hemantlata2100@gmail.com</span>
              </p>
            </div>
          </div>
        </details>

        <details className="py-6 group" open={false}>
          <summary className="flex items-center justify-between cursor-pointer px-6">
            <h5 className="text-lg font-medium text-gray-900">
              Academic Qualification
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>
          <div className="border-t border-gray-300 mt-6"></div>
          <div className="mt-4 px-6">
            <p className="font-bold mb-5">Educational Qualifications:</p>
            <p className="ml-4">
              <span className="text-black">1.</span>{" "}
              <span className="font-normal">M.D. Ayurveda – 1998</span>{" "}
              <span className="font-normal">
                Sharir Kriya Vigyan, Jiwaji University, Gwalior
              </span>
            </p>
            <p className="ml-4">
              <span className="text-black">2.</span>{" "}
              <span className="font-normal">B.A.M.S. – 1992</span>{" "}
              <span className="font-normal">Jiwaji University, Gwalior</span>
            </p>
          </div>
        </details>
      </div> */}
      </div>
    </>
  );
};

export default MedicalSup;
