const UserProfile = () => {
  return (
    <div className="grid grid-cols-4 gap-5">
      <div className="border p-4 poppins-semibold">
        <div className="w-[90px] h-[90px] mx-auto rounded-full flex justify-center items-center cursor-pointer overflow-hidden mt-6">
          <img src="https://lh3.googleusercontent.com/a/ACg8ocL-G38YycrNTgadRSctDVoHou9KPcM8OrqlQk9-I03rsqVALHA=s96-c" />
        </div>
        <p className="text-center ">Sagor Hossain</p>
        <div className="flex flex-col py-8 gap-6">
          <button className="border p-2 rounded-md">Edit Profile</button>
          <p>advance setting</p>
          <p>advance setting</p>
          <p>advance setting</p>
          <p>advance setting</p>
          <p>advance setting</p>
         
        </div>
      </div>

      <div className="col-span-3 border p-4">
        <h1 className="text-[30px] poppins-semibold">Your Profile</h1>
        <p className="poppins-semibold py-2">name</p>
        <div className="border p-2 rounded-md bg-[rgba(241,238,238,0.6)]">Sagor hossain</div>
        <p className="poppins-reguler py-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis,
          earum laudantium totam ea voluptate atque ducimus facilis eum a iure
        </p>
        <p className="poppins-semibold py-2">Email</p>
        <div className="border p-2 rounded-md bg-[rgba(241,238,238,0.6)]">sagor.cnits@gmail.com</div>
        <p className="poppins-semibold mt-4">Bio</p>
        <div className="border  bg-[rgba(241,238,238,0.6)] p-4 my-2 leading-[27px] rounded-md">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ad,
            laborum omnis provident sapiente perspiciatis voluptatem
            voluptatibus, corporis incidunt ab obcaecati quasi est nemo itaque
            eveniet labore deleniti quaerat. Quaerat.
          </p>
        </div>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
