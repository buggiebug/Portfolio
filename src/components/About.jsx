import React from "react";

function About() {
  return (
    <>
      <div className="mx-5">
        <div className="">
          <h1>
            Hello there{" "}
            <i className="text-lg ml-2 fa-solid fa-ghost text-yellow-500"></i>
          </h1>
          <p className="mt-5">
            I'm final year student of <span className="font-serif font-medium">IIMT College of Engineering</span> pursuing <span className="font-mono">B.Tech in CSE</span>.
          </p>
          <p className="mt-2">
            I'm a Logical and organized individual with a strong foundation in
            software engineering.{" "}
          </p>
          <p className="mt-2">
            Proficient in C++, JavaScript, and React Js. Seeking to raise coding
            KPIs by providing error-free codes.
          </p>
          <p className="mt-2">
            Ability to translate business requirements into innovative software
            solutions.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
