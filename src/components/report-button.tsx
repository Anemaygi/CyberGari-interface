import React from 'react';
import { FiSearch } from "react-icons/fi";

interface ReportButtonProps {
  size: number;
}

const ReportButton: React.FC<ReportButtonProps> = ({size}) => {
  const handleClick = () => {
    console.log("clicouuu");
  };




  return (
    <div className="shadow-md border-2 border-roxo1 rounded-full p-2 inline-flex cursor-pointer h-72 w-72" onClick={handleClick}>
      <div className="bg-gradient-to-r m-1 from-roxo1 to-roxo2 w-full rounded-full flex items-center justify-center">
        <div className="text-white"> <FiSearch size={size}/> </div>
      </div>
    </div>
  );
};


export default ReportButton;
