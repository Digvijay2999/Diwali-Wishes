import { useNavigate } from 'react-router-dom';
import imageFile from '/images/happy-diwali-deepavali.jpg';


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img
        className="relative top-0 left-0 w-screen h-full object-cover z-1"
        src={imageFile}
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end items-center my-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 animate-pulse drop-shadow-lg z-2">
          🎇 Happy Diwali 🎇
        </h1>
        <button
          onClick={() => navigate('/wishes')}
          className="px-8 py-4 bg-linear-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-lg shadow-lg shadow-yellow-500/50 animate-bounce hover:animate-none hover:scale-105 transition-all duration-300 drop-shadow-lg z-2"
        >
          Receive Blessings ✨
        </button>
      </div>
    </div>
  );
};

export default Home;
