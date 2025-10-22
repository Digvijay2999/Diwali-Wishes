import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import videoFile from '/videos/video-4.mp4';
import audioFile from '/audio/Diwali_bgm.mp3';

const Wishes = () => {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.play().catch(error => {
        console.log('Audio autoplay failed:', error);
      });
    }
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        className="relative z-1 top-0 left-0 w-screen h-full object-cover"
        autoPlay
        loop
        muted
        src={videoFile}
      />
      <div className="absolute inset-0 bg-transparent z-2 bg-opacity-50 flex flex-col justify-end my-10 items-center p-4">
        <audio ref={audioRef} loop src={audioFile} />
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-pulse text-center drop-shadow-lg">
          🪔 Wishing You a Very Happy Diwali 🪔
        </h1>
        <p className="text-lg md:text-xl text-white text-center max-w-2xl mb-8 animate-bounce drop-shadow-md">
          May the festival of lights fill your life with joy, prosperity, and boundless happiness. Let your days be as bright as diyas and your nights as joyful as fireworks! 🎆
        </p>
        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={toggleMute}
            className="px-6 py-3 bg-linear-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg shadow-red-500/50 hover:scale-105 transition-all duration-300 drop-shadow-lg"
          >
            {isMuted ? 'Unmute' : 'Mute'} Music
          </button>
          <button
            onClick={() => navigate('/fireworks')}
            className="px-6 py-3 bg-linear-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/50 hover:scale-105 transition-all duration-300 drop-shadow-lg"
          >
            Watch Fireworks 🎆
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wishes;
