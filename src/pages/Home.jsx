import Card2 from "../components/Card2";
import Card1 from "../components/Card1";
import Card3 from "../components/Card3";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const overMoveLeft = "translate-x-[-250px]";
  const overMoveRight = "translate-x-[250px]";
  

  const handleClick = () => {
    navigate("/text_generator");
  };

  const handleGrmmar = () => {
    navigate("/grammar_check");
  };
  const handleCaptions=()=>{
    navigate("/captions_generator")
  }

  const handleResume=()=>{
    navigate("/resume_builder")
  }
  const handleTrans=()=>{
    navigate("/translator")
  }
  const handleSummarize=()=>{
    navigate("/summarize")
  }

  const card2Data = Array(1).fill({
    img1: "/clarityBot.png",
    img2: "/t.png",
    title: "ClarityBot",
    description: "TO GENERATE YOUTUBE THUMBNAIL",
  });

  return (
    <div className="bg-[#1E1C2A] min-h-screen flex flex-col items-center py-10 space-y-10 text-white">
      {/* Header */}
      <h1 className="text-3xl font-bold italic">
        <span className="text-white">TRY </span>
        <span className="text-orange-500">GENIE!</span>
      </h1>

      {/* Email Input Section */}
      <div className="flex items-center space-x-4 bg-white rounded-md overflow-hidden px-4 py-2">
        <input
          type="email"
          placeholder="ENTER YOUR EMAIL"
          className="px-4 py-2 w-64 outline-none text-black bg-white placeholder-gray-500"
        />
        <button className="bg-[#000080] text-white text-sm px-4 py-2 rounded hover:bg-blue-900 font-semibold">
          GET STARTED
        </button>
      </div>

      {/* Grid of Card2s */}
      <div className="grid grid-cols-3 gap-6 mt-4">
        {/* grammar guard */}
        <div className="bg-white rounded-xl shadow-md p-4 w-60 flex flex-col items-center space-y-2 transform transition duration-300 hover:scale-105 hover:shadow-xl">
          {/* Top Image */}
          <img
            src="/grammar.png"
            alt="Card Top"
            className="w-20 h-20 mt-2 rounded-full"
          />

          {/* Title */}
          <h3 className="font-semibold text-center text-md text-gray-800 leading-tight">
            GrammarGuard
          </h3>

          {/* Task Info */}
          <p className="text-xs text-gray-600 text-center">
            25.2K tasks completed
          </p>

          {/* Rating */}
          <p className="text-xs text-red-500 font-medium text-center">
            ★ 4.28 (2505 reviews)
          </p>

          {/* Button */}
          <button
            className="mt-2 w-24 px-4 py-1 text-sm font-medium border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition"
            onClick={handleGrmmar}
          >
            Go
          </button>
        </div>
        {/* captions generating */}
        <div className="bg-white rounded-xl shadow-md p-4 w-60 flex flex-col items-center space-y-2 transform transition duration-300 hover:scale-105 hover:shadow-xl">
          {/* Top Image */}
          <img
            src="/captionCrafter.png"
            alt="Card Top"
            className="w-20 h-20 mt-2 rounded-full"
          />

          {/* Title */}
          <h3 className="font-semibold text-center text-md text-gray-800 leading-tight">
          Social Media Caption Bot
          </h3>

          {/* Task Info */}
          <p className="text-xs text-gray-600 text-center">
            25.2K tasks completed
          </p>

          {/* Rating */}
          <p className="text-xs text-red-500 font-medium text-center">
            ★ 4.28 (2505 reviews)
          </p>

          {/* Button */}
          <button
            className="mt-2 w-24 px-4 py-1 text-sm font-medium border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition"
            onClick={handleCaptions}
          >
            Go
          </button>
        </div>
        {/* Resume */}
        <div className="bg-white rounded-xl shadow-md p-4 w-60 flex flex-col items-center space-y-2 transform transition duration-300 hover:scale-105 hover:shadow-xl">
          
          <img
            src="/resume.png"
            alt="Card Top"
            className="w-20 h-20 mt-2 rounded-full"
          />

          
          <h3 className="font-semibold text-center text-md text-gray-800 leading-tight">
          Resume Builder
          </h3>

          
          <p className="text-xs text-gray-600 text-center">
            25.2K tasks completed
          </p>

          
          <p className="text-xs text-red-500 font-medium text-center">
            ★ 4.28 (2505 reviews)
          </p>

          {/* Button */}
          <button
            className="mt-2 w-24 px-4 py-1 text-sm font-medium border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition"
            onClick={handleResume}
          >
            Go
          </button>
        </div>
        {/* Translator */}
        <div className="bg-white rounded-xl shadow-md p-4 w-60 flex flex-col items-center space-y-2 transform transition duration-300 hover:scale-105 hover:shadow-xl">
          {/* Top Image */}
          <img
            src="/translator.png"
            alt="Card Top"
            className="w-20 h-20 mt-2 rounded-full"
          />

          {/* Title */}
          <h3 className="font-semibold text-center text-md text-gray-800 leading-tight">
          Translator
          </h3>

          {/* Task Info */}
          <p className="text-xs text-gray-600 text-center">
            25.2K tasks completed
          </p>

          {/* Rating */}
          <p className="text-xs text-red-500 font-medium text-center">
            ★ 4.28 (2505 reviews)
          </p>

          {/* Button */}
          <button
            className="mt-2 w-24 px-4 py-1 text-sm font-medium border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition"
            onClick={handleTrans}
          >
            Go
          </button>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4 w-60 flex flex-col items-center space-y-2 transform transition duration-300 hover:scale-105 hover:shadow-xl">
          {/* Top Image */}
          <img
            src="/summamrize.png"
            alt="Card Top"
            className="w-20 h-20 mt-2 rounded-full"
          />

          {/* Title */}
          <h3 className="font-semibold text-center text-md text-gray-800 leading-tight">
          SummarizePro
          </h3>

          {/* Task Info */}
          <p className="text-xs text-gray-600 text-center">
            25.2K tasks completed
          </p>

          {/* Rating */}
          <p className="text-xs text-red-500 font-medium text-center">
            ★ 4.28 (2505 reviews)
          </p>

          {/* Button */}
          <button
            className="mt-2 w-24 px-4 py-1 text-sm font-medium border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition"
            onClick={handleSummarize}
          >
            Go
          </button>
        </div>
        {/* Remaining cards */}
        {card2Data.map((card, index) => (
          <Card2
            key={index}
            img1={card.img1}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

      {/* Card1s with alternating movement */}
      <div className="flex flex-col space-y-6 items-center w-full mt-8">
        <div className="flex justify-center w-full overflow-visible">
          <div className={`w-fit ${overMoveLeft}`}>
            <div
              className="p-6 rounded-xl shadow-md text-black w-[500px] h-[220px] flex items-center"
              style={{ backgroundColor: "#EFC1FF" }}
            >
              <div className="flex items-center space-x-6 w-full">
                <img
                  src="/aiImage.png"
                  alt="Card Illustration"
                  className="w-36 h-auto rounded-md"
                />
                <div className="flex flex-col justify-between h-full w-full">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-center">
                      AI TEXT GENERATION
                    </h2>
                    <p className="text-sm leading-snug text-center">
                      Instantly create high-quality content powered by advanced
                      AI. From blog posts to product descriptions, generate it
                      all in seconds.
                    </p>
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
          </div>
        </div>

        <div className="flex justify-center w-full overflow-visible">
          <div className={`w-fit ${overMoveRight}`}>
            <Card1
              title="AI IMAGE GENERATOR"
              description="Create stunning visuals and compelling content instantly with the power of AI. Perfect for blogs, marketing, and creative projects."
              imageSrc="/aiImage.png"
              cardColor="#86A1FE"
            />
          </div>
        </div>

        <div className="flex justify-center w-full overflow-visible">
          <div className={`w-fit ${overMoveLeft}`}>
            <Card1
              title="AI SCRIPT WRITER"
              description="Generate engaging scripts for videos, podcasts, ads, and more in seconds. Let AI bring your ideas to life."
              imageSrc="/aiImage.png"
              cardColor="#DEFFBE"
            />
          </div>
        </div>
      </div>

      {/* More Tools Section */}
      <div className="bg-[#1E1C2A] py-10 px-4 text-white flex flex-col items-center">
        <h2 className="text-xl font-bold mb-8 text-center uppercase">
          More Tools For You and Upcoming Tools
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          <Card3 imageSrc="/Agent.png" title="AI LOGO MAKER" />
          <Card3 imageSrc="/age.png" title="AI SCRIPT WRITER" />
          <Card3 imageSrc="/Agent.png" title="AI COMIC DESIGN" />
          <Card3 imageSrc="/Agent.png" title="MORE" />
        </div>
      </div>
    </div>
  );
}
