import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import title from "../../utils/title";
const SignUp = () => {
  const [eye, setEye] = useState("password");

 
  title("register")
 
  return (
    <div className="md:hero-content flex-col lg:flex-row-reverse poppins-reguler">
      <div className="card shrink-0 w-full md:max-w-md shadow-2xl bg-base-100">
        <form className="card-body">
          <h1 className="poppins-semibold text-center text-[30px]">Register</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
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
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="flex justify-between items-center relative">
              <input
                type={eye}
                placeholder="password"
                className="input input-bordered w-full"
                required
              />
              {eye === "password" ? (
                <FaEyeSlash
                  className="absolute right-4 top-4 cursor-pointer"
                  onClick={() => setEye("text")}
                ></FaEyeSlash>
              ) : (
                <MdRemoveRedEye
                  className="absolute right-4 top-4 cursor-pointer"
                  onClick={() => setEye("password")}
                ></MdRemoveRedEye>
              )}
            </div>
          </div>
          <div className="text-sm flex justify-between py-2">
            <label className="flex items-center gap-4">
              <input type="checkbox" className="checkbox checkbox-md" /> I agree
              to the Terms of User
            </label>
          </div>
          <div className="form-control">
            <button className="btn btn-primary">Register An Acount</button>
          </div>
          <p className="poppins-reguler">
            Have already an acount?{" "}
            <Link to="/login" className="text-red-500">
              Login Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
