// src/routes/AppRouter.tsx
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Home } from "./components/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Login />} />
    </Routes>
  );
}
