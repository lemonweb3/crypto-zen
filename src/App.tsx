import { useState, useEffect } from "react";
import { quotes } from "./quotes";
import { PixelBorder } from "./components/PixelBorder";
import { generateFrameMetadata } from "./frame";

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function App() {
  const [quote, setQuote] = useState(getRandomQuote());

  // Обновляем мета-теги при изменении цитаты
  useEffect(() => {
    const metadata = generateFrameMetadata(quote);
    // Обновляем мета-теги для Frame
    Object.entries(metadata).forEach(([key, value]) => {
      let meta = document.querySelector(`meta[property="${key}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', key);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', value);
    });
  }, [quote]);

  const handleNewQuote = () => {
    setQuote(getRandomQuote());
  };

  const handleShare = () => {
    const cast = encodeURIComponent(quote + " #CryptoZen");
    const url = `https://warpcast.com/~/compose?text=${cast}`;
    window.open(url, "_blank");
  };

  return (
    <div
      className="flex flex-col items-center justify-center relative overflow-hidden min-h-screen px-2"
      style={{
        background: "linear-gradient(135deg, #a78bfa, #f472b6, #fdba74)",
        fontFamily: "'Press Start 2P', monospace",
        minHeight: "100dvh",
      }}
    >
      {/* Остальной код остаётся без изменений */}
      <div className="absolute top-2 left-2 text-purple-300 text-lg sm:text-2xl select-none pointer-events-none">+</div>
      <div className="absolute bottom-10 right-4 text-pink-300 text-base sm:text-xl select-none pointer-events-none">+</div>
      <div className="absolute top-1/2 left-1/4 text-orange-200 text-sm sm:text-lg select-none pointer-events-none">+</div>
      <div className="absolute bottom-2 left-1/2 text-purple-400 text-xl sm:text-3xl select-none pointer-events-none">+</div>
      <div className="absolute top-1/4 right-1/3 text-pink-400 text-base sm:text-xl select-none pointer-events-none">+</div>

      <PixelBorder className="w-full max-w-xs sm:max-w-sm bg-white bg-opacity-95 flex flex-col items-center mb-8 p-4 sm:p-8">
        <p
          key={quote}
          className="text-base sm:text-lg text-center mb-6 sm:mb-10 text-black break-words animate-fade-in"
        >
          {quote}
        </p>
        <div className="flex flex-col gap-4 w-full">
          <button
            onClick={handleNewQuote}
            className="w-full py-3 sm:py-4 bg-blue-500 text-white text-base sm:text-lg rounded-none font-bold border-4 border-black shadow-[4px_4px_0_#222] hover:bg-blue-600 transition"
            style={{ fontFamily: "'Press Start 2P', monospace" }}
          >
            ✨ New Quote
          </button>
          <button
            onClick={handleShare}
            className="w-full py-3 sm:py-4 bg-green-500 text-white text-base sm:text-lg rounded-none font-bold border-4 border-black shadow-[4px_4px_0_#222] hover:bg-green-600 transition"
            style={{ fontFamily: "'Press Start 2P', monospace" }}
          >
            📤 Share
          </button>
          <button
            className="w-full py-3 sm:py-4 bg-yellow-400 text-black text-base sm:text-lg rounded-none font-bold border-4 border-black shadow-[4px_4px_0_#222] hover:bg-yellow-300 transition"
            style={{ fontFamily: "'Press Start 2P', monospace" }}
          >
            🪙 Mint as NFT
          </button>
        </div>
      </PixelBorder>
    </div>
  );
}

export default App;