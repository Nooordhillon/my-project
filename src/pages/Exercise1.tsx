import React, { useRef } from "react";

const Exercise1 = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <input ref={inputRef} type="text" className="border border-amber-950" />
      <button
        onClick={() => {
          inputRef.current.select();
        }}
      >
        click here
      </button>
      <div>Input Height is: {inputRef.current?.offsetHeight}</div>
      <div>Input Width is: {inputRef.current?.offsetWidth}</div>
    </div>
  );
};

export default Exercise1;
