import React, { useState } from "react";

import myPicture from "./images/myPic.JPG";
import gmailPic from "./images/gmailpic.png";

import Education from "./Education";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Work from "./Work";
import About from "./About";

function Home() {
  const [navigateState, setNavigateState] = useState("About");

  const changeRoute = (e) => {
    setNavigateState(e);
    window.scroll(0,0);
  };

  return (
    <>
      <div className="bg-gray-900 pb-10 min-h-[105vh]">
        <div
          className="pb-2 sticky top-0 z-[2] bg-gray-900 text-white grid place-items-center"
        >
          <div className="grid place-items-center scale-75">
            <div className="h-[150px] w-[150px] overflow-hidden rounded-full">
              <img className="w-[100%]" src={myPicture} alt="pic" />
            </div>
            <h1 className="mt-3 text-4xl text-gray-100">Shubham Mishra</h1>
            <div className="mt-8 flex scale-125">
              <div className="mx-3">
                <a
                  href="tel:+91 9120226043"
                  className="mx-3 text-xl text-white hover:text-white"
                >
                  <i className="fa-solid fa-phone"></i>
                </a>
                <a
                  href="mailto:mishrashubh38@gmail.com"
                  className="mx-3 text-xl"
                >
                  <img
                    className="w-[28px] -mt-1 inline-block"
                    src={gmailPic}
                    alt="gmail"
                  />
                </a>
              </div>
              <div className="mx-3">
                <a
                  href="https://www.instagram.com/buggierex/"
                  rel="noreferrer"
                  target={"_blank"}
                  className="mx-3 text-xl text-red-500 hover:text-red-600"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://mobile.twitter.com/yehbuggie"
                  rel="noreferrer"
                  target={"_blank"}
                  className="mx-3 text-xl text-blue-500 hover:text-blue-600"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </div>
              <div className="mx-3">
                <a
                  href="https://github.com/buggiebug"
                  rel="noreferrer"
                  target={"_blank"}
                  className="mx-3 text-xl text-gray-50 hover:text-gray-400"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/shubham-mishra-782415192/"
                  rel="noreferrer"
                  target={"_blank"}
                  className="mx-3 text-xl text-blue-600 hover:text-blue-700"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <Navbar changeRoute={changeRoute} />
        </div>
        <div className="flex justify-center items-center">
          <div className="mx-5 md:w-[50vw] w-[100%] min-h-[58vh] bg-white rounded-md grid place-items-center">
            <div
              className={`${navigateState === "About" ? "block" : "hidden"}`}
            >
              <About />
            </div>
            <div
              className={`${
                navigateState === "Education" ? "block" : "hidden"
              }`}
            >
              <Education />
            </div>
            <div
              className={`${navigateState === "Skills" ? "block" : "hidden"}`}
            >
              <Skills />
            </div>
            <div className={`${navigateState === "Work" ? "block" : "hidden"}`}>
              <Work />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
