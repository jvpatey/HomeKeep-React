import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Router } from "./Router";
import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <BrowserRouter>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}
