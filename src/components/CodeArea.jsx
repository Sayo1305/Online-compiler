import React from "react";

const CodeArea = () => {
  return (
    <div className="p-5 flex flex-col gap-10">
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
          <ul className="dropdown-menu p-2 bg-transparent text-center">
            <li className="border-1 border-white">C++</li>
            <li>Java</li>
            <li>Python</li>
          </ul>
        </div>
        <div>C++</div>
      </div>
      <textarea className="w-full h-[60vh] rounded-lg p-2 outline-none"></textarea>
    </div>
  );
};

export default CodeArea;
