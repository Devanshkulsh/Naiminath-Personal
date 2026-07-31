import React from "react";
import "./youtube.css";
import { FaPlay } from "react-icons/fa6";
import wall from "/public/adm/wall.jpg";
const Youtube = () => {
  return (
    <div
      className="yt-sec"
      style={{
        backgroundImage: `url(${wall.src})`, // Use event.img.src to access the src of the imported image
        // backgroundColor: "#3f3f3f8f",
      }}
    >
      <div className="yt-sec-wrapper">
        <div className="yt-sec-left">
          <h3 className="yt-head">
            We&apos;re Naiminath <br /> <strong>& We&apos;re Different</strong>
          </h3>
          <p className="yt-p">
            WE ARE MAKING LEARNING MORE RELEVANT AND TRANSFORMATIONAL.
          </p>
        </div>
        <div className="play-button-container">
          <div className="icon-container">
            <div className="yt-sec-right">
              <a href="https://www.youtube.com/@nhmcagra" target="_blank">
                <div className="border-grow">
                  <FaPlay className="play-icon" size={80} color="red" />
                  <div className="pulse"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
