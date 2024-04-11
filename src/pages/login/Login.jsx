import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdRemoveRedEye } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../components/AuthProvider";
import title from "../../utils/title";
const Login = () => {
  const [eye, setEye] = useState("password");
  const { signInUser, googleUser, githubUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    signInUser(data.email, data.password)
      .then((res) => {
        const user = res.user;
        navigate("/");
       
      })
      .catch((error) => {
        console.log(error.message);
        toast.warn("Please Valid Email and Password")
      });
  };
// google login
  const googleLogIn = () => {
    googleUser()
      .then((res) => {
        const user = res.user;
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // github login
  const githubLogIn = () => {
    githubUser()
      .then((res) => {
        const user = res.user;
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  title("login");
  return (
    <div className="md:hero-content flex-col lg:flex-row-reverse poppins-reguler">
      <ToastContainer></ToastContainer>
      <div className="card shrink-0 w-full md:max-w-md shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSubmit(submit)}>
          <h1 className="poppins-semibold text-center text-[30px]">
            Log in to your account
          </h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500">Please Email Provide</p>
            )}
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
                {...register("password", { required: true })}
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
            {errors.password && <p className="text-red-500">Wrong Password</p>}

            <div className="text-sm flex justify-between py-2">
              <label className="flex gap-4 items-center">
                <input type="checkbox" className="checkbox checkbox-md" />
                Remember me
              </label>
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div className="form-control">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="poppins-reguler">
            New to Our Website?{" "}
            <NavLink to="/register" className="text-red-500">
              Register
            </NavLink>
          </p>
          <div className="divider">Or continue with</div>
          <div className="flex justify-between  mx-auto gap-6">
            <button onClick={googleLogIn} className="px-8 py-2 border poppins-semibold rounded-md flex gap-2 items-center">
              <FcGoogle></FcGoogle> Google
            </button>
            <button onClick={githubLogIn} className="px-8 py-2 border poppins-semibold rounded-md flex gap-2 items-center">
              <FaGithub></FaGithub> Github
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
