import { Routes, Route } from "react-router-dom"
import LandingPage from '@/pages/landing';
import Template from "@/pages/template";

export default function RootRouter() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/template' element={<Template />} />
    </Routes>
  );
}
