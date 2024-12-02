// src/routes/AppRouter.tsx
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/login/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
