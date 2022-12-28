import React, { useState } from "react";

const CodeArea = ({Theme}) => {
  const [CurrentLang , setCurrentLang] = useState("");
  const [CurrentCode, setCurrentCode] = useState("");
  const handle_change = (e)=>{
    setCurrentCode(e.target.value);
  }
  const handle_click = ()=>{
    console.log(CurrentLang + " " + CurrentCode);
  }
  return (
    <div className="p-4 flex flex-col gap-10">
      <div className="flex items-center gap-5">
        <div class="dropdown">
          <button
            className="btn border-1 border-white text-white dropdown-toggle "
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Choose Language
          </button>
          <ul className="dropdown-menu p-2 bg-white text-center">
            <li className="border-1 cursor-pointer" onClick={()=>{setCurrentLang("C++")}}>C++</li>
            <li className="border-1 cursor-pointer" onClick={()=>{setCurrentLang("Java")}}>Java</li>
            <li className="border-1 cursor-pointer" onClick={()=>{setCurrentLang("Python")}}>Python</li>
          </ul>
        </div>
        {
          CurrentLang && <div className="bg-white p-2 rounded">{CurrentLang}</div>
        }
      </div>
      <textarea className="w-full h-[60vh] rounded-lg p-2 outline-none" onChange={handle_change}></textarea>
      <button className={` ${Theme === "Dark" ? "bg-[#2dd42a] text-black" : "bg-[#090034] text-white"}  w-[100px] h-[60px] font-bold text-center p-3 rounded`} onClick={handle_click}>submit</button>
    </div>
  );
};

export default CodeArea;
