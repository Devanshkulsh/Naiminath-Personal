'use client'
import React, { useEffect, useState } from "react";
import "./applyHome.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
// import ShowModal from "./modal/ShowModal";

const counters = [
  { num: "576 K+", val: "Patients Treated" },
  { num: "100+", val: "Treatment" },
  { num: "3+", val: "Best College Awards" },
];

const ApplyHome = () => {

  const [visitCount, setVisitCount] = useState<number>(20000);
  const [showApplyModal, setShowApplyModal] = useState<boolean>(false);

  useEffect(() => {
    const currentCount = localStorage.getItem("visitCount") || "20000";
    const newCount = parseInt(currentCount) + 1;
    localStorage.setItem("visitCount", newCount.toString());
    setVisitCount(newCount);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowApplyModal(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
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
          <button
            type="button"
            className="btns hero-btn rest-btns"
            onClick={() => setShowApplyModal(true)}
          >
            Apply Now
          </button>
        </div>
      </div>
      <div
        className={`apply-modal-overlay${showApplyModal ? " is-open" : ""}`}
        onClick={() => setShowApplyModal(false)}
        role="presentation"
        aria-hidden={!showApplyModal}
      >
        <div
          className="apply-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="apply-modal-title"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="apply-modal-header">
            <h3 id="apply-modal-title">Apply for Admissions</h3>
            <button
              type="button"
              className="apply-modal-close"
              onClick={() => setShowApplyModal(false)}
              aria-label="Close apply form"
            >
              <IoMdCloseCircleOutline />
            </button>
          </div>
          <div id="formsID7375" className="apply-form-container" />
        </div>
      </div>
      <div className="counter p-[100px_0]">
        <div className="counts">
          {counters.map((item, index) => (
            <div key={index} className="count">
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
