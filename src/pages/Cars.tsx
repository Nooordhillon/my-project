import React from "react";
// import "./App.css";
import CarDetailsCard from "../components/CarDetailsCard";
import CarThar from "../components/CarThar";


const Cars = () => {
  return (
    <>
      <div className="flex">
        <div>
          <CarDetailsCard
            carName="Lord Alto"
            color="white"
            carPhoto="https://5.imimg.com/data5/VK/AF/MY-26895595/maruti-alto-800-1000x1000.png"
            size="3,430 mm L x 1,490 mm W x 1,475 mm H"
            tagline="Let's Go"
            model="Alto 800"
            engineCC="796cc"
            engineCylinder="L-3"
            safetyRating="3-star"
          />
        </div>
        <div className="">
          <CarThar
            carName="THAR"
            carPhoto="https://wallpapercave.com/wp/wp3324581.jpg"
            fuelType="Petrol & Diesel"
            numberOfSeats="4 Seater"
            transmission="Manual & Automatic"
            engine="999 to 2184 cc"
            bodyType="SUV"
            mileage="Upto 15.2 kmpl"
          />
        </div>
      </div>
    </>
  );
};

export default Cars;
