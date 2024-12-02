import { useState } from "react";
import { CreateAccountModal } from "./CreateAccountModal";

export function LoginCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="card w-full max-w-lg shadow-2xl bg-marine mb-24 mx-auto">
        <div className="card-body">
          <h1 className="text-center p-2 text-3xl mb-5 font-base text-clean dark:text-slate border-b border-clean dark:border-slate">
            Sign In
          </h1>
          <div className="form-control">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered bg-clean text-charcoal dark:bg-slate dark:text-clean placeholder-forest dark:placeholder-clean"
              required
            />
          </div>
          <div className="form-control relative mt-4">
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered bg-clean text-charcoal dark:bg-slate dark:text-clean placeholder-forest dark:placeholder-clean"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 px-2 py-1 bg-transparent text-marine focus:outline-none"
            >
              <i className="fas fa-eye-slash"></i>
            </button>
          </div>

          {/* Login Buttons */}
          <div className="flex justify-center w-2/5 py-1 text-center m-2 mx-auto">
            <button className="btn w-full font-semibold bg-clean text-marine border-none dark:bg-slate dark:text-marine dark:border-none hover:bg-feather hover:text-clean hover:border-none dark:hover:bg-feather dark:hover:text-slate dark:hover:border-none">
              Sign In
            </button>
            <button className="btn w-full ml-2 font-semibold bg-clean text-marine border-none dark:bg-slate dark:text-marine dark:border-none hover:bg-feather hover:text-clean hover:border-none dark:hover:bg-feather dark:hover:text-slate dark:hover:border-none">
              Sign in with Google
            </button>
          </div>

          {/* Create account and forgot password buttons */}
          <div className="border-t border-clean dark:border-slate p-3 text-center">
            <div className="flex justify-center space-x-4">
              <button
                onClick={openModal}
                className="text-sm font-semibold border-none bg-marine text-clean hover:text-feather hover:border-none hover:bg-clean dark:text-slate dark:hover:bg-slate dark:hover:text-feather focus:outline-none"
              >
                Create an account
              </button>
              <button
                onClick={() => alert("Forgot Password Clicked")}
                className="text-sm font-semibold border-none bg-marine text-clean hover:text-feather hover:border-none hover:bg-clean dark:text-slate dark:hover:bg-slate dark:hover:text-feather focus:outline-none"
              >
                Forgot password?
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Create Account Modal */}
      <CreateAccountModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
