import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input';
import api from '../../services/api';

type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
};

const Home: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  const searchMovies = useCallback(async data => {
    try {
      setLoading(true);
      const response = await api.get('/', {
        params: {
          s: data.search,
        },
      });
      localStorage.setItem(
        'lastSearchedMovies',
        JSON.stringify(response.data.Search),
      );
      setMovies(response.data.Search);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const lastSearchedMovies = localStorage.getItem('lastSearchedMovies');

    if (lastSearchedMovies) {
      setMovies(JSON.parse(lastSearchedMovies));
    }
  }, []);

  return (
    <div className=" min-h-full w-full bg-black">
      <header className="flex items-center justify-center w-full h-16">
        <div className="bg-clip-text text-transparent bg-gradient-to-r from-red-400  to-red-700 text-5xl font-black">
          <h1 className="text-3xl sm:text-7xl uppercase font-black text- text-center">
            Cinema APP
          </h1>
        </div>
      </header>
      <main>
        <div className="">
          <p className="text-white text-center text-sm">
            Bem-vindo ao mundo espetácular do cinema
          </p>
        </div>
        <form
          onSubmit={handleSubmit(searchMovies)}
          className="flex justify-center items-center p-2"
        >
          <Input name="search" type="search" register={register} />
          <button
            className="text-white text-sm bg-red-500 h-7 px-3 rounded-md ml-2"
            type="submit"
          >
            Pesquisar
          </button>
        </form>
        {movies.map(movie => (
          <p className="text-white">{movie.Title}</p>
        ))}
      </main>
    </div>
  );
};

export default Home;
