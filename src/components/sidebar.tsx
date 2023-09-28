import React from 'react';
import { FiSettings, FiHome, FiLogOut, FiTag } from "react-icons/fi";
import { ReactComponent as LogoIcon } from '@/img/logo.svg';

const SideBar: React.FC = () => {
  return (
    <div className="flex">
      <div className="fixed top-0 left-0 h-screen w-16  m-4 rounded-3xl flex flex-col bg-[#121625] text-white shadow-md">
      <SideBarIcon icon={<LogoIcon size="28"/>} href="a" />
        <SideBarIcon icon={<FiHome size="28"/>} href="a" />

        <SideBarIcon icon={<FiSettings size="28"/>} href="a" />
        <SideBarIcon icon={<FiTag size="28"/>} href="a" />
        <SideBarIcon icon={<FiLogOut size="28"/>} href="a" />
      </div>
    </div>
  );
};


type SideBarIconProps = {
  icon: React.ReactNode;
  href: string; 
};

const SideBarIcon: React.FC<SideBarIconProps> = ({ icon, href }) => (
  <div className="relative flex items-center justify-center h-12 w-12 m-2 shadow-lg 
                  rounded-2xl hover:bg-gradient-to-r from-rosagrad to-roxograd text-white
                  transition-all duration-300 ease-linear">
    {icon}
  </div>
);

export default SideBar;
