import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={`flex h-full justify-center items-center`}>
      <Link className='mx-3 px-3 py-2 uppercase button-human' to={"/ui"}>Human</Link>
      <Link className='button-programmer mx-3 px-3 py-2 uppercase' to={"/cli"}>Programmer</Link>
    </div>
  )
}

export default Home;

