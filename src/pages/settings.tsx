import React from 'react';
import SideBar from '@/components/sidebar';
import SettingsForm from '@/components/forms/settings-form/settings-form';
import { FiSave } from 'react-icons/fi';

interface IconProps {
  icon: React.ReactNode;
  handleClick: () => void;
}

function Icon({ icon }: IconProps) {
  return (
    <div className="flex justify-center lg:flex-none lg:justify-end mx-8 ">
    <div className="cursor-pointer border-2 border-roxo1 rounded-full p-2 mr-10 mt-[-12%]  flex h-40 w-40" onClick={handleClick}>
      <div className="shadow-sm bg-gradient-to-r m-1 from-roxo1 to-roxo2 w-full rounded-full flex items-center justify-center">
        <div className="text-white"> {icon} </div>
      </div>
    </div>
    </div>
  )
}

const handleClick = () => {
  console.log("Salvar")
};

const Settings: React.FC = () => {
  return (
      <div className="flex p-4 h-screen bg-secbackground">
        <div className='flex shadow-lg rounded-lg w-screen h-full p-2 bg-background'>
          <SideBar />
          <div className="overflow-y-auto flow-root static">
            <div><SettingsForm isDescriptionOn={false} /></div>
            <div><Icon icon={<FiSave size="62" />}/></div>
            
          </div>

        </div>
      </div>
    
  );
};

export default Settings;
