import React from 'react';
import items from "@/img/items.png";
import title from "@/img/title.png";
import bnf1 from "@/img/bnf1.png";
import bnf2 from "@/img/bnf2.png";
import bnf3 from "@/img/bnf3.png";
import gradientFiles from "@/img/gradientFiles.png";
import Button from '@/components/button';
import { useNavigate } from 'react-router-dom';
import { FiChevronDown, FiLinkedin } from "react-icons/fi";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex p-4 h-screen bg-secbackground">
      <div className='shadow-lg rounded-lg w-screen p-2 bg-background overflow-y-auto text-white'>

        <div className="grid grid-cols-1 md:grid-cols-2 min-h-full h-fit mb-8 relative z-0">
          <div className="flex flex-grow justify-end items-center">
            <div className="w-[30rem] m-8 z-20">
              <img src={title} alt="CyberGari" className="pt-4 w-[30rem]" />
              <p className="px-4 pb-4 text-lg">A economia e controle de armazenamento que você precisava, agora completos em um único lugar! </p>
              <div className="w-full flex flex-wrap items-center">
                <Button title="Comece agora!" handleClick={() => navigate('/login')} />
                <div className="border-2 font-semibold border-roxo1 rounded-2xl text-roxo1 shadow-lg flex flex-grow items-center h-fit w-fit py-2 mx-3 justify-center cursor-pointer" onClick={() => navigate('/login')}>Entrar</div>
              </div>
            </div>
          </div>
          <div className="z-20 mb-10 flex items-center justify-center w-full"><img src={items} alt="Imagem de lixo e pasta de arquivos" className="pt-4 w-[28rem] m-8" /></div>
          <FiChevronDown size={35} className="w-full absolute inset-x-0 bottom-0 animate-bounce" />
          <div className="z-0 h-px w-px absolute top-40 right-40 rounded-full shadow-LgLightOrb bg-[#7058A3]"></div>
          <div className="z-0 h-px w-px absolute bottom-0 left-0 rounded-full shadow-SmLightOrb bg-[#7058A3]"></div>
        </div>

        <div className="w-fit h-fit relative">
          <div className="z-0 h-px w-px absolute bottom-0 right-0 rounded-full shadow-SmLightOrb bg-[#7058A3]"></div>
          <div className=" z-40 h-fit min-h-screen bg-[#D9D9D9]/10 grid p-10 grid-cols-1 md:grid-cols-2 justify-center items-center relative">

            <div className="flex justify-center"><img src={gradientFiles} className="z-20 max-h-96 h-full" /></div>
            <div className="md:pr-24 flex flex-col m-4 justify-center md:items-start items-center">
              <h1 className="uppercase text-4xl font-black py-4 "> O que é o <b className="text-hotpink neon">Cybergari</b>? </h1>
              <p>O CyberGari é um software para <b className="font-black">eficiência de armazenamento digital</b>, auxiliando na limpeza e manutenção do seu gerenciador de arquivos.<br/>Utilizando <b className="font-black">parâmetros personalizáveis</b>, consegue gerar relatórios, priorizar os arquivos valiosos e comprimir os menos importantes, <b className="font-black">reduzindo custos de armazenamento</b> para você ou sua organização.</p>
              <div className="w-fit z-40 pt-4 -ml-3"><Button title="Cadastre-se!" handleClick={() => navigate('/login')} /></div>
            </div>
          </div>
        </div>
        <div className="h-fit grid  grid-cols-1 md:grid-cols-2 items-center my-8 p-16 relative">

          <div className="flex items-center justify-center w-full h-full z-20 "><img src={bnf1} /></div>
          <div className="px-4 md:px-24 pb-24 text-center md:text-left">
            <h2 className="text-xl font-bold py-4">Tenha o controle na sua mão</h2>
            <p>Com o nosso dashboard você será capaz de ver todas as informações sobre seus arquivos e a economia que o CyberGari está gerando na sua organização.</p>
          </div>

          <div className="absolute lg:flex justify-center inset-x-0 top-[26%] hidden">
            <img src="src/img/line1.svg" className="w-[45%]" />
          </div>


          <div className="flex items-center justify-center w-full h-full md:order-2 z-20"><img src={bnf2} /></div>
          <div className="px-4 md:px-24 pb-24 md:order-1 text-center md:text-right">
            <h2 className="text-xl font-bold py-4">Economize de forma simples</h2>
            <p>Utilizando o CyberGari, a preocupação com os custos de armazenamento pode ser mitigada de forma tranquila e progressiva, deixa isso tudo com a gente!</p>
          </div>

          <div className="absolute lg:flex justify-center inset-x-0 top-[51%] hidden">
            <img src="src/img/line3.svg" className="w-[45%]" />
          </div>

          <div className="flex items-center justify-center w-full h-full md:order-4 z-20"><img src={bnf3} /></div>
          <div className="px-4 md:px-24 pb-24 md:order-5 text-center md:text-left">
            <h2 className="text-xl font-bold py-4">Personalize a sua experiência</h2>
            <p>A nossa plataforma te dará acesso a inúmeras configurações onde você terá o controle sobre quais informações serão coletadas para análise, além da criação de tags para nos indicar os seus arquivos de maior importância.</p>
          </div>

        </div>

        <footer className="h-fit  bg-[#D9D9D9]/10 py-20 relative z-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-20">
            <div className="flex flex-col space-y-4">
              <p className="font-bold">A Empresa</p>
              <a href="#">Termos e condições</a>
              <a href="#">Políticas de Privacidade</a>
            </div>
            <div className="flex flex-col space-y-4 py-10 sm:py-0">
              <p className="font-bold">Entre em contato</p>
              <a href="#" className="flex items-center"><FiLinkedin size={15} className="mr-2" />/CyberGari</a>
            </div>
          </div>
          <div className="z-0 h-px w-px absolute top-0 right-0 rounded-full shadow-SmLightOrb bg-[#7058A3]"></div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
