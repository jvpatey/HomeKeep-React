export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-clean dark:bg-slate shadow">
      <div className="flex items-center justify-between p-4">
        <span className="text-md font-normal text-charcoal dark:text-clean">
          © 2024 • HomeKeep by Jeffrey Patey • All Rights Reserved
        </span>
        <div className="flex items-center">
          <a
            href="https://github.com/jvpatey"
            className="text-xl text-charcoal dark:text-clean mr-2 hover:text-marine"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jeffrey-patey-3ba715220/"
            className="text-xl text-charcoal dark:text-clean mr-4 hover:text-marine"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
