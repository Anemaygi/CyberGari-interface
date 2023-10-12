import React from 'react';

interface ButtonProps {
  title: String;
  handleClick: React.MouseEventHandler<HTMLDivElement>;
}

const Button: React.FC<ButtonProps> = ({title, handleClick}) => {
  return (
   
      <div className="shadow-sm bg-gradient-to-r m-3 from-roxo1 to-roxo2 w-auto py-2 px-20 cursor-pointer rounded-2xl flex items-center justify-center" onClick={handleClick}>
        <div className="text-white">{title}</div>
      </div>
  );
};


export default Button;



  // const handleClick = () => {
  //   console.log("clicouuu");
  // };

