import React from "react";

const Greeting = (properties) => {
  return (
    <div>
      
      {properties.greetingName}  ({properties.language})
    </div>
  );
};

export default Greeting;