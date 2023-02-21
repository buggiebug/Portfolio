import React from "react";
import Tailwind from "./images/tailwind.png";
import MongoDb from "./images/mongodb.png";
import Cpp from "./images/cpp.png";

function Skills() {
  return (
    <>
      <div className="pl-5">
        <div>
          <h1 className="uppercase text-xl font-extrabold text-gray-700 tracking-wider">
            Technical Skills
            <i className="ml-3 fa-regular fa-lightbulb text-yellow-400"></i>
          </h1>
          <div className="mt-5 text-gray-700 scale-90">
            <div className="grid place-items-center">
              <ul className="list-none flex justify-between">
                <div className="">
                  <li className="mb-1">
                    <h1 className="mb-1 tracking-wide font-serif font-semibold">
                      Python{" "}
                      <i className="ml-2 fa-brands fa-python text-gray-700"></i>
                    </h1>
                  </li>
                  <li className="mb-1">
                    <h1 className="mb-1 tracking-wide font-serif font-semibold">
                      HTML{" "}
                      <i className="ml-2 fa-brands fa-html5 text-orange-600"></i>
                    </h1>
                  </li>
                  <li className="mb-1">
                    <h1 className="mb-1 tracking-wide font-serif font-semibold">
                      CSS{" "}
                      <i className="ml-2 fa-brands fa-css3 text-blue-400"></i>
                    </h1>
                  </li>
                  <li className="mb-1">
                    <h1 className="mb-1 tracking-wide font-serif font-semibold">
                      JavaScript{" "}
                      <i className="ml-2 fa-brands fa-square-js text-yellow-500"></i>
                    </h1>
                  </li>
                  <li className="mb-1">
                    <h1 className="mb-1 tracking-wide font-serif font-semibold">
                      Tailwind CSS{" "}
                      <img
                        className="-ml-3 w-[45px] inline-block"
                        src={Tailwind}
                        alt="tailwind"
                      />
                    </h1>
                  </li>
                </div>
                <div className="mx-5">
                  <li className="mb-1">
                    <h1 className="mb-1 tracking-wide font-serif font-semibold">
                      C++{" "}
                      <img
                        className="-ml-1 w-[40px] -mt-1 inline-block"
                        src={Cpp}
                        alt="cpp"
                      />
                    </h1>
                  </li>
                  <li className="mb-1">
                    <h1 className="mb-1 tracking-wide font-serif font-semibold">
                      React Js{" "}
                      <i className="ml-2 fa-brands fa-react text-blue-400"></i>
                    </h1>
                  </li>
                  <li className="mb-1">
                    <h1 className="mb-1 tracking-wide font-serif font-semibold">
                      Node Js{" "}
                      <i className="ml-2 fa-brands fa-node text-green-600"></i>
                    </h1>
                  </li>
                  <li className="mb-1">
                    <h1 className="mb-1 tracking-wide font-serif font-semibold">
                      Express Js{" "}
                      <i className="ml-2 fa-brands fa-node-js text-green-700"></i>
                    </h1>
                  </li>
                  <li className="mb-1">
                    <h1 className="mb-1 tracking-wide font-serif font-semibold">
                      MongoDB{" "}
                      <img
                        className="ml-1 w-[20px] inline-block"
                        src={MongoDb}
                        alt="tailwind"
                      />
                    </h1>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="uppercase text-xl font-extrabold text-gray-700 tracking-wider">
            Soft Skills
            <i className="ml-3 fa-regular fa-lightbulb text-blue-400"></i>
          </h1>
          <div className="mt-5 text-gray-600 scale-90">
            <div className="grid place-items-center">
              <ul className="list-none flex justify-between">
                <div className="mx-3">
                  <li className="mb-1">
                    <h1 className="mb-1 tracking-wide font-serif font-semibold">
                      Problem Solving
                    </h1>
                  </li>
                  <li className="mb-1">
                    <h1 className="mb-1 tracking-wide font-serif font-semibold">
                      Work Ethic
                    </h1>
                  </li>
                  <li className="mb-1">
                    <h1 className="mb-1 tracking-wide font-serif font-semibold">
                      Adaptability
                    </h1>
                  </li>
                </div>
                <div className="mx-3">
                  <li className="mb-1">
                    <h1 className="mb-1 tracking-wide font-serif font-semibold">
                      Team Work{" "}
                    </h1>
                  </li>
                  <li className="mb-1">
                    <h1 className="mb-1 tracking-wide font-serif font-semibold">
                      Flexibility
                    </h1>
                  </li>
                  <li className="mb-1">
                    <h1 className="mb-1 tracking-wide font-serif font-semibold">
                      Communication
                    </h1>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
