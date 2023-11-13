import React from 'react';
import { fireEvent, getByText, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom'; 
import LandingPage from '../pages/landing'; 

test('renders landing page text correctly', () => {
  render(
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
  );

  const texts = [
    'A economia e controle de armazenamento que você precisava, agora completos em um único lugar!',
    'Comece agora!',
    'Entrar',
    'Tenha o controle na sua mão',
    'Com o nosso dashboard você será capaz de ver todas as informações sobre seus arquivos e a economia que o CyberGari está gerando na sua organização.',
    'Economize de forma simples',
    'Utilizando o CyberGari, a preocupação com os custos de armazenamento pode ser mitigada de forma tranquila e progressiva, deixa isso tudo com a gente!',
    'Personalize a sua experiência',
    'A nossa plataforma te dará acesso a inúmeras configurações onde você terá o controle sobre quais informações serão coletadas para análise, além da criação de tags para nos indicar os seus arquivos de maior importância.',
    'A Empresa',
    'Entre em contato',
    'Termos e condições',
    'Políticas de Privacidade',
    'Entre em contato'
  ]

  expect(screen.getByAltText('CyberGari')).toBeInTheDocument();

  texts.forEach((text) => {
    expect(screen.getByText(text)).toBeInTheDocument();
  })

});

test('call to action redirecting correctly', () => {
  render(
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
  );

  const buttons = [
    {
      title: 'Comece agora!',
      ref: '/login'
    },
    {
      title: 'Entrar',
      ref: '/login'
    },
    {
      title: 'Cadastre-se!',
      ref: '/login'
    },
  ]
  
  buttons.forEach((button) => {
    fireEvent.click(screen.getByText(button.title));
    expect(window.location.pathname).toBe(button.ref);
  });

});