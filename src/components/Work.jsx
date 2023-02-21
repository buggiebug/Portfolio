import React from "react";

function Work() {
  return (
    <>
      <div className="pl-5 pb-5">
        <div className="mt-5">
          <h1 className="uppercase text-xl font-extrabold text-gray-700 tracking-wider">
            Internships
            <i className="ml-3 fa-brands fa-uncharted text-blue-400"></i>
          </h1>
          <div className="mt-5 text-gray-700 scale-90">
            <div className="grid place-items-center">
              <ul className="list-none flex justify-between">
                <div className="">
                  <li className="mb-5">
                    <h1 className="mb-1 tracking-wide font-serif font-semibold">
                      Full Stack Developer
                    </h1>
                    <div className="">
                      <h1 className="font-medium">
                        Dodev Technology Pvt. Ltd.
                      </h1>
                      <p>
                        <span className="mr-3">07/2022</span>
                        <span className="ml-3">09/2022</span>
                      </p>
                    </div>
                  </li>
                  <li className="mb-5">
                    <h1 className="mb-1 tracking-wide font-serif font-semibold">
                      Web Developer
                    </h1>
                    <div className="">
                      <h1 className="font-medium">The Sparks Foundation</h1>
                      <p>
                        <span className="mr-3">09/2021</span>
                        <span className="ml-3">10/2021</span>
                      </p>
                    </div>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="uppercase text-xl font-extrabold text-gray-700 tracking-wider">
            Projects
            <i className="ml-3 fa-solid fa-diagram-project text-yellow-400"></i>
          </h1>
          <div className="mt-1 text-gray-600 scale-90">
            <div className="grid place-items-center">
              <ul className="list-none">

                {/* //!  1st Project  */}
                <div className="mx-1 mb-10">
                  <li className="mb-1">
                    <h1 className="mb-1 text-xl tracking-wide font-serif font-semibold">
                      Voice Notes WebApp
                    </h1>
                    <div className="mt-1">
                      <ul className="list-disc ml-7">
                        <li>
                          The objective of the project is that you can record your notes in the form of voice or upload any music, Which can be accessed only by you.
                        </li>
                        <li>
                          You can play it, download it, add to your favorite and delete it according to your preference.
                        </li>
                        <li>Technology used: <span className="font-medium">MERN Stack</span></li>
                        <li className="font-medium text-gray-500">
                          Website link :{" "}
                          <a
                            className="text-blue-400 underline"
                            href="https://shortmusic.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Click me
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </div>

                {/* //!  2nd Project  */}
                <div className="mx-1 mb-10">
                  <li className="mb-1">
                    <h1 className="mb-1 text-xl tracking-wide font-serif font-semibold">
                      Test Taker WebApp
                    </h1>
                    <div className="mt-1">
                      <ul className="list-disc ml-7">
                        <li>
                          The objective of the project is to create light weight
                          test webapp where students can practice for their
                          competitive exams.
                        </li>
                        <li>
                          Admin panel: Create new test for different subjects &
                          manage users.
                        </li>
                        <li>
                          Student panel: Students can practice on the website by
                          selecting their subjects or interesting topics.{" "}
                        </li>
                        <li>Technology used: <span className="font-medium">MERN Stack</span></li>
                        <li className="font-medium text-gray-500">
                          Website link :{" "}
                          <a
                            className="text-blue-400 underline"
                            href="https://testtaker.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Click me
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </div>

                {/* //!  3rd Project  */}
                <div className="mx-1 mt-5">
                  <li className="mb-1">
                    <h1 className="mb-1 text-xl tracking-wide font-serif font-semibold">
                      News WebApp
                    </h1>
                    <div className="mt-1">
                      <ul className="list-disc ml-7">
                        <li>
                          The app is providing news using an external news API
                          to fetch the news data.
                        </li>
                        <li>Technology used: <span className="font-medium">React Js</span></li>
                        <li className="font-medium text-gray-500">
                          Source Code :{" "}
                          <a
                            className="text-blue-400 underline"
                            href="https://github.com/buggiebug/News-WebApp"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Click me
                          </a>
                        </li>
                      </ul>
                    </div>
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

export default Work;
