import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card1 = ({ title, description, imageSrc, cardColor }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/chat'); // replace '/chat' with your desired route
  };

  return (
    <div
      className="p-6 rounded-xl shadow-md text-black w-[500px] h-[220px] flex items-center"
      style={{ backgroundColor: cardColor }}
    >
      <div className="flex items-center space-x-6 w-full">
        <img src={imageSrc} alt="Card Illustration" className="w-36 h-auto rounded-md" />
        <div className="flex flex-col justify-between h-full w-full">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-center">{title}</h2>
            <p className="text-sm leading-snug text-center">{description}</p>
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleClick}
              className="bg-blue-700 text-white text-xs px-3 py-1 rounded hover:bg-blue-800 transition"
            >
              START HERE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
