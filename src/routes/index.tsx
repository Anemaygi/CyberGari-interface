import { Routes, Route } from "react-router-dom"
import LandingPage from '@/pages/landing';

export default function RootRouter() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
    </Routes>
  );
}
