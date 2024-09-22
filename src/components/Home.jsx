import React from 'react'
import { Link } from 'react-router-dom';
import { TopLight } from './animated/TopLight';

const Home = ({ scroll }) => {
  return (
    <>
      <div className={`flex flex-col h-[1000vh] justify-start items-center`}>
        <TopLight scroll={scroll} />
        <div className='absolute top-52 flex flex-col justify-center items-center'>
          <div className='relative my-10 mx-5'>
            <p className='typewriter font-mono text-white'>The quieter you become, the more you can hear.</p>
          </div>
          <div className='flex gap-2 sm:gap-8 scale-90 md:scale-100'>
            <Link className='button-human uppercase ml-2' to={"/ui"}>Human</Link>
            <Link className='button-programmer uppercase mr-2 px-3' to={"/cli"}>Programmer</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;

