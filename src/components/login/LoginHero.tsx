interface LoginHeroProps {
  children?: React.ReactNode;
}

export function LoginHero({ children }: LoginHeroProps) {
  return (
    <div className="hero min-h-screen bg-clean dark:bg-slate font-sans">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center">
          <h1 className="lg:flex md:inline text-5xl font-bold lg:ml-6 md:ml-2 text-forest dark:text-clean">
            Welcome to
          </h1>
          <h1 className="lg:flex md:inline text-7xl lg:ml-6 md:ml-2 font-bold bg-gradient-to-r from-marine to-feather_2 text-transparent bg-clip-text">
            HomeKeep
          </h1>
          <p className="mt-6 text-xl text-forest dark:text-clean max-w-[calc(100%-4rem)] mx-auto lg:text-left md:text-center">
            Effortlessly schedule maintenance tasks, receive notifications, and
            ensure your home is always in top condition with our intuitive app.
            Start simplifying your life today.
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}
