import React from 'react'
import { Link } from 'react-router-dom'

const Blogs = () => {
    return (
        <>
            <article className="blog" data-page="blog">
                <header>
                    <h2 className="h2 article-title">Blog</h2>
                </header>

                <section className="blog-posts">
                    <ul className="blog-posts-list">

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

                        {/* <iframe src='https://app.daily.dev/buggie' about='Daily Dev' title='Daily'></iframe> */}
                    </ul>
                </section>
            </article>
        </>
    )
}

export default Blogs



// API Key
// taDkCMXVBz601IHCm1EZJqz3r

// API Key Secret
// hsog3itPEISbPZmNjP13uD76yCyFMHpYqi6Dh28RGorHDJhFsu


