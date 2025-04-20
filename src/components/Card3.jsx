// components/Card3.jsx
export default function Card3({ imageSrc, title }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg p-4 border-2 border-pink-400 shadow-md w-60 h-64 hover:scale-105 transition-transform duration-300">
      
      {/* Image container with background image */}
      <div
        className="w-full h-40 bg-cover bg-center rounded-md"
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>

      {/* Title */}
      <p className="text-base font-bold text-center text-black mt-4">
        {title}
      </p>
    </div>
  );
}
