import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const ThreeDCard = ({ children }) => {
    const style = {
        perspective1000: {
            perspective: '1000px',
        },
        cardWrap: {
            transition: 'transform 0.1s ease',
            transformStyle: 'preserve-3d',
        },
        card: {
            transform: 'translateZ(50px)',
        },
    };


    const cardRef = useRef(null);
    useEffect(() => {
        const card = cardRef.current;

        const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const rotateX = -y / 10;
            const rotateY = x / 10;
            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        };

        const handleMouseLeave = () => {
            card.style.transform = `rotateX(0deg) rotateY(0deg)`;
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className={style.perspective1000}>
            <div ref={cardRef} className={`${style.card} w-64 h-80 bg-white rounded-lg shadow-lg flex items-center justify-center`}>
                <div className={`${style.cardWrap} text-center`}>
                    {children}
                </div>
            </div>
        </div >
    );
};

const Blogs = () => {

    return (
        <>
            <article className="blog block" data-page="blog">
                <header>
                    <h2 className="h2 article-title">Blog</h2>
                </header>

                {/* <section className="blog-posts"> */}
                {/* <ul className="blog-posts-list">

                        <li className="blog-post-item">
                            <Link to={"/"} target='_blank'>
                                <figure className="blog-banner-box">
                                    <img
                                        src="./images/ui/projects/chatapp.png"
                                        alt="Blog Post"
                                        loading="lazy"
                                    />
                                </figure>

                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <p className="blog-category">Twitter</p>

                                        <span className="dot"></span>

                                        <time dateTime="2022-02-23">Aug 15, 2024</time>
                                    </div>

                                    <h3 className="h3 blog-item-title">
                                        How to hanlde scroll event
                                    </h3>

                                    <p className="blog-text">
                                        Use useEffect & useState to handle the scoll of the app
                                    </p>
                                </div>
                            </Link>
                        </li>
                    </ul> */}
                {/* </section> */}

                <div className='flex justify-center'>
                    <ThreeDCard>
                        <figure className=''>
                            <Link to="https://app.daily.dev/buggie" target='_blank' style={{ display: "inline-block" }} className=''><img className='' src="https://api.daily.dev/devcards/v2/IVHlX7o6zo1CkRsqS3rRD.png?type=default&r=3yw" width="356" alt="buggie's Dev Card" /></Link>
                        </figure>
                    </ThreeDCard>
                </div>
            </article>
        </>
    )
}

export default Blogs



// API Key
// taDkCMXVBz601IHCm1EZJqz3r

// API Key Secret
// hsog3itPEISbPZmNjP13uD76yCyFMHpYqi6Dh28RGorHDJhFsu


