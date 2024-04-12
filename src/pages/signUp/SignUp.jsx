import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../components/AuthProvider";
import title from "../../utils/title";
const SignUp = () => {
  const [eye, setEye] = useState("password");
  const { createUser, updateProfileUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const Submit = (data) => {
    createUser(data.email, data.password)
      .then((res) => {
        const user = res.user;
        updateProfileUser(data.name, data.photoURL)
          .then(() => {
            console.log("update profile");
          })
          .catch((error) => {
            console.log(error.message);
          });
        // user.displayName = data.name;
        // user.photoURL = data.photoURL;
        toast.success("Complete Your Register");
      })
      .catch((error) => {
        // console.log(error.message);
        toast.warning("You have already an acount ");
      });
    reset();
  };

  title("register");

  return (
    <div className="md:hero-content flex-col lg:flex-row-reverse poppins-reguler">
      <ToastContainer />
      <div className="card shrink-0 w-full md:max-w-md shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSubmit(Submit)}>
          <h1 className="poppins-semibold text-center text-[30px]">Register</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Name"
              className="input input-bordered"
            />
            {errors.name && (
              <p className="text-red-600 poppins-semibold">Error Name</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="email"
              className="input input-bordered"
            />
            {errors.email && (
              <p className="text-red-600 poppins-semibold">Email Not a Valid</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              {...register("photoURL", { required: true })}
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
            />
            {errors.photoURL && (
              <p className="text-red-600 poppins-semibold">Error URL</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="flex justify-between items-center relative">
              <input
                {...register("password", {
                  pattern: {
                    value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
                  },
                  minLength: 6,
                })}
                area-invalid={errors.password ? "true" : "false"}
                type={eye}
                placeholder="password"
                className="input input-bordered w-full"
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
            {errors.password && (
              <p className="text-red-600 poppins-semibold">
                Password Not a Valid
              </p>
            )}
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
