import { Link, useLocation } from "react-router-dom";
import { RoutePaths } from "../common/RoutePaths";

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export function Navbar({ isDarkMode, toggleTheme }: NavbarProps) {
  const location = useLocation();

  // Check if the current route is the root route (Home)
  const isRoot = location.pathname === RoutePaths.HOME;

  return (
    <div className="navbar bg-clean dark:bg-slate pb-6 flex justify-between items-center">
      {/* Render logo on left of navbar for all pages besides home page */}
      {!isRoot && (
        <div className="navbar-start">
          <Link
            to={RoutePaths.DASHBOARD}
            className="relative inline-block logo"
          >
            <span className="text-xl font-bold text-forest dark:text-paper">
              HomeKeep
            </span>
          </Link>
        </div>
      )}

      <div className="navbar-end flex items-center">
        {/* Dark Mode Toggle */}
        <button
          id="darkModeToggle"
          onClick={toggleTheme}
          className="bg-transparent border-none focus:outline-none p-2 rounded-full"
          aria-label="Toggle Dark Mode"
        >
          <i
            className={`fa-solid text-xl ${
              isDarkMode ? "fa-sun text-yellow-400" : "fa-moon text-charcoal"
            } hover:text-marine`}
          ></i>
        </button>

        {/* Render Dropdown Menu on left of navbar for all pages besides home page */}
        {!isRoot && (
          <div className="dropdown relative ml-4">
            <button
              className="btn btn-ghost text-slate dark:text-paper hover:text-marine"
              tabIndex={0}
            >
              <i className="fa fa-bars dropdown-icon"></i>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-marine rounded-box w-52 right-0"
            >
              <li>
                <Link
                  to={RoutePaths.ABOUT}
                  className="label-text-alt no-underline link text-base text-forest mt-2"
                >
                  <i className="fa-solid fa-question"></i> About
                </Link>
              </li>
              <li>
                <Link
                  to={RoutePaths.GETTING_STARTED}
                  className="label-text-alt no-underline link text-base text-forest mt-2"
                >
                  <i className="fa-regular fa-lightbulb"></i> Getting Started
                </Link>
              </li>
              <li>
                <Link
                  to={RoutePaths.LOGOUT}
                  className="label-text-alt no-underline link text-base text-forest mt-2"
                >
                  <i className="fa-solid fa-user-minus"></i> Sign Out
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
