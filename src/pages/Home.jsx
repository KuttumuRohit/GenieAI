import Card2 from '../components/Card2';
import Card1 from '../components/Card1';
import Card3 from '../components/Card3';

export default function Home() {
  const overMoveLeft = 'translate-x-[-250px]';
  const overMoveRight = 'translate-x-[250px]';

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

      {/* Grid of 6 Card2s - manually placed */}
      <div className="grid grid-cols-3 gap-6 mt-4">
        <Card2
          img1="/.png"
          img2="/t.png"
          title="YOUTUBE | THUMB NAIL"
          description="TO GENERATE YOUTUBE THUMBNAIL"
        />
        <Card2
          img1="/.png"
          img2="/t.png"
          title="YOUTUBE | THUMB NAIL"
          description="TO GENERATE YOUTUBE THUMBNAIL"
        />
        <Card2
          img1="/.png"
          img2="/t.png"
          title="YOUTUBE | THUMB NAIL"
          description="TO GENERATE YOUTUBE THUMBNAIL"
        />
        <Card2
          img1="/.png"
          img2="/t.png"
          title="YOUTUBE | THUMB NAIL"
          description="TO GENERATE YOUTUBE THUMBNAIL"
        />
        <Card2
          img1="/.png"
          img2="/t.png"
          title="YOUTUBE | THUMB NAIL"
          description="TO GENERATE YOUTUBE THUMBNAIL"
        />
        <Card2
          img1="/.png"
          img2="/t.png"
          title="YOUTUBE | THUMB NAIL"
          description="TO GENERATE YOUTUBE THUMBNAIL"
        />
      </div>

      {/* Card1s with alternating movement */}
      <div className="flex flex-col space-y-6 items-center w-full mt-8">
        <div className="flex justify-center w-full overflow-visible">
          <div className={`w-fit ${overMoveLeft}`}>
            <Card1 
              title="AI TEXT GENERATION"
              description="AI Text Generation – Instantly create high-quality content powered by advanced artificial intelligence. From blog posts to product descriptions, generate it all in seconds"
              imageSrc="/aiImage.png"
              cardColor="#EFC1FF"
            />
          </div>
        </div>

        <div className="flex justify-center w-full overflow-visible">
          <div className={`w-fit ${overMoveRight}`}>
            <Card1 
              title="AI IMAGE GENERATOR"
              description="AI Text & Image Generator\nCreate stunning visuals and compelling content instantly with the power of AI.\nPerfect for blogs, marketing, and creative projects"
              imageSrc="/aiImage.png"
              cardColor="#86A1FE"
            />
          </div>
        </div>

        <div className="flex justify-center w-full overflow-visible">
          <div className={`w-fit ${overMoveLeft}`}>
            <Card1 
              title="AI Script Writer"
              description="Generate engaging scripts for videos, podcasts, ads, and more in seconds. Let AI bring your ideas to life"
              imageSrc="/aiImage.png"
              cardColor="#DEFFBE"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#1E1C2A] py-10 px-4 text-white flex flex-col items-center">
      <h2 className="text-xl font-bold mb-8 text-center uppercase">
        More Tools For You and Upcoming Tools
      </h2>
      
      <div className="flex flex-wrap justify-center gap-8">
        <Card3 
          imageSrc="/Agent.png" 
          title="AI Logo Maker" 
        />
        <Card3 
          imageSrc="/age.png"  
          title="AI SCRIPT WRITER" 
        />
        <Card3 
          imageSrc="/Agent.png"  
          title="AI COMIC DESIGN" 
        />
        <Card3 
          imageSrc="/Agent.png"  
          title="MORE" 
        />
      </div>
    </div>  
    </div>
  );
}
