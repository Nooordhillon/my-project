import React, { useRef } from "react";

const UserRefHook = () => {
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);
  return (
    <div>
      <button
        onClick={() => {
          // alert(1);
          button2Ref.current.click();
        }}
        ref={button1Ref}
      >
        {" "}
        BUTTON 1{" "}
      </button>

      <button
        onClick={() => {
          alert(2);
          // button1Ref.current.click();
        }}
        ref={button2Ref}
      >
        {" "}
        BUTTON 2
      </button>
    </div>
  );
};

export default UserRefHook;
