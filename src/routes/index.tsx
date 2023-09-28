import { Routes, Route } from "react-router-dom"
import LandingPage from '@/pages/landing';
import LoginPage from "@/pages/login";

export default function RootRouter() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  );
}
