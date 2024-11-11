import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Router } from "./Router";

export function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}
