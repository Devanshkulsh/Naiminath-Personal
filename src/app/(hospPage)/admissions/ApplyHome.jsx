import React, { useEffect, useState } from "react";
import "./applyHome.css";
// import ShowModal from "./modal/ShowModal";

const counters = [
  { num: "576 K+", val: "Patients Treated" },
  { num: "100+", val: "Treatment" },
  { num: "3+", val: "Best College Awards" },
];

const ApplyHome = () => {
  // const [showModal, setshowModal] = useState(false);
  // const closeModal = () => setshowModal(false);

  // if (showModal) {
  //   document.body.style.overflow = "hidden";
  // } else {
  //   document.body.style.overflow = "auto";
  // }

  const [visitCount, setVisitCount] = useState(20000);
  const generateUniqueId = () => Math.random().toString(36);

  useEffect(() => {
    // const uniqueId = localStorage.getItem('uniqueId');
    // if (!uniqueId) {
    //   const newUniqueId = generateUniqueId();
    // localStorage.setItem('uniqueId', newUniqueId);
    const currentCount = localStorage.getItem("visitCount") || visitCount;
    const newCount = parseInt(currentCount) + 1;
    localStorage.setItem("visitCount", newCount);
    setVisitCount(newCount);
    // } else {
    //   const currentCount = localStorage.getItem('visitCount');
    //   setVisitCount(currentCount);
    // }
  }, []);

  return (
    <div className="applyHome">
      <div className="apply-box">
        <div className="apply-sec">
          <h3 className="why-heading roboto-serif-heading">
            Apply for Admissions
          </h3>
          <hr className="hr" />
          <p className="applyp">
            At Naiminath Ayurvedic Medical College we don’t expect intelligence
            to come in any particular shape or form. We’re looking for future
            students who are inquisitive, passionate, original and determined to
            grow.
          </p>
          <a href="https://naiminath-ayurveda.vercel.app/">
            <button className="btns hero-btn rest-btns">Apply Now</button>
          </a>
        </div>
      </div>
      <div className="counter p-[100px_0]">
        <div className="counts">
          {counters.map((item, index) => (
            <div className="count" key={index}>
              <div className="count-num">{item.num}</div>
              <div className="count-val">{item.val}</div>
            </div>
          ))}
          <div className="count">
            <div className="count-num">{visitCount} +</div>
            <div className="count-val">Total Website Visit&apos;s</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyHome;
