import { useEffect, useRef, useState } from 'react';
import videoFile from '/videos/Main video.mp4';
import audioFile from '/audio/Diwali_bgm.mp3';

const Fireworks = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const handleAudioToggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!isPlaying) {
      try {
        await audio.play();
        setIsPlaying(true);
        setIsMuted(false);
      } catch (error) {
        console.log('Audio play failed:', error);
      }
    } else {
      audio.muted = !audio.muted;
      setIsMuted(audio.muted);
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
      <div className="absolute inset-0 bg-transparent h-full z-2 bg-opacity-10 flex flex-col justify-between items-center p-4">
        <audio ref={audioRef} loop src={audioFile} />
        <h1 className="text-3xl py-4 md:text-5xl font-bold text-white mb-6 animate-pulse text-center drop-shadow-lg">
          🎆 Spectacular Fireworks Show 🎆
        </h1>
        <div className='flex flex-col justify-center items-center'>
        <p className="text-lg md:text-xl py-2 bg-opacity-99 text-white text-center max-w-2xl mb-8 animate-bounce drop-shadow-md">
          May the spectacular fireworks light up your sky and bring excitement to your Diwali celebrations! Let the bursts of color and light symbolize the joy and prosperity in your life. Happy Diwali! 🪔
        </p>
        <button
          onClick={handleAudioToggle}
          className="px-6 py-3 bg-linear-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/50 hover:scale-105 transition-all duration-300 drop-shadow-lg"
        >
          {isPlaying ? (isMuted ? 'Unmute' : 'Mute') : 'Play'} Music
        </button>
        </div>
      </div>
    </div>
  );
};

export default Fireworks;
