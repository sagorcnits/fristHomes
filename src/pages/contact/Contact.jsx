import title from "../../utils/title";

const Contact = () => {

  title("contact")
  return (
    <div className="grid md:grid-cols-2 items-center">
      <div>
        <img className="w-[90%]"
          src="https://img.freepik.com/free-vector/organic-flat-man-customer-support_23-2148893295.jpg?t=st=1712659462~exp=1712663062~hmac=1f3a65814f5eb4ec3f502ada341b06d98955535c3b2b88961ce68996badbfade&w=740"
          alt=""
        />
      </div>
      <div>
      <form className="w-[80%] mx-auto">
          <h1 className="text-[30px] font-bold py-4">Contact Us</h1>
          <label className="input input-bordered flex items-center gap-2 mt-4">
            Name
            <input type="text" className="grow" placeholder="name" />
          </label>
          <label className="input input-bordered flex items-center gap-2 mt-4">
            Email
            <input
              type="text"
              className="grow"
              placeholder="example@email.com"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 mt-4">
            Phone
            <input type="number" className="grow" placeholder="number" />
          </label>
          <label className="input input-bordered flex items-center gap-2 mt-4">
            Address
            <input type="text" className="grow" placeholder="address" />
          </label>
          <button
            onClick={(e) => handleSubmit(e)}
            className=" mt-4 w-full px-7 py-3 text-white font-bold rounded-lg bg-[#23BE0A] hover:bg-black duration-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
