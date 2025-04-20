import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  // 🔧 Adjustable lamp dimensions and positions
  const lampHeight = 40; // Increased height beyond the div's height
  const lampWidth = 90;  // Increased width beyond the div's width
  const down = -10; // Vertical adjustment (negative moves up, positive moves down)
  const right = 10; // Horizontal adjustment (right is positive, left is negative)

  return (
    <header style={{ backgroundColor: "#1E1C2A" }} className="py-6 shadow-md">
      <style>{`
        .glitch-char {
          position: relative;
          display: inline-block;
          font-family: 'Cinzel Decorative', fantasy;
        }

        .glitch-char::before {
          content: attr(data-char);
          position: absolute;
          top: -2px;
          left: -2px;
          color: #ff00c8;
          z-index: -1;
        }

        .fantasy-font {
          font-family: 'Cinzel Decorative', fantasy;
        }
      `}</style>

      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center relative overflow-visible">
        {/* Logo Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide flex space-x-1 fantasy-font mb-6">
          <span
            data-char="G"
            className="text-white"
          >
            G
          </span>
          <span className="text-white">E</span>
          <span className="glitch-char text-yellow-400 font-bold">N</span>
          

          {/* Lamp on top of the second E */}
          <span className="relative flex flex-col items-center">
            <span className="text-white">IE</span>
            <img
              src="/lamp.png"
              alt="lamp"
              style={{
                width: `${lampWidth}px`,  // Dynamically adjusted width (can extend beyond div)
                height: `${lampHeight}px`,  // Dynamically adjusted height (can be larger than div)
                position: "absolute",
                top: `calc(100% + ${down}px)`, // Moves lamp vertically
                left: `${right}px`, // Moves lamp horizontally (right is positive)
                zIndex: 10, // Ensures lamp stays above E
              }}
            />
          </span>

          <span className="text-yellow-400 font-bold ml-2">&nbsp;A</span>  
          <span className="text-yellow-400 font-bold ml-2">I</span>
        </h1>

        {/* Subheading with increased spacing */}
        <p className="text-white text-sm mt-3 italic">
          Create. Engage. Grow — Powered by AI
        </p>
      </div>
    </header>
  );
};

export default Header;
