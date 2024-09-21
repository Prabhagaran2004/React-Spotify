import React from "react";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[25%] h-auto p-2 flex-col gap-2 text-white   lg:flex">
      <div className="bg-[#121212] rounded flex flex-col justify-around">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="Home Icon" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-4 m-4 pr-5 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="Search Icon" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              className="w-8"
              src={assets.stack_icon}
              alt="Stack Icon"
            />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="Stack Icon" />
            <img className="w-5" src={assets.plus_icon} alt="Plus Icon" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Create your own playlist</h1>
          <p className="font-light">It's easy we will help you</p>
          <button className="bg-white text-black rounded-full px-4 py-1.5 text-[15px]">Create playlist</button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
          <h1>Podcast to follow</h1>
          <p className="font-light">We'll keep you update on new episodes</p>
          <button className="bg-white text-black rounded-full px-4 py-1.5 text-[15px]">Browse Podcast</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
