interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export function Navbar({ isDarkMode, toggleTheme }: NavbarProps) {
  return (
    <div className="navbar bg-clean dark:bg-slate pb-6 flex justify-end">
      <div className="navbar-end flex items-center">
        <button
          id="darkModeToggle"
          onClick={toggleTheme}
          className="bg-transparent border-none focus:outline-none"
          aria-label="Toggle Dark Mode"
        >
          <i
            className={`fa-solid text-xl ${
              isDarkMode ? "fa-sun text-yellow-400" : "fa-moon text-charcoal"
            } hover:text-marine`}
          ></i>
        </button>
      </div>
    </div>
  );
}
