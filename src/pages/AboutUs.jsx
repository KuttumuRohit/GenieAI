import Card1 from '../components/Card1';
import Card3 from '../components/Card3';

export default function About() {
  const moveLeft = 'translate-x-[-250px]';
  const moveRight = 'translate-x-[250px]';

  return (
    <div className="bg-[#1E1C2A] min-h-screen flex flex-col items-center py-10 space-y-10 text-white">
      {/* Header */}
      <h1 className="text-3xl font-bold italic">
        <span className="text-white">ABOUT </span>
        <span className="text-orange-500">GENIE!</span>
      </h1>

      {/* Intro Blabber */}
      <p className="text-center max-w-3xl px-4 text-lg leading-relaxed">
        At Genie, we believe in the power of gibberflux and the unified theory of digital fluffernoons.
        Our team of algorithmic whisperers and pixel sorcerers are dedicated to crafting neurofizzled experiences
        that transcend the bounds of sanity and slide into your creative subconscious like butter on quantum toast.
      </p>

      {/* Fun AI Offerings - using Card1 */}
      <div className="flex flex-col space-y-6 items-center w-full mt-8">
        <div className="flex justify-center w-full overflow-visible">
          <div className={`w-fit ${moveLeft}`}>
            <Card1 
              title="AI DRIZZLE MAKER"
              description="Generate drizzle-level nonsense that sounds intelligent but means absolutely nothing. Perfect for meetings."
              imageSrc="/aiImage.png"
              cardColor="#FFD6A5"
            />
          </div>
        </div>

        <div className="flex justify-center w-full overflow-visible">
          <div className={`w-fit ${moveRight}`}>
            <Card1 
              title="PIXEL PRETENDER 9000"
              description="Turn invisible ideas into pixel-perfect illusions that may or may not exist. Warning: may cause hallucinations."
              imageSrc="/aiImage.png"
              cardColor="#A0E7E5"
            />
          </div>
        </div>

        <div className="flex justify-center w-full overflow-visible">
          <div className={`w-fit ${moveLeft}`}>
            <Card1 
              title="SCRIPTED NONSENSIFIER"
              description="Input: reality. Output: majestic gibberish. Make your scripts sound profound and slightly confusing."
              imageSrc="/aiImage.png"
              cardColor="#FFAEBC"
            />
          </div>
        </div>
      </div>

      {/* Team or Extra Tools - Card3 style */}
      <div className="bg-[#1E1C2A] py-10 px-4 text-white flex flex-col items-center">
        <h2 className="text-xl font-bold mb-8 text-center uppercase">
          Our Quantum Coders
        </h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          <Card3 imageSrc="/Agent.png" title="Zog the Brainwave Alchemist" />
          <Card3 imageSrc="/Agent.png" title="AI Whisperer Luna" />
          <Card3 imageSrc="/Agent.png" title="Pixel Prophet Neo" />
          <Card3 imageSrc="/Agent.png" title="Chief Confuser Bot-X" />
        </div>
      </div>
    </div>
  );
}
