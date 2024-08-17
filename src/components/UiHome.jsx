import React, { useEffect, useMemo } from 'react'
import "./ui/style.scss";
import About from './ui/About';
import Blogs from './ui/Blogs';
import EduAndExp from './ui/EduAndExp';
import Portfolio from './ui/Portfolio';
import Contact from './ui/Contact';
import SideNavbar from './ui/SideNavbar';
import Navbar from './ui/Navbar';

import infoData from "./utils/info";

const UiHome = ({ appRef }) => {

  const { experience, about } = useMemo(() => {
    const experience = infoData.options.filter(option => option.label === "experience")[0].data;
    const about = infoData.options.filter(option => option.label === "about")[0].value.split("<br/>");
    return {
      experience,
      about
    }
  }, []);

  useEffect(() => {

    const navigationLinks = document.querySelectorAll("[data-nav-link]");
    const pages = document.querySelectorAll("[data-page]");

    navigationLinks.forEach((link) => {
      link.addEventListener("click", () => {
        pages.forEach((page) => {
          if (link.innerText.toLowerCase() === page.dataset.page) {
            page.classList.add("active");
            navigationLinks.forEach((nav) => nav.classList.remove("active"));
            link.classList.add("active");
            window.scrollTo(0, 0);
          } else {
            page.classList.remove("active");
          }
        });
      });
    });

    return () => {
      navigationLinks.forEach((link) =>
        link.removeEventListener("click", () => { })
      );
    };
  }, []);

  return (
    <>
      <div className='mainContainer my-[15px] mx-[12px]'>
        <main>

          {/* - #SIDEBAR */}
          <SideNavbar />

          {/* - #main-content */}

          <div className="main-content">

            {/* - #NAVBAR */}
            <Navbar appRef={appRef} />

            {/* - #ABOUT */}
            <About about={about} />

            {/* - #RESUME */}
            <EduAndExp experience={experience} />

            {/* - #PORTFOLIO */}
            <Portfolio />

            {/* - #BLOG */}
            <Blogs />

            {/* - #CONTACT */}
            <Contact />
          </div>
        </main>
      </div>
    </>
  )
}

export default UiHome