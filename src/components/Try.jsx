import React, { useState } from "react";

const Try = () => {
  const [num, setnum] = useState([]);
  const [i, seti] = useState(0);
  const funmere = () => {
    const templist = num;
    templist.push(i);
    setnum(templist);
    seti(i + 1);
  };

  return (
    <div
      className="text-5xl cursor-pointer text-white w-full text-center"
      onClick={funmere}
    >
    </div>
  );
};

export default Try;
