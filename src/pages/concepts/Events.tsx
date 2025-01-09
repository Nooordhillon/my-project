//  import React, { useState } from "react";
//  const Events = () => {
//  const [isMouseIn, setIsMouseIn] = useState(false);
//  const [text, setText] = useState("");
//  const bgColor = isMouseIn ? "bg-slate-500" : "bg-slate-900";
//     return (
//     <div
//       className={`h-[100vh] ${bgColor} flex flex-col space-y-5 items-center justify-center ease-in duration-300`}
//        >
//        <div
//         onClick={() => {
//           console.log(new Date());
//         }}
//         className="border-white border-4 cursor-pointer text-4xl bg-red-300 w-96 h-96 flex items-center justify-center rounded-2xl text-white"
//        >
//         <div className="text-center">Click it! <br /> <p className=" text-2xl">To see new date in console</p></div>
//        </div>
//        <div
//         onMouseEnter={() => {
//           console.log("mouse entered");
//           setIsMouseIn(true);
//         }}
//         onMouseLeave={() => {
//           console.log("mouse left");
//           setIsMouseIn(false);
//         }}
//         onMouseMove={() => {
//           console.log("mouse is moving", new Date());
//         }}
//         className=" border-white border-4 cursor-pointer text-4xl bg-slate-300 w-96 h-96 flex flex-col items-center justify-center rounded-2xl text-white"
//        >
//         <div className="text-center">Hover Event <br /><p className=" text-2xl"> let's see magic in the backgroung <br />
//         and gift in your div</p></div>
//         {isMouseIn ? <>🐁</> : <></>}
//        </div>
//        <div
//         onClick={() => {
//           console.log(new Date());
//         }}
//         className=" cursor-pointer text-4xl border-white border-4 bg-blue-300 w-96 h-96 flex flex-col items-center justify-center rounded-2xl text-white"
//        >
//         <div>onChange Event</div>
//         <input
//           className="w-36 text-blue-900"
//           onChange={(event) => {
//             const value = event.target.value;
//             setText(value);
//           }}
//         ></input>
//        </div>
//        <div
//         className=" cursor-pointer text-4xl border-white border-4 bg-green-300 w-96 h-96 flex flex-col items-center justify-center rounded-2xl text-white"
//        >
//         {text}
//       </div>
//     </div>    
//   );
//  };
//  export default Events;    