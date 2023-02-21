import React,{useState} from 'react';
import {Link} from "react-router-dom";

function Navbar(props) {

  const [routeState,setRouteState] = useState("About");

  const {changeRoute} = props;

  const getRoutes = (e)=>{
    changeRoute(e.target.innerHTML);
    setRouteState(e.target.innerHTML)
  }
  return (
    <>
      <div className='flex justify-around items-center border-b border-gray-400'>
        <nav className='uppercase tracking-wider'>
            <Link onClick={(e)=>{getRoutes(e)}} defaultValue={"education"} className={`${routeState==="About"?"text-yellow-400":"text-white"} mx-3 md:mx-5`} to={"/"}>About</Link>
            <Link onClick={(e)=>{getRoutes(e)}} defaultValue={"education"} className={`${routeState==="Education"?"text-yellow-400":"text-white"} mx-3 md:mx-5`} to={"/"}>Education</Link>
            <Link onClick={(e)=>{getRoutes(e)}} defaultValue={"skills"} className={`${routeState==="Skills"?"text-yellow-400":"text-white"} mx-3 md:mx-5`} to={"/"}>Skills</Link>
            <Link onClick={(e)=>{getRoutes(e)}} defaultValue={"work"} className={`${routeState==="Work"?"text-yellow-400":"text-white"} mx-3 md:mx-5`} to={"/"}>Work</Link>
        </nav>
      </div>
    </>
  )
}

export default Navbar;
