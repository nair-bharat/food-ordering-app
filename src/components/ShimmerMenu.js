const ShimmerMenu = () => {
  return (
    <>
      <div className="lg:h-48 h-28 flex justify-center bg-gray-100 items-center p-2 lg:p-0">
        <div className="w-48 h-24 lg:w-56 lg:h-40 bg-gray-300 lg:p-5 p-2"></div>
        <div className="m-2 py-2 px-4">
          <div className="w-28 h-5 lg:w-32 lg:h-8 bg-gray-300 px-2 my-2"></div>
          <div className="w-48 h-3 lg:w-48 lg:h-4 bg-gray-300 p-2 my-2"></div>
          <div className="w-64 h-4 lg:w-64 lg:h-6 bg-gray-300 p-2 my-4"></div>
        </div>
      </div>

      <div className="flex flex-col">
        {Array(15)
          .fill("")
          .map((e, i) => (
            <div
              className="w-[350px] lg:w-[650px] lg:h-40 h-32 lg:p-5 lg:m-4 p-2 m-2 mt-5 border-2 border-solid"
              key={i}
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="w-36 h-4 lg:w-56 lg:h-4 my-2 bg-gray-300"></div>
                  <div className="w-28 h-4 lg:w-36 lg:h-4 my-2 bg-gray-300"></div>
                  <div className="w-40 h-4 lg:w-48 lg:h-4 my-2 bg-gray-300"></div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="w-28 h-16 lg:w-36 lg:h-20 lg:my-2 bg-gray-300"></div>
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
