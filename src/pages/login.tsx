import React, { useEffect, useState } from 'react';
import logoVertical from "@/img/logoVertical.png";
import limpeza from "@/img/limpeza.png";
import { useGoogleLogin } from '@react-oauth/google';
import IconButton from '@/components/icon-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';


const LoginPage: React.FC = () => {
  const [ user, setUser ] = useState("");
  const [ profile, setProfile ] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const navigate = useNavigate();

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {setUser(codeResponse.access_token); setIsLoggedIn(true)},
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
      () => {
        console.log(user);
          if (user !== "") {
            fetch(`http://localhost:8080/users/login/${user}`, { 
                method: 'POST'})
            .then(response => response.json())
            .then(json => setProfile(json))
            .catch(error => console.error(error));

          }
      },
      [ user ]
  );

  useEffect(() => {
    if (isLoggedIn && profile) {
      localStorage.setItem('user', JSON.stringify(profile));
  
      const parsedProfile = JSON.parse(localStorage.getItem('user')!);
      parsedProfile.newUser === true
         ? navigate('/presentation', { replace: true })
         : navigate('/dashboard', { replace: true });
    }
  }, [profile, navigate]);


  return (
    <div className="flex p-4 h-screen bg-secbackground">
        <div className='flex flex-wrap items-center justify-center shadow-lg rounded-lg w-screen h-full p-2 bg-background overflow-y-auto md:overflow-hidden'>
          
            <div className="flex flex-col flex-grow h-full justify-center items-center">
                <div><img src={logoVertical} alt="Image" className="w-96" /></div>
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
