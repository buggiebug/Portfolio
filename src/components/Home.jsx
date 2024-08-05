import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import bgImage from "./images/bgImage.jpg"

const Home = () => {

  useEffect(() => {
    const appHomeId = document.getElementById("home");
    appHomeId.style.backgroundImage = `url(${bgImage})`
    appHomeId.style.color = `white`
  }, []);

  return (
    <>
      <div className={`flex flex-col h-full justify-center items-center`}>
        <div className='relative -top-16'>
          <p>The quieter you become, the more you can hear.</p>
        </div>
        <div>
          <Link className='mx-3 px-3 py-2 uppercase button-human' to={"/ui"}>Human</Link>
          <Link className='button-programmer mx-3 px-3 py-2 uppercase' to={"/cli"}>Programmer</Link>
        </div>
      </div>
    </>
  )
}

export default Home;

