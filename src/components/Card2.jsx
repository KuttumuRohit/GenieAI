import React from "react";
import { useNavigate } from "react-router-dom";

const Card2 = ({ img1, img2, title, description }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-2xl shadow-lg p-4 w-72 border-2 border-black relative cursor-pointer transition-transform hover:scale-105 overflow-hidden"
    >
      {/* Background image section */}
      <div
        className="w-full h-24 bg-no-repeat bg-contain bg-center mb-4"
        style={{ backgroundImage: `url(${img1})` }}
      >
        {/* Center circular logo on top of bg */}
        <div className="w-12 h-12 rounded-full bg-white border-2 border-black mx-auto flex justify-center items-center mt-6">
          <img src={img2} alt="Logo" className="w-6 h-6 object-contain" />
        </div>
      </div>

      {/* Title and Description */}
      <div className="text-center">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm mt-2 text-gray-700">“{description}”</p>
      </div>

      {/* Decorative feather */}
      <div className="absolute bottom-2 right-2 w-6 h-6 opacity-60">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Feather_icon.svg/1024px-Feather_icon.svg.png"
          alt="feather"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Card2;
