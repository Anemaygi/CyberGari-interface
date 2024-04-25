import React, { useEffect, useState } from 'react';
import logoVertical from "@/img/logoVertical.png";
import limpeza from "@/img/limpeza.png";
import { useGoogleLogin } from '@react-oauth/google';
import IconButton from '@/components/icon-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import Button from '@/components/ui/button';


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

  function handleSubmit(event: any) {
    event.preventDefault();
  
    const name = event.target.name.value;
    const email = event.target.email.value;
  
    const newUser = {
      name,
      email,
    };
    console.log(newUser)
  }
  
  return (
    <div className="flex p-4 h-screen bg-secbackground">
        <div className='flex flex-wrap items-center justify-center shadow-lg rounded-lg w-screen h-full p-2 bg-background overflow-y-auto md:overflow-hidden'>
          
            <div className="flex flex-col flex-grow h-full justify-center items-center">
                <div><img src={logoVertical} alt="CyberGari" className="w-96" /></div>
                <form onSubmit={handleSubmit}>
                  <label className='text-white'>E-mail</label>
                  <Input type='email'name='email' placeholder='meuemail@gmail.com' className="w-[100%] bg-[#D9D9D9] text-black mb-5"/>
                  <label className='text-white'>Nome</label>
                  <Input type='text' name='name' placeholder='Meu Nome' className="w-[100%] bg-[#D9D9D9] text-black mb-5"/>
                  <button type='submit'
                  className="shadow-sm bg-gradient-to-r m-3 from-roxo1 to-roxo2 w-auto py-2 px-20 cursor-pointer rounded-2xl flex items-center justify-center text-white"
                  >Quero me Inscrever!!</button>
                </form>
              </div>
              <div className="flex justify-center">
            <img src={limpeza} alt="Homem limpando" className="pt-4 mr-8 w-[28rem]" />
          </div>
         
        </div>
    </div>
  );
};

export default LoginPage;
