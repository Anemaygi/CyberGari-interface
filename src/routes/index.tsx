import { Routes, Route } from "react-router-dom"
import LandingPage from '@/pages/landing';
import SideBar from "@/components/sidebar";
export default function RootRouter() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/sidebar' element={<SideBar />} />
    </Routes>
  );
}
