import { Routes, Route } from "react-router-dom"
import LandingPage from '@/pages/landing';
import LoginPage from "@/pages/login";
import Dashboard from "@/pages/dashboard";
import Presentation from "@/pages/onboarding/presentation";
import FirstSettings from "@/pages/onboarding/firstsettings";
import Settings from "@/pages/settings";
import Tags from "@/pages/tags";

export default function RootRouter() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/presentation' element={<Presentation />} />
      <Route path='/firstsettings' element={<FirstSettings />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/labels' element={<Tags />} />
    </Routes>
  );
}
