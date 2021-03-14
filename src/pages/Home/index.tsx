import React from 'react';
import Input from '../../components/Input';

const Home: React.FC = () => {
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
        <form className="flex justify-center items-center p-2">
          <Input name="search" type="search" />
          <button
            className="text-white text-sm bg-red-500 h-7 px-3 rounded-md ml-2"
            type="submit"
          >
            Pesquisar
          </button>
        </form>
      </main>
    </div>
  );
};

export default Home;
