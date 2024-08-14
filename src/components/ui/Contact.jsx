import React, { useEffect } from 'react'

const Contact = () => {

    useEffect(() => {

        const form = document.querySelector("[data-form]");
        const formInputs = document.querySelectorAll("[data-form-input]");
        const formBtn = document.querySelector("[data-form-btn]");

        formInputs.forEach((input) => {
            input.addEventListener("input", () => {
                if (form.checkValidity()) {
                    formBtn.removeAttribute("disabled");
                } else {
                    formBtn.setAttribute("disabled", "");
                }
            });
        });

        return () => {
            formInputs.forEach((input) =>
                input.removeEventListener("input", () => { })
            );
        }
    }, []);

    return (
        <>
            <article className="contact" data-page="contact">
                <header>
                    <h2 className="h2 article-title">Contact</h2>
                </header>

                <section className="mapbox" data-mapbox>
                    <figure>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7006.644751147739!2d77.30244115696443!3d28.59010415199996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1723092300644!5m2!1sen!2sin"
                            width="400"
                            height="300"
                            allowFullScreen=""
                            title="address"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </figure>
                </section>

                <section className="contact-form">
                    <h3 className="h3 form-title">Contact Form</h3>

                    <form action="#" className="form" data-form>
                        <div className="input-wrapper">
                            <input
                                type="text"
                                name="fullname"
                                className="form-input"
                                placeholder="Full name"
                                required
                                data-form-input
                            />

                            <input
                                type="email"
                                name="email"
                                className="form-input"
                                placeholder="Email address"
                                required
                                data-form-input
                            />
                        </div>

                        <textarea
                            name="message"
                            className="form-input"
                            placeholder="Your Message"
                            required
                            data-form-input></textarea>

                        <button className="form-btn" type="submit" disabled data-form-btn>
                            <ion-icon name="paper-plane"></ion-icon>
                            <span>Send Message</span>
                        </button>
                    </form>
                </section>
            </article>
        </>
    )
}

export default Contact