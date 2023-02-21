import React from "react";

function Education() {
  return (
    <>
      <div className="pl-5">
        <div>
          <h1 className="pt-5 uppercase text-xl font-extrabold text-gray-700 tracking-wider">
            Education <i className="ml-3 fa-solid fa-graduation-cap text-orange-400"></i>
          </h1>
          <div className="mt-5 mx-10 text-gray-700">
            <div className="grid place-items-center">
              <ul className="list-disc">
                <li className="mb-5">
                  <h1 className="mb-1 tracking-wide font-serif font-semibold">
                    Graduation
                  </h1>
                  <div className="ml-5">
                    <h1 className="text-lg font-medium">B.Tech</h1>
                    <p className="">Computer Science & Engineering</p>
                    <p className="">IIMT College of Engineering</p>
                    <div className="">
                      <span>08/2019</span>
                      <span className="ml-5">Present</span>
                    </div>
                    <p className="text-gray-500">Score: <span className="ml-5">61.23%</span></p>
                  </div>
                </li>
                <li className="mb-5">
                  <h1 className="mb-1 tracking-wide font-serif font-semibold">
                    Intermediate - 12<sup>th</sup>
                  </h1>
                  <div className="ml-5">
                    <h1 className="">M.D.I.C Arta</h1>
                    <div className="">
                      <h1 className="">
                        U.P Board <span className="ml-5">2018</span>
                      </h1>
                    </div>
                    <p className="text-gray-500">Score: <span className="ml-5">50.6%</span></p>
                  </div>
                </li>
                <li className="mb-5">
                  <h1 className="mb-1 tracking-wide font-serif font-semibold">
                    High School - 10<sup>th</sup>
                  </h1>
                  <div className="ml-5">
                    <h1 className="">Jaideep Public School</h1>
                    <div className="">
                      <h1 className="">
                        CBSE Board <span className="ml-5">2015</span>
                      </h1>
                    </div>
                    <p className="text-gray-500">Score: <span className="ml-5">58.9%</span></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
