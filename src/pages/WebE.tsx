import React from "react";
// import "./index.css"; // Ensure Tailwind CSS is imported in your project

const WebE = () => {
  return (
    <div>
      {/* Header */}
      <header className="">
        <div className="flex justify-between items-center text-black bg-white ">
          <span className="text-sm ">+62 819 821 967</span>
          <nav>
            <ul className="flex space-x-4">
              <li className="cursor-pointer">Shop</li>
              <li className="cursor-pointer">Promo</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Blog</li>
            </ul>
          </nav>
        </div>
        <div className="flex mt-2 bg-black">
          <input
            type="text"
            placeholder="Search here"
            className="w-72 p-4 border rounded-l"
          />
          <button className="bg-orange-500 text-white px-4 rounded-r">🔍</button>
        </div>
      </header>

      {/* Promo Section */}
      <main className="bg-orange-500 text-white text-center py-12">
        <div>
          <h4 className="text-sm">1 March 2021 - 30 March 2021</h4>
          <h1 className="text-4xl font-bold my-2">Discount</h1>
          <h2 className="text-2xl">50% All Items</h2>
        </div>
      </main>
      <div> hello</div>
    </div>
  );
};

export default WebE;
