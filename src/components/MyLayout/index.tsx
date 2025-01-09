import React from "react";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
import { Outlet } from "react-router-dom";


const MyLayout = () => {
  return (
    <div>
      
          <MyHeader />
           <Outlet/>
         <MyFooter />
      </div>
     
  );
};

export default MyLayout;
