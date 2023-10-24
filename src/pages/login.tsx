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
    <body className="flex justify-center items-center bg-secbackground min-h-screen ">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-5/6 h-5/6 m-5 bg-background rounded-2xl">
        <div className="flex flex-grow w-auto justify-center items-center p-10">
          <div className="justify-center items-center">
            <div><img src={logoVertical} alt="Image" className="w-96" /></div>
            <IconButton 
              title={'Continue with Google'} 
              handleClick={() => login()}
              icon={<FontAwesomeIcon icon={faGoogle} />}
              />
          </div>
        </div>

        <div className="flex justify-center">
          <img src={limpeza} alt="Homem limpando" className="pt-4 w-[28rem]" />
        </div>
      </div>
    </body>
  );
};

export default LoginPage;
