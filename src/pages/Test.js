import React from "react";

const Test = () => {
  return (
    <div className="!bg-white h-screen w-screen ">
      <svg
        width="100%"
        height="150%"
        xmlns="http://www.w3.org/2000/svg"
        className=" ml-[20%]"
      >
<line x1="10" y1="50" x2="290" y2="50" stroke="blue" />

<line x1="290" y1="50" x2="290" y2="10" stroke="blue" />
<path d="M 10 50 C 50 48, 200 50,290,10" stroke="blue" fill="none" />
      </svg>
    </div>
  );
};

export default Test;
// L20 100
//           L0 400
