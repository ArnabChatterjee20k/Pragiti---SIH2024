import React from 'react';

const InputBox = ({ type, placeholder, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full p-2 border-2 border-[#516774] rounded pl-4 ${className}`}
    />
  );
};

export default InputBox;