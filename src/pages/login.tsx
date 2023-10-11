import React from 'react';
import logoVertical from "@/img/logoVertical.png";
import limpeza from "@/img/limpeza.png";


const LoginPage: React.FC = () => {
  return (
    <body className="flex justify-center items-center bg-secbackground min-h-screen ">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-5/6 h-5/6 m-5 bg-background rounded-2xl">
        <div className="flex flex-grow w-auto justify-center items-center p-10">
          <div>
            <div><img src={logoVertical} alt="Image" className="w-96" /></div>
            <div className="text-center text-red-500">Auth</div>
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
