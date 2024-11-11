export function Navbar() {
  return (
    <div className="navbar bg-clean dark:bg-slate pb-6 flex justify-end">
      <div className="navbar-end flex items-center">
        <button id="darkModeToggle" className="p-2 rounded-full">
          <i className="fa-solid fa-moon text-xl text-charcoal hover:text-marine"></i>
        </button>
      </div>
    </div>
  );
}
