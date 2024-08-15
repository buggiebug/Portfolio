import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => {

    const projects = useMemo(() => [
        {
            title: "Dark Store",
            category: "Web development",
            img: "./images/ui/projects/darkstore.png",
            alt: "Dark Store",
            link: "https://dashboard-darkstore.netlify.app/"
        },
        {
            title: "Voice Notes",
            category: "Web development",
            img: "./images/ui/projects/voice-notes.png",
            alt: "Voice Notes",
            link: "https://shortmusic.netlify.app/"
        },
        {
            title: "Chat App",
            category: "Web Development",
            img: "./images/ui/projects/chatapp.png",
            alt: "Chat App",
            link: "https://github.com/buggiebug/chat-app/"
        },
        {
            title: "SCSPL",
            category: "Web design",
            img: "./images/ui/projects/scspl.png",
            alt: "SCSPL",
            link: "https://collaborative-circle-771792.framer.app/"
        },
        {
            title: "Login Signup",
            category: "Web development",
            img: "./images/ui/projects/loginSignup.png",
            alt: "Login Signup",
            link: "https://github.com/buggiebug/login-signup-page/"
        },
        {
            title: "Task Manager",
            category: "Applications",
            img: "./images/ui/projects/todo.jpg",
            alt: "task manager",
            link: "/"
        }
    ], []);

    const [projState, setProjState] = useState(projects);

    const [activeButton, setActiveButton] = useState("All");
    const handleActive = (target) => {
        const value = target?.innerText || target?.target?.value;
        setActiveButton(value);
    };


    useMemo(() => {
        if (activeButton === "All" || activeButton === "Select category") {
            setProjState(projects);
        } else {
            const filterData = projects.filter((ele) => { return String(ele.category).toLowerCase() === String(activeButton).toLowerCase() });
            setProjState(filterData);
        }
    }, [activeButton, projects]);

    return (
        <>
            <article className="portfolio" data-page="portfolio">
                <header>
                    <h2 className="h2 article-title">Portfolio</h2>
                </header>

                {/* Desk View */}
                <section className="projects">
                    <ul className="filter-list">
                        <li className="filter-item">
                            <button onClick={(e) => { handleActive(e.target) }} className={`${activeButton === "All" ? "active" : ""}`}>All</button>
                        </li>
                        <li className="filter-item">
                            <button onClick={(e) => { handleActive(e.target) }} className={`${activeButton === "Web development" ? "active" : ""}`}>Web development</button>
                        </li>
                        <li className="filter-item">
                            <button onClick={(e) => { handleActive(e.target) }} className={`${activeButton === "Applications" ? "active" : ""}`}>Applications</button>
                        </li>
                        <li className="filter-item">
                            <button onClick={(e) => { handleActive(e.target) }} className={`${activeButton === "Web design" ? "active" : ""}`}>Web design</button>
                        </li>
                    </ul>

                    {/* Mob View */}
                    <div className="filter-select-box">
                        <select
                            className="filter-select outline-none"
                            onChange={handleActive}
                            value={activeButton}
                        >
                            <option className="select-value" value="Select category">
                                Select category
                            </option>
                            <option className="select-item" value="Web development">
                                Web development
                            </option>
                            <option className="select-item" value="Applications">
                                Applications
                            </option>
                            <option className="select-item" value="Web design">
                                Web design
                            </option>
                        </select>
                    </div>

                    <ul className="project-list">
                        {
                            projState.map((project, idx) => {
                                return <li
                                    key={idx}
                                    className="project-item active"
                                    data-filter-item
                                    data-category="web development">
                                    <Link to={project.link} target='_blank'>
                                        <figure className="project-img">
                                            <div className="project-item-icon-box">
                                                <ion-icon name="eye-outline"></ion-icon>
                                            </div>

                                            <img
                                                src={project.img}
                                                alt={project.title}
                                                loading="lazy"
                                            />
                                        </figure>

                                        <h3 className="project-title">{project.title}</h3>

                                        <p className="project-category">{project.category}</p>
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
                </section>
            </article >
        </>
    )
}

export default Portfolio

