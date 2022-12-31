import React, { useState } from "react";
import Loader from "react-js-loader";


const CodeArea = ({ Theme }) => {
  const [CurrentLang, setCurrentLang] = useState("");
  const [CurrentCode, setCurrentCode] = useState("");
  const [Input , setInput] = useState("");
  const [OnInput, setOnInput] = useState(false);
  const [CodeOutput , setCodeOutput] = useState("");
  const [ClickSubmit , setClickSubmit] = useState(false);
  const handle_change = (e) => {
    setCurrentCode(e.target.value);
  };
  const handle_click = async() => {
    setClickSubmit(true);
    setCodeOutput("");
    //console.log(CurrentLang + " " + CurrentCode + " " + Input);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code: CurrentCode,
        type : CurrentLang,
        inputrq : OnInput,
        inputcode : Input,
      }),
    };
    fetch("http://localhost:3001/compilecode", requestOptions)
        .then((response) => response.json())
        .then((data) => setCodeOutput(data));
  };
  const handle_input = (e)=>{
    setInput(e.target.value);
  }
  return (
    <div className="p-4 flex flex-col gap-3">
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
            <li
              className="border-1 cursor-pointer"
              onClick={() => {
                setCurrentLang("C++");
                setCurrentCode("");
              }}
            >
              C++
            </li>
            <li
              className="border-1 cursor-pointer"
              onClick={() => {
                setCurrentLang("Java");
                setCurrentCode("");
              }}
            >
              Java
            </li>
            <li
              className="border-1 cursor-pointer"
              onClick={() => {
                setCurrentLang("Python");
                setCurrentCode("");
              }}
            >
              Python
            </li>
          </ul>
        </div>
        {CurrentLang && (
          <div className="bg-white p-2 rounded">{CurrentLang}</div>
        )}
      </div>
      <textarea
      value={CurrentCode}
        className="w-full h-[40vh] rounded-lg p-2 outline-none textareaclass"
        onChange={handle_change}
      ></textarea>
      {/* <div class="form-check form-switch">
        <input
        onClick={()=>{setOnInput(!OnInput)}}
          className="form-check-input "
          type="checkbox"
          id="flexSwitchCheckChecked"
        />
        <label className="text-white form-check-label" htmlFor="flexSwitchCheckChecked">
          Input  
        </label>
      </div> */}
      {
        OnInput && <textarea  onChange={handle_input} className="w-[30vw] h-[10vh] rounded-lg p-2 outline-none"></textarea>
      }
      <button
        className={` ${
          Theme === "Dark"
            ? "bg-[#2dd42a] text-black"
            : "bg-[#090034] text-white"
        }  w-[100px] h-[60px] font-bold text-center p-3 rounded`}
        onClick={handle_click}
      >
        submit
      </button>
      {
        CodeOutput === '' && ClickSubmit ?  <Loader type="spinner-circle" bgColor={"#FFFFFF"}  color={'#FFFFFF'} size={50} /> : <div className="text-white text-2xl">{CodeOutput}</div>
      }
    </div>
  );
};

export default CodeArea;
