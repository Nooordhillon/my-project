import React from "react";

const CarThar=(prop)=>{
    const carName = prop.carName;
    const fuelType = prop.fuelType;
    const numberOfSeats= prop.numberOfSeats;
    const  transmission= prop.transmission;
    const carPhoto = prop.carPhoto;
    const engine = prop.engine;
    const bodyType= prop.bodyType;
    const mileage= prop.mileage;

    return ( 
        <div className="">
        <div className="flex px-3 py-3">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src={carPhoto}
              alt="Sunset in the mountains"/> 

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{carName}</div>
              <p className="text-gray-700 text-base">
             	BIGfun TOYS Thar Car Toy For Kids|Wonderful Design.
                 The Mahindra Black Thar stands out as a highly versatile and 
                 capable off-road vehicle available in India for under Rs 20 lakh.
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {fuelType}
              </span>
              
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr2">
                {numberOfSeats}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-4">
                {bodyType}
              </span>
    
            
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2  ">
                {mileage}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2  ">
                {transmission}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2  ">
                {engine}
              </span>
    
            
            </div>
          </div>
        </div>
        </div> 
      );

}
export default CarThar