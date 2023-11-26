import React, { useEffect, useState } from 'react';

import LogoHorizontal from '@/img/logoHorizontal.png';
import Button from '@/components/button';
import SettingsForm from '@/components/forms/settings-form/settings-form';
import { userConfig, PeriodicityScale } from '@/components/forms/settings-form/settings-form';
import { useNavigate } from 'react-router-dom';

const FirstSettings: React.FC = () => {

  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [isPageLoading, setPageLoading] = React.useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setPageLoading(false), 2000)
  }, [])

  useEffect(() => {
    if (!user && localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')!));
    }
  }, [])

    
    const [userConfig, setUserConfig] = useState<userConfig>({
      id: '',
      userConfig: {
        fileExtension: false,
        fileSize: false,
        tags: false,
        numVisualizations: false,
        autExclusion: false,
        autCompression: false,
        periodicityScale: PeriodicityScale.MANUALLY,
        periodicityTime: 0,
        maxLimitScale: '',
        maxLimitValue: 0,
        lastSeen: false,
        otherData: false,
      }
  })

  useEffect(() => {
    if(user) {
      fetch(`http://localhost:8080/users/${user.userId}`, { 
        method: 'GET'})
        .then(response => response.json())
        .then(json => setUserConfig(
          {
            id: user.userId,
            userConfig: {
              fileExtension: json.userConfig.fileExtension,
              fileSize: json.userConfig.fileSize,
              tags: json.userConfig.tags,
              numVisualizations: json.userConfig.numVisualizations,
              autExclusion: json.userConfig.autExclusion,
              autCompression: json.userConfig.autCompression,
              periodicityScale: json.userConfig.periodicityScale,
              periodicityTime: json.userConfig.periodicityTime,
              maxLimitScale: json.userConfig.maxLimitScale,
              maxLimitValue: json.userConfig.maxLimitValue,
              lastSeen: json.userConfig.lastSeen,
              otherData: json.userConfig.otherData,
            }
          }
        ))
        .catch(error => console.error(error));
        setLoading(false)
    }
  },[user])

  const handleClick = () => {
    if (user) {
      fetch(`http://localhost:8080/users`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userConfig),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Status: ${response.status}`);
        }
        return response.json();
      })
      .catch(error => {
        console.error(error);
      });

      navigate('/dashboard', { replace: true });
    }
  };

  
  return (
    <div className="flex p-4 bg-secbackground">
            <div className='flex flex-col items-center shadow-lg rounded-lg w-screen h-full p-2 m-2 bg-background overflow-y-auto'>
              
              <img src={LogoHorizontal} alt="Logo" className="h-64 w-62" />
              <h1 className="text-white font-bold text-2xl">Bem-vindo ao CyberGari!</h1>
              <h2 className="text-white text-xl">Antes de começarmos, defina seus parâmetros iniciais. Você só fará isso uma vez ;)</h2>
      {
          isPageLoading && (
            <div className="h-full w-full flex mt-10">
              <img className='w-[300px] m-auto' src={'src/img/loading.gif'}></img>
            </div>
          )
      }
      {
        !isPageLoading && (
          <>
              {
                !loading && (
                  <SettingsForm isDescriptionOn userConfig={userConfig} setUserConfig={setUserConfig}/>
                )
              }
              <div className="m-4"><Button title={"Salvar configurações"} handleClick={handleClick}/></div>
          </>
        )
      }
      </div>
    </div>
  
  );
};

export default FirstSettings;
