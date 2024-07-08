import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUsPage from "./pages/AboutUsPage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/work" element={<LoginPage />} />
      <Route path="/aboutus" element={<AboutUsPage />} />
      <Route path="*" element={<Homepage />} />
    </Routes>
  );
}
