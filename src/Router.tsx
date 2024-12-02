// src/routes/AppRouter.tsx
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/login/Home";
import { Dashboard } from "./components/dashboard/Dashboard";
import { RoutePaths } from "./common/RoutePaths";

export function Router() {
  return (
    <Routes>
      <Route path={RoutePaths.HOME} element={<Home />} />
      <Route path={RoutePaths.DASHBOARD} element={<Dashboard />} />
    </Routes>
  );
}
