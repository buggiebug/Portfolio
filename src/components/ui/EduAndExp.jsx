import React, { useEffect, useRef, useState } from 'react'
import Resume from "../docs/Shubham_Resume.pdf";
import { Link } from 'react-router-dom';

const EduAndExp = ({ appRef }) => {

    const [widthState, setWidthState] = useState(0);
    const [scrollState, setScrollState] = useState(0);


    const skillRefs = useRef([]);
    const [visibleSkills, setVisibleSkills] = useState({});

    useEffect(() => {
        const handleWidth = () => {
            setWidthState(window.innerWidth);
        }
        handleWidth();
        window.addEventListener("resize", handleWidth);
        return () => { window.removeEventListener("resize", handleWidth); }
    }, [widthState]);


    // Here using app because the app page is bound with the ref and it is scrollable not the body so I targated the appRef & perform scroll action on it...
    useEffect(() => {
        const handleScroll = () => {
            if (appRef.current) {
                const scrollY = appRef.current.scrollTop;
                setScrollState(scrollY);
            }
        };
        const appElement = appRef.current;
        if (appElement) {
            appElement.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (appElement) {
                appElement.removeEventListener('scroll', handleScroll);
            }
        };
    }, [appRef, scrollState]);

    // Skills
    const skills = [
        { name: "Core Java", value: "75", img: "" },
        { name: "Javascript", value: "90", img: "" },
        { name: "HTML5", value: "85", img: "" },
        { name: "Next JS", value: "85", img: "" },
        { name: "CSS3", value: "80", img: "" },
        { name: "React JS", value: "90", img: "" },
        { name: "Tailwind CSS", value: "80", img: "" },
        { name: "Bootstrap", value: "75", img: "" },
        { name: "Node JS", value: "85", img: "" },
        { name: "Express JS", value: "85", img: "" },
        { name: "Nest JS", value: "75", img: "" },
        { name: "SQL", value: "75", img: "" },
        { name: "MongoDB", value: "80", img: "" },
        { name: "Redis", value: "70", img: "" },
        { name: "Docker", value: "75", img: "" },
        { name: "Jenkins", value: "70", img: "" },
        { name: "GitHub", value: "85", img: "" },
        { name: "Git", value: "85", img: "" },
        { name: "Redux", value: "80", img: "" },
        { name: "Context API", value: "80", img: "" },
        { name: "Slack", value: "85", img: "" },
    ];


    // Automatic animate the skills when the screen is visible to the user using using Web IntersectionObserver... 
    useEffect(() => {
        const currentSkillRefs = skillRefs.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const skillId = entry.target.getAttribute('data-id');
                    if (entry.isIntersecting) {
                        setVisibleSkills((prevVisibleSkills) => ({
                            ...prevVisibleSkills,
                            [skillId]: true,
                        }));
                    }
                    if (scrollState < 300) {
                        setVisibleSkills((prevVisibleSkills) => ({
                            ...prevVisibleSkills,
                            [skillId]: false,
                        }));
                    }
                });
            },
            { threshold: 0.5 } // Adjust threshold as needed
        );

        currentSkillRefs.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            currentSkillRefs.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [scrollState]);

    // Download the resume...
    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = Resume;
        link.download = 'Shubham_resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => {
            window.open(Resume)
        }, 1000);
    }


    return (
        <>
            <article className="resume" data-page="experience">
                <header className={`flex items-start ${widthState <= 1023 ? "justify-between" : ""}`}>
                    <h2 className="h2 article-title">Experience</h2>
                    <button onClick={downloadResume} className={`h2 relative top-2 focus:text-yellow-900 ${widthState > 1023 && "left-[180px]"}`} title="Shubham's resume"><ion-icon name="cloud-download-outline"></ion-icon></button>
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
                        <li className="timeline-item">
                            <h4 className="h4 timeline-item-title">Software Engineer</h4>

                            <span>OCT, 2023 — Present</span>

                            <Link to="https://www.plutos.one" target='_blank' className="timeline-text w-fit hover:underline">
                                Plutos One
                            </Link>
                        </li>

                        <li className="timeline-item">
                            <h4 className="h4 timeline-item-title">Technical Consultant</h4>

                            <span>April, 2023 — Oct, 2023</span>

                            <Link to="https://acxiomconsulting.com" target='_blank' className="timeline-text w-fit hover:underline">
                                Acxiom Consulting Pvt. Ltd.
                            </Link>
                        </li>

                        <li className="timeline-item">
                            <h4 className="h4 timeline-item-title">Web Developer (Intern)</h4>

                            <span>Aug, 2022 — Oct, 2022</span>

                            <Link to="https://www.dodev.in" target='_blank' className="timeline-text w-fit hover:underline">
                                DoDev Technology Pvt. Ltd.
                            </Link>
                        </li>
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
                            <h4 className="h4 timeline-item-title">
                                IIMT College of Engineering
                            </h4>
                            <span>AKTU - 2023</span>
                            <p className="timeline-text">Computer Science & Engineering</p>
                        </li>

                        <li className="timeline-item">
                            <h4 className="h4 timeline-item-title">
                                Intermediate (MDIC)
                            </h4>
                            <span>U.P Board - 2018</span>
                            <p className="timeline-text">PCM</p>
                        </li>

                        <li className="timeline-item">
                            <h4 className="h4 timeline-item-title">
                                High School (JPS)
                            </h4>
                            <span>CBSE Board- 2015</span>
                            <p className="timeline-text">Science</p>
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

                    <ul className="skills-list content-card">
                        {skills.map((skill, index) => (
                            <li
                                key={index}
                                className="skills-item"
                                ref={(el) => (skillRefs.current[index] = el)}
                                data-id={index}
                            >
                                <div className="title-wrapper">
                                    <h5 className="h5">{skill.name}</h5>
                                    <data value={skill.value}>{skill.value}%</data>
                                </div>

                                <div className="skill-progress-bg">
                                    <div
                                        className="skill-progress-fill"
                                        style={{
                                            width: visibleSkills[index] ? `${skill.value}%` : '0%',
                                            transition: visibleSkills[index] ? 'width 800ms ease-in-out' : 'width 800ms ease-in-out',
                                        }}
                                    ></div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section >
            </article >
        </>
    )
}

export default EduAndExp;