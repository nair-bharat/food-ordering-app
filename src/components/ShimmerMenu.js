const ShimmerMenu = () => {
  return (
    <>
      <div className="h-48 flex md:flex-row flex-col justify-center bg-gray-100 items-center p-2 md:p-0">
        <div className="w-48 h-32 md:w-56 md:h-40 bg-gray-300 md:p-5 p-2"></div>
        <div className="md:m-2 m-1 md:py-2 px-4 flex flex-col items-center">
          <div className="w-28 h-4 md:w-32 md:h-8 bg-gray-300 md:px-2 px-1 md:my-2 my-1"></div>
          <div className="w-48 h-2 md:w-48 md:h-4 bg-gray-300 p-2 px-1 md:my-2 my-1"></div>
          <div className="w-64 h-3 md:w-64 md:h-6 bg-gray-300 p-2 px-1 md:my-2 my-1"></div>
        </div>
      </div>

      <div className="flex flex-col items-center md:pt-1">
        {Array(15)
          .fill("")
          .map((e, i) => (
            <div
              className="w-64 md:w-[650px] md:h-40 h-32 md:p-5 md:m-4 p-2 m-2 mt-5 border-2 border-solid"
              key={i}
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="w-28 h-4 md:w-56 md:h-4 my-2 bg-gray-300"></div>
                  <div className="w-20 h-4 md:w-36 md:h-4 my-2 bg-gray-300"></div>
                  <div className="w-32 h-4 md:w-48 md:h-4 my-2 bg-gray-300"></div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="w-24 h-16 md:w-36 md:h-20 md:my-2 bg-gray-300"></div>
                  <div className="w-24 h-4 my-2 bg-gray-300"></div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ShimmerMenu;
