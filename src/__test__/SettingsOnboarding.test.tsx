import React from 'react';
import { fireEvent, getByText, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom'; 
import Settings from '../pages/settings'; 
import FirstSettings from '../pages/onboarding/firstsettings';

const options = [
  'Quais parâmetros dos arquivos podemos acessar?',
  'Extensão do arquivo',
  'Tamanho do arquivo',
  'Acessos do arquivo',
  'Visualização dos arquivos',
  'Tags dos arquivos',
  'Outros metadados',
  'Exclusão e Compactação',
  'Excluir arquivos de forma automática',
  'Comprimir arquivos de forma automática',
  'Aviso de frequência para novas análises automáticas',
  'Aviso de limite de armazenamento para novas análises automáticas',
]


test('renders settings page correctly', () => {
  render(
    <BrowserRouter>
      <Settings />
    </BrowserRouter>
  );

  options.forEach((option) => {
    expect(screen.getByText(option)).toBeInTheDocument();
  })

});

test('renders first settings page correctly', () => {
  render(
    <BrowserRouter>
      <FirstSettings />
    </BrowserRouter>
  );

  const textFirstTime = [
    "Bem-vindo ao CyberGari!",
    "Antes de começarmos, defina seus parâmetros iniciais. Você só fará isso uma vez ;)",
    "Nós apenas acessaremos os parâmetros que você nos der permissão. Quanto mais parâmetros, melhor será a análise!",
    "Nas análises, descobrimos quais arquivos devem ser excluídos ou comprimidos. Podemos excluí-los e compactá-los automaticamente ou você pode os analisar manualmente",
    "Com qual frequência analisaremos seus arquivos? Defina uma frequência para atualizar seus dados com uma análise automaticamente",
    "Defina um limite de armazenamento que, quando alcançado, faremos a análise automaticamente",
    "Salvar configurações"
  ]

  expect(screen.getByAltText('Logo')).toBeInTheDocument();

  options.forEach((option) => {
    expect(screen.getByText(option)).toBeInTheDocument();
  })

  textFirstTime.forEach((text) => {
    expect(screen.getByText(text)).toBeInTheDocument();
  })
  
});
