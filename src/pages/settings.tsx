import React, { useEffect, useState } from 'react';
import SideBar from '@/components/sidebar';
import SettingsForm from '@/components/forms/settings-form/settings-form';
import { FiSave } from 'react-icons/fi';
import { userConfig, PeriodicityScale } from '@/components/forms/settings-form/settings-form';

interface IconProps {
  icon: React.ReactNode;
  handleClick: () => void;
}

function Icon({ icon, handleClick }: IconProps) {
  return (
    <div className="flex justify-center lg:flex-none lg:justify-end mx-8 ">
      <div className="cursor-pointer border-2 border-roxo1 rounded-full p-2 mr-10 mt-[-10%]  flex h-40 w-40" onClick={handleClick}>
        <div className="shadow-sm bg-gradient-to-r m-1 from-roxo1 to-roxo2 w-full rounded-full flex items-center justify-center">
          <div className="text-white"> {icon} </div>
        </div>
      </div>
    </div>
  )
}

const Settings: React.FC = () => {

  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
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
    }
  },[user])

  const handleClick = () => {
    // save data
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
    }
  };



  return (
    <div className="flex p-4 h-screen bg-secbackground">
      <div className='flex shadow-lg rounded-lg w-screen h-full p-2 bg-background'>
        <SideBar />
        {
          loading && (
            <div className="h-full w-full flex">
              <img className='w-[300px] m-auto' src={'src/img/loading.gif'}></img>
            </div>
          )
        }
        {
          !loading && (
            <div className="overflow-y-auto w-full flow-root static">
              <div><SettingsForm isDescriptionOn={false} userConfig={userConfig} setUserConfig={setUserConfig} /></div>
              <div><Icon icon={<FiSave size="62" />} handleClick={handleClick} /></div>

            </div>
          )
        }
      </div>
    </div>

  );
};

export default Settings;
