import React from "react";
import { useNavigate } from "react-router-dom";

const Card2 = ({ img1, img2, title, description }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div  className="bg-white rounded-xl shadow-md p-4 w-60 flex flex-col items-center space-y-2 transform transition duration-300 hover:scale-105 hover:shadow-xl">
      {/* Top Image */}
      <img
        src="/t.png"
        alt="Card Top"
        className="w-16 h-16 mt-2 rounded-full"
      />


      {/* Title */}
      <h3 className="font-semibold text-center text-md text-gray-800 leading-tight">
        Company Research Agent
      </h3>

      {/* Creator */}
      {/* <p className="text-sm text-gray-500 text-center -mt-1">By <span className="text-[#0077b5] font-semibold">@dharmesh</span></p> */}

      {/* Task Info */}
      <p className="text-xs text-gray-600 text-center mt-1">1 credit per task</p>
      <p className="text-xs text-gray-600 text-center">25.2K tasks completed</p>

      {/* Rating */}
      <p className="text-xs text-red-500 font-medium text-center">★ 4.28 (2505 reviews)</p>

      {/* Button */}
      <button className="mt-2 w-24 px-4 py-1 text-sm font-medium border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition">
        Go
      </button>

    </div>
  );
};

export default Card2;
