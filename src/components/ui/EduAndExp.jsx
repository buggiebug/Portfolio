import React, { useEffect, useMemo, useRef, useState } from "react";
import Resume from "../docs/Shubham_Resume.pdf";
import { Link } from "react-router-dom";
import skillsData from "../utils/skills";


const EduAndExp = ({ experience }) => {

  const skills = useMemo(() => {
    return skillsData;
  }, []);

  const readableKeys = (str) => {
    if (str === "ciCd") return "CI/CD"
    return str.replace(/([a-z])([A-Z])/g, '$1 $2')  // Add space between camelCase words
      .replace(/([a-zA-Z])([0-9])/g, '$1 $2')  // Add space before numbers
      .replace(/^./, str => str.toUpperCase())  // Capitalize the first letter
  }

  const [widthState, setWidthState] = useState(0);
  useEffect(() => {
    const handleWidth = () => {
      setWidthState(window.innerWidth);
    };
    handleWidth();
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, [widthState]);


  // Automatic animate the skills when the screen is visible to the user using using Web IntersectionObserver...
  const skillRefs = useRef([]);
  const [visibleSkills, setVisibleSkills] = useState({});
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const skillId = entry.target.getAttribute("data-id");
          if (entry.isIntersecting) {
            setVisibleSkills((prevVisibleSkills) => ({
              ...prevVisibleSkills,
              [skillId]: true,
            }));
          } else {
            setVisibleSkills((prevVisibleSkills) => ({
              ...prevVisibleSkills,
              [skillId]: false,
            }));
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentSkillRefs = skillRefs.current;
    Object.values(currentSkillRefs).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      Object.values(currentSkillRefs).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [skills]);


  // Download the resume...
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Shubham_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      window.open(Resume);
    }, 1000);
  };


  return (
    <>
      <article className="resume" data-page="experience">
        <header
          className={`flex items-start ${widthState <= 1023 ? "justify-between" : ""
            }`}>
          <h2 className="h2 article-title">Experience</h2>
          <button
            onClick={downloadResume}
            className={`h2 relative top-2 focus:text-yellow-900 ${widthState > 1023 && "left-[180px]"
              }`}
            title="Shubham's resume">
            <ion-icon name="cloud-download-outline"></ion-icon>
          </button>
        </header>

        {/* Work... */}
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="git-network-outline"></ion-icon>
            </div>
            <h3 className="h3">Work</h3>
          </div>

          <ol className="timeline-list">
            {experience?.map((ele, idx) => {
              return (
                <li className="timeline-item cursor-pointer" key={idx + 1} title={ele.diff}>
                  <h4 className="h4 timeline-item-title">{ele.position}</h4>

                  <span>{ele.exp}</span>

                  <Link
                    to={ele.link}
                    target="_blank"
                    className="timeline-text w-fit hover:underline">
                    {ele.company}
                  </Link>
                </li>)
            })}

            {/* <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Technical Consultant</h4>

              <span>April, 2023 — Oct, 2023</span>

              <Link
                to="https://acxiomconsulting.com"
                target="_blank"
                className="timeline-text w-fit hover:underline">
                Acxiom Consulting Pvt. Ltd.
              </Link>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Web Developer (Intern)</h4>

              <span>Aug, 2022 — Oct, 2022</span>

              <Link
                to="https://www.dodev.in"
                target="_blank"
                className="timeline-text w-fit hover:underline">
                DoDev Technology Pvt. Ltd.
              </Link>
            </li> */}
          </ol>
        </section>

        {/* Education... */}
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>

            <h3 className="h3">Education</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">B.Tech (CSE)</h4>
              <span>2023</span>
              <p className="timeline-text">IIMT College of Engineering</p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Intermediate</h4>
              <span>U.P Board - 2018</span>
              <p className="timeline-text">M.D.I.C</p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">High School</h4>
              <span>CBSE Board- 2015</span>
              <p className="timeline-text">J.P.S</p>
            </li>
          </ol>
        </section>

        {/* Skills */}
        <section className="skill">
          <h3 className="h3 skills-title">My skills</h3>

          {/* <ul className="skills-list content-card">
            {skills.map((skill) => {
                return <li key={skill.id} className="skills-item">
                    <div className="title-wrapper">
                        <h5 className="h5">{skill.name}</h5>
                        <data value={skill.value}>{skill.value}%</data>
                    </div>

                    <div className="skill-progress-bg">
                        <div
                            className="skill-progress-fill"
                            style={{ width: `${skill.value}%` }}></div>
                    </div >
                </li >
            })}
          </ul > */}


          {Object.keys(skills).map((key, idx) => {
            return (
              <details key={key} className="my-5" open>
                <summary className="mt-2 cursor-pointer flex items-center gap-5">
                  <span>{skills[key]?.icon}</span>
                  <span>{readableKeys(key)}</span>
                </summary>
                <ul className="skills-list content-card mt-5">
                  {skills[key]?.data?.map((skill, index) => {
                    const uniqueId = `${key}-${index}`;
                    return (
                      <li
                        key={uniqueId}
                        className="skills-item"
                        ref={(el) => (skillRefs.current[uniqueId] = el)}
                        data-id={uniqueId}>
                        <div className="title-wrapper flex justify-between">
                          <div className="flex items-center gap-3">
                            <span>{skill.img}</span>
                            <h5 className="h5">{skill.name}</h5>
                          </div>
                          <data value={skill.value}>{skill.value}%</data>
                        </div>

                        <div className="skill-progress-bg">
                          <div
                            className="skill-progress-fill"
                            style={{
                              width: visibleSkills[uniqueId] ? `${skill.value}%` : "0%",
                              transition: "width 400ms ease-in-out",
                            }}></div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </details>
            )
          })}
        </section>
      </article>
    </>
  );
};

export default EduAndExp;
