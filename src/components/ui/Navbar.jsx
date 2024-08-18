import React, { useEffect } from 'react'

const Navbar = ({ appRef }) => {

    const handleClick = ({ target }) => {
        localStorage.setItem("location", target.innerText);
        const appHomeId = document.getElementById("home");
        if (appRef.current) {
            appHomeId.scrollTo({ top: 0, behavior: "instant" })
        }
    }

    useEffect(() => {
        const location = localStorage.getItem("location");
        const navigationLinks = document.querySelectorAll("[data-nav-link]");
        navigationLinks.forEach((link) => {
            if (location?.toLowerCase() === link.innerText.toLowerCase()) {
                link.click()
            }
        });
    }, [])

    return (
        <>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <button onClick={(e) => { handleClick(e) }} className="navbar-link active" data-nav-link>
                            About
                        </button>
                    </li>

                    <li className="navbar-item">
                        <button onClick={(e) => { handleClick(e) }} className="navbar-link" data-nav-link>
                            Experience
                        </button>
                    </li>

                    <li className="navbar-item">
                        <button onClick={(e) => { handleClick(e) }} className="navbar-link" data-nav-link>
                            Portfolio
                        </button>
                    </li>

                    {/* <li className="navbar-item">
                        <button onClick={(e) => { handleClick(e) }} className="navbar-link" data-nav-link>
                            Blog
                        </button>
                    </li> */}

                    <li className="navbar-item">
                        <button onClick={(e) => { handleClick(e) }} className="navbar-link" data-nav-link>
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar