import React from 'react';

export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
}
const MovieCard: React.FC<Movie> = ({ Poster, Title }) => {
  return (
    <div className="flex flex-col relative">
      <img src={Poster} className="w-full" alt={Title} />
      <div className="absolute w-full  bottom-0 p-1 h-20 flex justify-center items-center bg-gradient-to-t from-gray-900 via-gray-800 to-gray-transparent ">
        <h4 className="text-white text-md text-center font-medium ">{Title}</h4>
      </div>
    </div>
  );
};

export default MovieCard;
