import React from 'react'
import { Link } from 'react-router-dom'
// import Testimonials from './Testimonials'

const About = ({ about }) => {
  return (
    <>
      <article className="about  active" data-page="about">
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        {/* Self Intro */}
        <section className="about-text">
          {about?.map((ele, idx) => <p key={idx}>{ele}</p>)}
        </section>

        {/* - Service */}
        <section className="service">
          <h3 className="h3 service-title">What i'm doing</h3>

          <ul className="service-list">

            <li className="service-item">
              <div className="service-icon-box">
                <img
                  src="./images/ui/images/icon-dev.svg"
                  alt="Web development icon"
                  width="40"
                />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Web development</h4>

                <p className="service-item-text">
                  High-quality development of sites at the professional
                  level.
                </p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <img
                  src="./images/ui/images/icon-app.svg"
                  alt="mobile app icon"
                  width="40"
                />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Mobile apps</h4>

                <p className="service-item-text">
                  Professional development of applications for iOS and
                  Android.
                </p>
              </div>
            </li>

          </ul>
        </section>


        {/* Testimonials... */}
        {/* <Testimonials /> */}

        {/* - Clients */}
        <section className="clients">
          <h3 className="h3 clients-title">Worked In</h3>

          <ul className="clients-list has-scrollbar">

            <li className="clients-item">
              <Link to={"https://plutos.one"} target='_blank'>
                <img
                  src="./images/ui/workedIn/plutos.svg"
                  alt="client logo"
                />
              </Link>
            </li>

            <li className="clients-item">
              <Link to={"https://acxiomconsulting.com"} target='_blank'>
                <img
                  src="./images/ui/workedIn/acx.png"
                  alt="Acxiom Consulting Pvt. Ltd."
                />
              </Link>
            </li>

            <li className="clients-item flex justify-center">
              <Link to={"https://dodev.in"} target='_blank'
                style={{ width: "40%" }}
              >
                <img
                  src="./images/ui/workedIn/dodev.png"
                  alt="Dodev Pvt. Ltd."
                />
              </Link>
            </li>

          </ul>
        </section>
      </article>
    </>
  )
}

export default About