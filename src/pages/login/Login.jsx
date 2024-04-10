import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  return (
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="card shrink-0 w-full md:max-w-md shadow-2xl bg-base-100">
        <form className="card-body">

            <h1 className="poppins-semibold text-center text-[30px]">Sign in to your account</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
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
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="poppins-reguler">New to Our Website? <span className="text-red-500">Sign Up</span></p>
          <div className="divider">Or continue with</div>
          <div className="flex justify-between  mx-auto gap-6">
              <button className="px-8 py-2 border poppins-semibold rounded-md flex gap-2 items-center"><FcGoogle></FcGoogle> Google</button>
              <button className="px-8 py-2 border poppins-semibold rounded-md flex gap-2 items-center"><FaGithub></FaGithub> Github</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
