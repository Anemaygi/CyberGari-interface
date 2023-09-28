import React from 'react';
import { FiSettings, FiHome, FiLogOut, FiTag } from "react-icons/fi";
import LogoIcon from '@/img/logo.svg';


const sidebarItems = [
  { icon: <FiHome size="28" />, href: 'sidebar', title: 'Dashboard' },
  { icon: <FiSettings size="28" />, href: 'algo', title: 'Configurações' },
  { icon: <FiTag size="28" />, href: 'a', title: 'Etiquetas' },
];


const SideBar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 h-[95%] w-16 justify-content m-4 rounded-3xl flex flex-col bg-[#121625] text-white shadow-md">

      <img src={LogoIcon} alt="Logo" className="h-10 w-10 m-3" />
      <div className="h-px bg-gradient-to-r from-rosagrad to-roxograd mx-3"></div>

      <div className="flex flex-grow flex-col">

        {sidebarItems.map((item) => (
          <SideBarIcon icon={item.icon} href={item.href} title={item.title} />
        ))}

      </div>

      <div className="h-px bg-gradient-to-r from-rosagrad to-roxograd mx-3"></div>
      <SideBarIcon icon={<FiLogOut size="28" />} href="#logout" title="Log out" />
    </div>
  );
};


type SideBarIconProps = {
  icon: React.ReactNode;
  href: string;
  title: string;
};

const SideBarIcon: React.FC<SideBarIconProps> = ({ icon, href, title }) => (
  <a href={href}>
    <div className={`relative flex items-center justify-center h-12 w-12 m-2 shadow-lg 
                  rounded-2xl text-white transition-all duration-300 ease-linear
                  hover:text-roxo1 group
                  ${'/' + href === window.location.pathname ? 'bg-gradient-to-r from-rosagrad to-roxograd hover:text-white ' : 'bg-none'}`}
    >
      {icon}


      <span className={`absolute w-auto p-2 m-1 min-w-max left-14 rounded-md shadow-md
                      text-white bg-[#121625] text-xs font-bold transition-all duration-100 origin-left
                      scale-0 group-hover:scale-100`}>
        {title}
      </span>

    </div>
  </a>
);

export default SideBar;
