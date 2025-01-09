import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Loading = ({ duration = 6000 }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), duration); 
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center bg-slate-900 h-screen">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <FaCheckCircle className="text-green-500 text-6xl" /> 
        </div>
      )}
    </>
  );
};

export default Loading;
