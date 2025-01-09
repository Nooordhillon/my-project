import React, { useState } from "react";

export const ComponentThree = ({ isBouncing, setIsBouncing }) => {
  return (
    <div
      className={`bg-slate-500 mt-20 text-white font-bold rounded-md ${
        isBouncing ? "animate-bounce" : ""
      } p-20`}
    >
      Hello! I am component three
      <br />
      <button
        onClick={() => {
          setIsBouncing(!isBouncing);
        }}
      >
        Stop!!
      </button>
    </div>
  );
};

export const ComponentTwo = ({ isBouncing, setIsBouncing }) => {
  return (
    <div className="bg-slate-700 mt-20 text-white font-bold rounded-md p-20">
      Hello! I am component two and my child name is component three
      <br />
      <ComponentThree isBouncing={isBouncing} setIsBouncing={setIsBouncing} />
    </div>
  );
};

const ComponentOne = ({ isBouncing, setIsBouncing }) => {
  return (
    <div className="bg-cyan-950 mt-20 text-white ml-32 font-bold rounded-md p-20">
      Hello! I am component one and my child name is component two
      <br />
      <ComponentTwo isBouncing={isBouncing} setIsBouncing={setIsBouncing} />
    </div>
  );
};

const PropsDrilling = () => {
  const [isBouncing, setIsBouncing] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsBouncing(!isBouncing);
        }}
      >
        {isBouncing ? "Stop Bouncing" : "Start Bouncing"}
      </button>
      <ComponentOne isBouncing={isBouncing} setIsBouncing={setIsBouncing} />
    </div>
  );
};

export default PropsDrilling;
