import React from "react";
import "./aboutHome.css";
import Image from "next/image";

const AboutHome = () => {
    return (
        <section className="about-section relative">
            <div className="background-img relative">
                <div className="about-container p-24 w-full flex flex-col items-center justify-center sm:p-10 sm:pt-5">
                    <div className="about-wrapper mx-auto flex flex-wrap items-start justify-center w-11/12 gap-10 sm:flex-col sm:gap-5">
                        <hr className="hr flex-1" />
                        <div className="about-content flex-2 flex flex-col items-start justify-center gap-10">
                            <h3 className="about-heading text-5xl relative sm:text-3xl after:block after:w-full after:h-2.5 after:bg-yellow-400 after:mt-[-10px] sm:after:h-1 sm:after:mt-[-20px]">
                                Welcome to Naiminath
                            </h3>
                            <div className="flex flex-row md:flex-row sm:flex-row align-middle items-center flex-wrap">
                                {/** Left side content div start here */}
                                <div className="flex flex-col lg:w-[50%] md:w-[50%] sm:w-[50%] mt-2 internal-blend-container">
                                    <p className="about-p text-lg font-normal mb-[20px]">
                                        Naiminath Ayurveda holds a commitment to providing quality
                                        education and top-notch facilities in the field of ayurveda
                                        medicine. We are a 100 bedded state of art Ayurvedic
                                        Hospital which is functional since 2016, where more than 200
                                        patients visit the Outpatient Department every day and
                                        around 60 patients are present in the Inpatient Department.{" "}
                                        <br />
                                        <br />
                                        The college offers a comprehensive curriculum that not only
                                        covers traditional Ayurvedic practices but also integrates
                                        modern medical advancements with its emphasis on practical
                                        training and experiential learning. Students have access to
                                        well-equipped laboratories where they can develop their
                                        skills and gain hands-on experience under the guidance of
                                        experienced faculty members. This approach ensures that
                                        graduates are prepared to enter the professional world with
                                        confidence and expertise. The Hospital prides itself in
                                        providing a well-equipped, hygienically maintained
                                        panchkarma therapy rooms to suit the need and affordability
                                        of one and all.
                                    </p>
                                    <button className="btn btn-blue text-white rounded bg-red-600 px-4 py-2">
                                        Read More
                                    </button>
                                </div>
                                {/** Left side content div end here */}

                                {/** Right side image div start here */}
                                <div className="flex lg:w-[50%] md:w-[50%] sm:w-[50%] mt-2">
                                    <div className="about-img relative flex-3 self-center ml-8 sm:w-full sm:flex sm:flex-col sm:items-center">
                                        <img
                                            src="/images/clg1.jpg"
                                            alt=""
                                            className="img img1 border-10 border-white w-[700px] sm:w-full"
                                        />
                                        <img
                                            src="/adm/shirodhara.jpg"
                                            alt=""
                                            className="img img2 absolute bottom-[-70px] right-[40px] w-[300px] border-20 border-white sm:static sm:w-full sm:border-0"
                                        />
                                    </div>
                                </div>

                                {/** Right side image div end here */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHome;