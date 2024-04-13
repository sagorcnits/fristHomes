import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../components/AuthProvider";
import title from "../../utils/title";

const Update = () => {
  const { user, updateProfileUser, loading ,setReload, reload} = useContext(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const photoURL = formData.get("photoURL");
    updateProfileUser(name, photoURL)
      .then(() => {
        console.log("save Change");
        toast.success("Update your profile");
        setReload(!reload)
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  title("update profile");
  return (
    <>
      <div className="md:hero-content flex-col lg:flex-row-reverse poppins-reguler">
        <ToastContainer></ToastContainer>
        <div className="card shrink-0 w-full md:max-w-md shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleUpdate}>
            <h1 className="poppins-semibold text-center text-[30px]">
              Update Your Profile
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                defaultValue={user.displayName}
                className="input input-bordered"
                name="name"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                defaultValue={user.email}
                className="input input-bordered "
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                defaultValue={user.photoURL}
                className="input input-bordered"
                name="photoURL"
              />
            </div>

            <div className="form-control pt-6">
              <button className="btn btn-primary">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;

/* 

import title from "../../utils/title";
const UpdateProfile = () => {
  
  title("update profile");
  return (
    <div className="md:hero-content flex-col lg:flex-row-reverse poppins-reguler">
      <div className="card shrink-0 w-full md:max-w-md shadow-2xl bg-base-100">
        <form className="card-body">
          <h1 className="poppins-semibold text-center text-[30px]">Update Your Profile</h1>
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
          
         
          <div className="form-control pt-6">
            <button className="btn btn-primary">Save Changes</button>
          </div>
         
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;





*/
