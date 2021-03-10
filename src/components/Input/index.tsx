/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { InputHTMLAttributes } from 'react';
import { FiSearch } from 'react-icons/fi';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register?: any;
}

const Input: React.FC<InputProps> = ({ name, register, ...rest }) => {
  return (
    <div className="relative">
      <span className="absolute left-2 top-1/4 text-lg text-gray-400 ">
        <FiSearch />
      </span>
      <input
        id={name}
        name={name}
        ref={register}
        className=" bg-gray-800 focus:outline-none w-full text-sm text-white placeholder-gray-400 border border-gray-900 rounded-lg py-2 pl-8 h-8"
        {...rest}
      />
    </div>
  );
};

export default Input;
