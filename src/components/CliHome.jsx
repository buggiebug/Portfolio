import React from 'react'
import { useEffect, useRef, useState } from "react";
import PromptBar from "./terminal/PromptBar";
import { themes } from "./terminal/constants";

import info from "./data.json";
const options = info.options.map((option) => option.label);


const CliHome = () => {

  const [currentTheme, setTheme] = useState(themes[0]);
  const [customUserName, setCustomUserName] = useState("");
  const [userInput, setUserInput] = useState("");


  // Set User Input...
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };


  // On Presing Enter...
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInput("");
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  };


  // Auto focus on input box...
  const inputRef = useRef(null);
  useEffect(() => {
    const focusInput = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };
    window.addEventListener("click", focusInput);
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("click", focusInput);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className={`${currentTheme} h-full`}>
      <div className="font-bold text-xl p-2 w-[100vw] min-h-[100vh] bg-bgcol">
        {/* Prompt */}
        <div className="border border-red-600 flex flex-col sm:flex-row">
          <span className=''>
            <PromptBar customUserName={customUserName} />
          </span>
          <span className=''>
            <form onSubmit={handleSubmit} className="mt-2 sm:mt-0">
              <input
                type="text"
                className="w-full md:w-[450px] lg:w-[700px] bg-transparent outline-none text-command"
                autoFocus
                value={userInput}
                onChange={handleInputChange}
                ref={inputRef}
                autoComplete="off"
              />
            </form>
          </span>
        </div>
      </div>
    </div>
  )
}

export default CliHome;

