import { Routes, Route } from "react-router-dom"
import LandingPage from '@/pages/landing';
import LoginPage from "@/pages/login";
import Template from "@/pages/template";


export default function RootRouter() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/template' element={<Template />} />
    </Routes>
  );
}
