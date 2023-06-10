import React from 'react'
import Movie from './Movie';

export default async function MovieCard()  {
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
      );
      const res = await data.json();
  return (
    <div className='w-full max-w-[1240px] mx-auto'>
        <div className="grid gap-16 grid-cols-fluid py-16">
      {res.results.map((movie) => (
          <Movie key={movie.id}
          id={movie.id}
          title={movie.title}
          poster={movie.poster_path}
          releaseDate={movie.release_date} />
        ))} 
      
      </div>
    </div>
  )
}
