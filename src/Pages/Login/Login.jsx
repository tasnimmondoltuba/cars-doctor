import React from "react";
import login from "../../assets/images/login/login.svg";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-20">
        <div className="text-center">
          <img src={login} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <h2 className="text-4xl text-center font-bold mb-4">Login</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-sm mt-2"
                >
                  New here ?{" "}
                  <span className="text-purple-600 font-bold  underline">
                    Register
                  </span>
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-purple-500 font-bold text-xl">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
