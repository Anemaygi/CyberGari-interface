import React from 'react';
import { FiSettings, FiHome, FiLogOut, FiTag } from "react-icons/fi";
import LogoIcon from '@/img/logo.svg';

const SideBar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 h-[95%] w-16 justify-content m-4 rounded-3xl flex flex-col bg-[#121625] text-white shadow-md">

      <img src={LogoIcon} alt="Logo" className="h-10 w-10 m-3" />
      <div className="h-px bg-gradient-to-r from-rosagrad to-roxograd mx-3"></div>

      <div className="flex flex-grow flex-col">
        <SideBarIcon icon={<FiHome size="28" />} href="sidebar" />
        <SideBarIcon icon={<FiSettings size="28" />} href="algo" />
        <SideBarIcon icon={<FiTag size="28" />} href="a" />
      </div>

      <div className="h-px bg-gradient-to-r from-rosagrad to-roxograd mx-3"></div>
      <SideBarIcon icon={<FiLogOut size="28" />} href="a" />
    </div>
  );
};


type SideBarIconProps = {
  icon: React.ReactNode;
  href: string;
};

const SideBarIcon: React.FC<SideBarIconProps> = ({ icon, href }) => (
  <a href={href}>
    <div className={`relative flex items-center justify-center h-12 w-12 m-2 shadow-lg 
                  rounded-2xl text-white transition-all duration-300 ease-linear
                  hover:text-roxo1 
                  ${'/' + href === window.location.pathname ? 'bg-gradient-to-r from-rosagrad to-roxograd hover:opacity-75 hover:text-white ' : 'bg-none'}`}
    >
      {icon}

    </div>
  </a>
);

export default SideBar;
