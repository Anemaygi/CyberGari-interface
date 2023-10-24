import React from 'react';

interface ButtonProps {
  title: String;
  handleClick: React.MouseEventHandler<HTMLDivElement>;
  icon: React.ReactNode;
}

const IconButton: React.FC<ButtonProps> = ({title, handleClick, icon}) => {
  return (
   
      <div className="shadow-sm text-white text-[1vw] font-bold bg-gradient-to-r m-3 from-roxo1 to-roxo2 w-auto py-2 px-20 cursor-pointer rounded-2xl flex items-center justify-center" onClick={handleClick}>
        <div className='mr-3'>{icon}</div>
        <div>{title}</div>
      </div>
  );
};


export default IconButton;

