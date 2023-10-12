import React from 'react';

import LogoHorizontal from '@/img/logoVertical.png';
import Button from '@/components/button';

const FirstSettings: React.FC = () => {

    const handleClick = () => {
      console.log("Salvar")
    };
  
  return (
      <div className="flex p-4 h-screen bg-secbackground">
        <div className='flex flex-col items-center shadow-lg rounded-lg w-screen h-full p-2 m-2 bg-background overflow-y-auto'>
          
          <img src={LogoHorizontal} alt="Logo" className="h-48 w-62 mb-3" />
          <h1 className="text-white font-bold text-2xl">Bem-vindo ao CyberGari!</h1>
          <h2 className="text-white text-xl">Antes de começarmos, defina seus parâmetros iniciais. Você só fará isso uma vez ;)</h2>
          
          
          <div className="m-4"><Button title={"Salvar configurações"} handleClick={handleClick}/></div>
        
        </div>
      </div>
    
  );
};

export default FirstSettings;
