import React from 'react';
import { fireEvent, getByText, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom'; 
import Login from '../pages/login'; 
import { GoogleOAuthProvider } from '@react-oauth/google';

test('renders login page correctly', () => {
  render(
    <GoogleOAuthProvider clientId={''}>
    <BrowserRouter>
      <Login />
    </BrowserRouter>
    </GoogleOAuthProvider>
  );

  expect(screen.getByAltText('CyberGari')).toBeInTheDocument();
  expect(screen.getByAltText('Homem limpando')).toBeInTheDocument();
  expect(screen.getByText('Continue with Google')).toBeInTheDocument();

});
