import React from "react";
import { useNavigate } from "react-router-dom";

const Card2 = ({ img1, title, description }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/clarityBot");
  };

  return (
    <div  className="bg-white rounded-xl shadow-md p-4 w-60 flex flex-col items-center space-y-2 transform transition duration-300 hover:scale-105 hover:shadow-xl">
      {/* Top Image */}
      <img
        src={img1}
        alt="Card Top"
        className="w-20 h-20 mt-2 rounded-full"
      />


      {/* Title */}
      <h3 className="font-semibold text-center text-md text-gray-800 leading-tight">
        {title}
      </h3>

      
      {/* Task Info */}
      <p className="text-xs text-gray-600 text-center">25.2K tasks completed</p>

      {/* Rating */}
      <p className="text-xs text-red-500 font-medium text-center">★ 4.28 (2505 reviews)</p>

      {/* Button */}
      <button className="mt-2 w-24 px-4 py-1 text-sm font-medium border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition"
        onClick={handleClick}>
        Go
      </button>

    </div>
  );
};

export default Card2;
