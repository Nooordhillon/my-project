// src/TopAnime.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import SliderImages from '../components/SliderImages';


const AnimeData = () => {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await axios.get('https://api.jikan.moe/v4/top/anime');
        setAnimeList(response.data.data);
      } catch (err) {
        setError('ckeck your internet connection');
      } finally {
        setLoading(false);
      }
    };

    fetchAnime();
  }, []);

  if (loading) return (<Loading />)

  
  if (error) return (<div className="text-center py-10 text-red-500">{error}</div>);

  return (
    <div className="bg-slate-900 text-white w-full">
      {/* Header Section */}
      <header className="w-full bg-slate-950 p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.DvumVOlIPeW0EzF2c6FLgQAAAA&pid=ImgDet&h=170"
            alt="Logo"
            className="h-16"
          />
          <h1 className="text-3xl font-bold pl-4">Anime.Tv</h1>
        </div>
        <nav className="flex space-x-6 text-lg">
          <a href="#" className="text-blue-400 hover:text-blue-500">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Manga</a>
          <a href="#" className="text-red-500 hover:text-red-600">Login</a>
        </nav>
        <div className="flex items-center">

          <input
            type="text"
            placeholder="Search anime"
            className="h-10 pl-2 text-black pr-10 rounded-md border-2 border-gray-400 focus:border-blue-500"
          />
          <span className="ml-2 text-2xl text-gray-400">⌕</span>
        </div>
      </header>

      <SliderImages/>
      {/* Anime List Section */}
      <main className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {animeList.map((anime) => (
           
          <div
            key={anime.mal_id}
            className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
          >
           

<div className=' data-carousel="slide" aria-live="polite"'>  <img
              src={anime.images.jpg.large_image_url}
              alt={anime.title}
              className="w-full h-56 object-cover"
            />
            </div>
            {/* <img
              src={anime.images.jpg.large_image_url}
              alt={anime.title}
              className="w-full h-56 object-cover"
            /> */}
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{anime.title}</h3>
              <p className='text-ellipsis	line-clamp-2'>{anime.synopsis}</p>
              <button className="text-gray-400 mb-1 bg-blue-800  rounded p-1">  Score: {anime.score} </button>
              <p className="bg-green-600 inline-block ml-4 px-2 py-1 text-sm rounded">

                Episodes: {anime.episodes || 'N/A'} </p>
            </div>
          </div>
        ))}
      </main>                                

      {/* Footer */}
      <footer className="bg-slate-950 p-4 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Anime.Tv. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AnimeData;
