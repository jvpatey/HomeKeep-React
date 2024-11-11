import { LoginHero } from "./LoginHero";
import { LoginCard } from "./LoginCard";

export function Login() {
  return (
    <div className="min-h-screen bg-clean dark:bg-slate flex flex-col items-center justify-center">
      {/* Hero Section */}
      <LoginHero />

      {/* Login Card */}
      <LoginCard />
    </div>
  );
}
