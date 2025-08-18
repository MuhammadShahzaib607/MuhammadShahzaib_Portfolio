import { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Footer from "./components/footer/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkTheme");
    if (savedTheme !== null) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkTheme", JSON.stringify(darkMode));
  }, [darkMode]);

  const visibleRoutes = [
    "/",
  "/about",
  "/projects"
  ];

  const isVisibleRoute = visibleRoutes.some(
    (path) =>
      location.pathname === path || location.pathname.startsWith(path + "/")
  );

  return (
    <>
      {isVisibleRoute && (
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      )}

      <Routes>
        <Route index element={<Home darkMode={darkMode} />} />
        <Route path="/about" element={<About darkMode={darkMode} />} />
        <Route path="/projects" element={<Projects darkMode={darkMode} />} />
      </Routes>

{isVisibleRoute && (
        <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
      )}
    </>
  );
}

export default App;
