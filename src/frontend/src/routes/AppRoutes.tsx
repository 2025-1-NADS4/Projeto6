import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Home  from "../pages/home";
import  About  from "../pages/about";
import Register  from "../pages/register";
import  Login  from "../pages/login";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
