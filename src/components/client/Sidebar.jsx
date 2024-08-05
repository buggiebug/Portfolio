// src/components/Sidebar.js
import React, { useEffect, useState } from 'react';
import profilePic from '../images/shubham.jpg'; // Adjust the path as needed

export default function Sidebar() {
  const [widthState, setWidthState] = useState(0);
  useEffect(() => {
    setWidthState(window.innerWidth);
    const handleWidth = () => {
      setWidthState(window.innerWidth);
    }
    window.addEventListener("resize", handleWidth);
    return () => { window.addEventListener("resize", handleWidth) }
  }, [widthState]);

  return widthState <= 1249 ? <MobBar profilePic={profilePic} /> : <DeskBar profilePic={profilePic} />
};




export function MobBar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <aside className='p-[15px] md:p-[30px] bgColor rounded-xl flex flex-col justify-between'>
      <span className='relative top-[-15px] md:top-[-30px] text-end cursor-pointer textColor' onClick={()=>{setIsActive(!isActive)}}>Show Contact</span>
        <div>Profile</div>
        {
          isActive && <>
            <div>
              <hr />
              Contact
            </div>
            <div>
              <hr />
              Socail
            </div>
          </>
        }
      </aside>
    </>
  );
}


















export function DeskBar() {
  return (
    <>
      <aside className='m-[15px 12px] bg-[#1e1e1f]'>
        DeskBar
      </aside>
    </>
  );
}