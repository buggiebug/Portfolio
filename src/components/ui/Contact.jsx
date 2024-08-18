import React, { useEffect, useRef, useState } from 'react'
import emailjs from 'emailjs-com';
import { Toaster, toast } from 'react-hot-toast';
import { VscLoading } from "react-icons/vsc";

const Contact = () => {
    const formRef = useRef(null);
    const [loadingState, setLoadingState] = useState(false);

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


    const handleSubmit = (e) => {
        e.preventDefault();

        setLoadingState(true);
        const form = new FormData(formRef.current);
        // Convert FormData to an object
        const { email, fullname, message } = Object.fromEntries(form.entries());

        const formData = {
            from_name: fullname,
            to_name: "Shubham",
            reply_to: email,
            message: `Reply To: ${email}\n${message}`
        }

        emailjs.send(
            process.env.REACT_APP_EMAIL_JS_SERVICE_ID, 
            process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
            formData,
            process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
        ).then((response) => {
            toast.success('Message sent successfully!');
            formRef.current.reset();
            setLoadingState(false);
        }).catch((err) => {
            toast.error('Failed to send the message, please try again later.');
            setLoadingState(false);
        });
    };

    return (
        <>
            <Toaster position='top-right' />
            <article className="contact" data-page="contact">
                <header>
                    <h2 className="h2 article-title">Contact</h2>
                </header>

                <section className="mapbox" data-mapbox>
                    <figure>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224356.8592340161!2d77.23701245987459!3d28.522404035544067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1723966133451!5m2!1sen!2sin"
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

                    <form ref={formRef} onSubmit={handleSubmit} className="form" data-form>
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

                        {
                            loadingState ?
                                <button className="form-btn" type="submit" disabled data-form-btn>
                                    <span className='animate-spin'><VscLoading /></span>
                                    <span>Sending...</span>
                                </button>
                                :
                                <button className="form-btn" type="submit" disabled data-form-btn>
                                    <ion-icon name="paper-plane"></ion-icon>
                                    <span>Send Message</span>
                                </button>
                        }
                    </form>
                </section>
            </article>
        </>
    )
}

export default Contact