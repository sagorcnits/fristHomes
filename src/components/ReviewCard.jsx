const ReviewCard = ({ source, name, proffesion }) => {
  return (
    <div className="bg-[#28b462ab] border border-dashed rounded-md p-4">
      <div className=" px-8 py-4 bg-white rounded-md">
        <p className="poppins-reguler text-[#3a3939] ">
          Very nice FristHomes services, I got everything to my liking Employees
          are very good thanks for providing such service
        </p>
        <div className="flex gap-2 py-4">
          <div className="w-[50px] h-[50px] rounded-full overflow-hidden border flex justify-center items-center">
            <img src={source} alt="" />
          </div>
          <div>
            <h1 className="poppins-bold">{name}</h1>
            <p>{proffesion}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
