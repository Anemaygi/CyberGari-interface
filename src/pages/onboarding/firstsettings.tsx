import React, { useState } from 'react';

import LogoHorizontal from '@/img/logoHorizontal.png';
import Button from '@/components/button';
import SettingsForm from '@/components/forms/settings-form/settings-form';
import { userConfig, PeriodicityScale } from '@/components/forms/settings-form/settings-form';

const FirstSettings: React.FC = () => {

    const handleClick = () => {
      console.log(userConfig)
    };

    const [userConfig, setUserConfig] = useState<userConfig>({
      fileExtension: false,
      fileSize: false,
      tags: false,
      numVisualizations: false,
      autExclusion: false,
      autCompression: false,
      periodicityScale: PeriodicityScale.MANUALLY,
      periodicityTime: 0,
      maxLimit: '',
      maxLimitValue: 0,
  })
  
  return (
      <div className="flex p-4 bg-secbackground">
        <div className='flex flex-col items-center shadow-lg rounded-lg w-screen h-full p-2 m-2 bg-background overflow-y-auto'>
          
          <img src={LogoHorizontal} alt="Logo" className="h-64 w-62" />
          <h1 className="text-white font-bold text-2xl">Bem-vindo ao CyberGari!</h1>
          <h2 className="text-white text-xl">Antes de começarmos, defina seus parâmetros iniciais. Você só fará isso uma vez ;)</h2>
          <SettingsForm isDescriptionOn userConfig={userConfig} setUserConfig={setUserConfig}/>
          
          <div className="m-4"><Button title={"Salvar configurações"} handleClick={handleClick}/></div>
        
        </div>
      </div>
    
  );
};

export default FirstSettings;
