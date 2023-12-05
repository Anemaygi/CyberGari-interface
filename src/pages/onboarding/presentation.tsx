import React, { useEffect, useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';

import { FiTrash2, FiSearch, FiLayout } from "react-icons/fi";

import LogoHorizontal from '@/img/logoHorizontal.png';
import CardPresentation from '@/components/cardPresentation';
import Button from '@/components/button';

const Presentation: React.FC = () => {
  
  const cardContent = [
    { 
      texto1: "O CyberGari coletará os parâmetros que você autorizar e analisará seus arquivos!",
      texto2: "Os menos importantes serão compactados.",
      icon: <FiTrash2 size="62" />
    },
    { 
      texto1: "Você pode fazer uma análise no momento que quiser, basta clicar no botão de lupa.",
      texto2: "Além disso, defina quando fazer automaticamente.",
      icon: <FiSearch size="62" />
    },
    { 
      texto1: "No dashboard, veja o quanto você economizou estatísticas e interaja com os arquivos!",
      texto2: "Comprima, descomprima, crie labels ou delete.",
      icon: <FiLayout size="62" />
    },
  ];

    const navigate = useNavigate();
    const handleClick = () => {
      navigate('/firstsettings');
    };
  
    const [user, setUser] = useState<any | null>(null);
    useEffect(() => {
      if (!user && localStorage.getItem('user')) {
        setUser(JSON.parse(localStorage.getItem('user')!));
      }
    }, []);

    useEffect(() => {
      if (!user) {
        navigate('/login');
      }
    }, [user, navigate]);

    
  if (user) return (
      <div className="flex p-4 h-screen bg-secbackground">
        <div className='flex flex-col items-center shadow-lg rounded-lg w-screen h-full p-2 m-2 bg-background overflow-y-auto'>
          
          <img src={LogoHorizontal} alt="Logo" className="h-64 w-62" />
          <h1 className="text-white font-bold text-2xl">Bem-vindo ao CyberGari!</h1>
          <h2 className="text-white text-xl">Estamos animados por tê-lo aqui</h2>
          
          <div className="m-4 flex flex-wrap justify-center align-center">
            {cardContent.map((item) => (
            <CardPresentation texto1={item.texto1} texto2={item.texto2} icon={item.icon} />
          ))}
          </div>
          

          <Button title={"Continuar"} handleClick={handleClick}/>
        
        </div>
      </div>
    
  );
  return (
    <div className="h-full w-full flex mt-10">
      <img className='w-[300px] m-auto' src={'src/img/loading.gif'}></img>
    </div>
    );
};

export default Presentation;
