import React from 'react'

const Navbar = ({ appRef }) => {

    const handleScroll = () => {
        const appHomeId = document.getElementById("home");
        if (appRef.current) {
            appHomeId.scrollTo({ top: 0, behavior: "instant" })
        }
    }

    return (
        <>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <button onClick={handleScroll} className="navbar-link active" data-nav-link>
                            About
                        </button>
                    </li>

                    <li className="navbar-item">
                        <button onClick={handleScroll} className="navbar-link" data-nav-link>
                            Experience
                        </button>
                    </li>

                    <li className="navbar-item">
                        <button onClick={handleScroll} className="navbar-link" data-nav-link>
                            Portfolio
                        </button>
                    </li>

                    <li className="navbar-item">
                        <button onClick={handleScroll} className="navbar-link" data-nav-link>
                            Blog
                        </button>
                    </li>

                    <li className="navbar-item">
                        <button onClick={handleScroll} className="navbar-link" data-nav-link>
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar