const DealCard = () => {
  return (
    <>
      <div className="flex justify-between border-b p-4 mt-2">
        <span className="text-[#403F3F] poppins-semibold">
          Total Flat Space
        </span>
        <span className="poppins-bold">185 m2</span>
      </div>
      <div className="flex justify-between border-b p-4 mt-2">
        <span className="text-[#403F3F] poppins-semibold">Floor number</span>
        <span className="poppins-bold">26th</span>
      </div>
      <div className="flex justify-between border-b p-4 mt-2">
        <span className="text-[#403F3F] poppins-semibold">Number of rooms</span>
        <span className="poppins-bold">6</span>
      </div>
      <div className="flex justify-between border-b p-4 mt-2">
        <span className="text-[#403F3F] poppins-semibold">
          Parking Available
        </span>
        <span className="poppins-bold">yes</span>
      </div>
      <div className="flex justify-between border-b p-4 mt-2">
        <span className="text-[#403F3F] poppins-semibold">Payment Process</span>
        <span className="poppins-bold">Bank</span>
      </div>
      <p className="py-2">
      today best deal right now and more details know of the homes...
      </p>
      <button className="btn mt-6">More Details</button>
    </>
  );
};

export default DealCard;
