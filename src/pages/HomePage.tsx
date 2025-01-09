import React from "react";
import img1 from "../assets/img1.png";
import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";
import pick1 from "../assets/pick1.jpg";
import lastSnap from "../assets/lastSnap.png";
const HomePage = () => {
  return (
    <div>
      <img src={img1} alt="" className="pt-20 " />
      <p className=" text-3xl text-black font-semibold ml-20 mt-20  flex">
        {" "}
        Selected work
        <p className="text-white">
          {" "}
          mckdmc mkckn jxhhdguwhjqudg3yuwgf jddkxcd6etrfgc
        </p>
        <button className="text-slate-600 font-semibold ml-20 hover:text-black text-sm">
          All
        </button>
        <button className="text-slate-600 font-semibold  ml-6 hover:text-black text-sm">
          Design{" "}
        </button>
        <button className="text-slate-600 font-semibold ml-6 hover:text-black  text-sm">
          Branding{" "}
        </button>
        <button className="text-slate-600 font-semibold ml-6 hover:text-black  text-sm">
          Packaging{" "}
        </button>
      </p>

      <img src={photo1} alt="" />
      <img src={photo2} alt="" className="-ml-1 gap-1" />

      <div className="mt-6 bg-stone-100 pt-14">
        <p className=" text-7xl text-center">It's True.</p>
        <p className=" text-gray-500 text-center pt-4 text-3xl">
          {" "}
          Small things make you big.
        </p>
        <img src={pick1} alt="" className="pt-10 pl-40 w-5/6	" />
        <p className=" text-gray-400 text-2xl font-thin text-center pt-20">
          We're a team of experts, striving long term solutions. We
          <br /> think big and take on every challenge that comes across
          <br /> our path.
        </p>
        <p></p>
      </div>
      <div>
        {" "}
        <tr>
          <td className="px-32 py-10 text-3xl text-gray-600">Interviews</td>
          <td
            className="px-32
         py-10 text-2xl text-gray-600"
          >
            The New York Times
          </td>
          <td
            className="px-20
         py-10 text-2xl text-gray-600"
          >
            Boston Herald
          </td>
          <td
            className="px-20
         py-10 text-2xl text-gray-600"
          >
            Bloomberg
          </td>
          <td
            className="px-20
         py-10 text-2xl text-gray-600"
          >
            Computer Science
          </td>
        </tr>
        <tr>
          <td
            className="px-32
         py-10 text-2xl text-gray-600"
          >
            Awards
          </td>
          <td
            className="px-20
         py-10 text-2xl text-gray-600"
          >
            Red Dot Award 2018
          </td>
          <td
            className="px-20
         py-10 text-2xl text-gray-600"
          >
            Golden Design 2017
          </td>
          <td
            className="px-20
         py-10 text-2xl text-gray-600"
          >
            Red Dot Award 2017
          </td>
          <td
            className="px-20
         py-10 text-2xl text-gray-600"
          >
            Rams Winner 2016
          </td>
        </tr>
        <tr>
          <td
            className="px-20
         py-10 text-2xl text-gray-600"
          >
            {" "}
            Publications
          </td>
          <td
            className="px-20
         py-10 text-2xl text-gray-600"
          >
            The New York Times
          </td>
          <td
            className="px-20
         py-10 text-2xl text-gray-600"
          >
            Digital Mag
          </td>
          <td
            className="px-20
         py-10 text-2xl text-gray-600"
          >
            Online.com
          </td>
          <td
            className="px-20
         py-10 text-2xl text-gray-600"
          >
            Digital Heroes
          </td>
        </tr>
      </div>
      <p className="text-2xl text-center mt-8 font-semibold">
        The folks we work with
      </p>
      <img src={lastSnap} alt="" className="mt-8" />
    </div>
  );
};

export default HomePage;
