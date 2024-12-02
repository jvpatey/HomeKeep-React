interface CreateAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateAccountModal({
  isOpen,
  onClose,
}: CreateAccountModalProps) {
  if (!isOpen) return null;

  return (
    <dialog open className="modal" aria-modal="true" role="dialog">
      <div className="modal-box bg-paper dark:bg-charcoal p-2 rounded-md font-sans">
        <button
          className="btn btn-sm btn-ghost absolute border-none top-2 right-2 text-slate dark:text-paper m-2 p-2"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="w-full max-w-lg bg-paper dark:bg-charcoal p-1 rounded-md">
          <form id="signupForm" className="card-body">
            <h1 className="text-left p-2 text-2xl mb-5 font-light dark:text-clean text-charcoal border-b border-charcoal dark:border-clean">
              Create an Account
            </h1>
            <div className="form-control">
              <input
                id="firstName"
                type="text"
                placeholder="First Name"
                className="input input-bordered bg-paper text-charcoal placeholder-charcoal border-marine dark:bg-charcoal dark:text-clean dark:placeholder-clean"
                required
              />
            </div>
            <div className="form-control">
              <input
                id="lastName"
                type="text"
                placeholder="Last Name"
                className="input input-bordered bg-paper text-charcoal placeholder-charcoal border-marine dark:bg-charcoal dark:text-clean dark:placeholder-clean"
                required
              />
            </div>
            <div className="form-control">
              <input
                id="signupEmail"
                type="email"
                placeholder="Email Address"
                className="input input-bordered bg-paper text-charcoal placeholder-charcoal border-marine dark:bg-charcoal dark:text-clean dark:placeholder-clean"
                required
              />
            </div>
            <div className="form-control relative">
              <input
                id="signupPassword"
                type="password"
                placeholder="Password"
                className="input input-bordered bg-paper text-charcoal placeholder-charcoal border-marine dark:bg-charcoal dark:text-clean dark:placeholder-clean"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-2 py-1 bg-transparent text-charcoal dark:text-clean focus:outline-none"
              >
                <i className="fas fa-eye-slash"></i>
              </button>
            </div>
            <div className="mx-auto w-1/2 py-1 text-center mt-2">
              <button
                type="submit"
                className="btn text-forest font-semibold bg-marine border-marine hover:border-none hover:bg-feather hover:text-forest w-full dark:text-charcoal dark:hover:bg-feather"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
}
