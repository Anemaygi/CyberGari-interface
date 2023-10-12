import React from 'react';
import { FiSearch } from "react-icons/fi";

const ReportButton: React.FC = () => {
  const handleClick = () => {
    console.log("clicouuu");
  };
  return (
    <div className={`border-2 border-roxo1 rounded-full p-2 m-4 inline-flex cursor-pointer h-full w-full`} onClick={handleClick}>
      <div className="shadow-sm bg-gradient-to-r m-1 from-roxo1 to-roxo2 w-full rounded-full flex items-center justify-center">
        <div className="text-white"><FiSearch size="72"/></div>
      </div>
    </div>
  );
};


export default ReportButton;
