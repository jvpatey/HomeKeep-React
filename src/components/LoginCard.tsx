export function LoginCard() {
  return (
    <div className="card w-full max-w-md shadow-2xl bg-marine mb-24 mx-auto font-sans">
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
        <div className="flex justify-center w-2/5 py-1 text-center m-2 mx-auto">
          <button className="btn text-clean font-semibold bg-forest border-forest w-full hover:bg-clean hover:border-clean hover:text-forest">
            Sign In
          </button>
          <button className="btn text-forest bg-clean border-clean w-full hover:bg-forest hover:border-forest hover:text-clean ml-2">
            Sign in with Google
          </button>
        </div>
        <div className="border-t border-clean dark:border-slate p-3 text-center">
          <a
            href="#"
            className="font-base text-forest dark:text-slate text-md hover:text-clean"
          >
            New user? Create an account
          </a>
          <br />
          <a
            href="#"
            className="font-base text-forest dark:text-slate text-md hover:text-clean"
          >
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
}
