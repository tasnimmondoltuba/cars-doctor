import { useContext } from "react";
import login from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { authContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { logIn } = useContext(authContext);
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-20">
        <div className="text-center">
          <img src={login} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLoginSubmit} className="card-body">
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
                <p className=" text-sm mt-2">
                  New here ?{" "}
                  <Link to="/register">
                    {" "}
                    <span className="text-sm text-purple-600 font-bold label-text-alt link link-hover">
                      Register
                    </span>
                  </Link>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-purple-500 font-bold text-xl"
                type="submit"
                value="Login"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
