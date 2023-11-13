import React, { useState } from 'react';
import logoVertical from "@/img/logoVertical.png";
import limpeza from "@/img/limpeza.png";
import { useGoogleLogin } from '@react-oauth/google';
import IconButton from '@/components/icon-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


const LoginPage: React.FC = () => {
  const [data, setData] = useState(null);

  const login = useGoogleLogin({
    onSuccess: codeResponse => handleLogin(codeResponse)
  });

  function handleLogin(codeResponse: any) {
    fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${codeResponse.access_token}`)
    .then(response => response.json())
    .then(json => setData(json))
    .catch(error => console.error(error));

    console.log(data);
  };

  return (
    <div className="flex p-4 h-screen bg-secbackground">
        <div className='flex flex-wrap items-center justify-center shadow-lg rounded-lg w-screen h-full p-2 bg-background overflow-y-auto md:overflow-hidden'>
          
            <div className="flex flex-col flex-grow h-full justify-center items-center">
                <div><img src={logoVertical} alt="CyberGari" className="w-96" /></div>
                <IconButton 
                  title={'Continue with Google'} 
                  handleClick={() => login()}
                  icon={<FontAwesomeIcon icon={faGoogle} />}
                  />
              </div>
              <div className="flex justify-center">
            <img src={limpeza} alt="Homem limpando" className="pt-4 mr-8 w-[28rem]" />
          </div>
         
        </div>
    </div>
  );
};

export default LoginPage;
