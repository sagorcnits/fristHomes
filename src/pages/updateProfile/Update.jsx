import title from "../../utils/title";

const Update = () => {

  title("update profile");
  return (
    <div className="md:hero-content flex-col lg:flex-row-reverse poppins-reguler">
      <div className="card shrink-0 w-full md:max-w-md shadow-2xl bg-base-100">
        <form className="card-body">
          <h1 className="poppins-semibold text-center text-[30px]">
            Update Your Profile
          </h1>
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
