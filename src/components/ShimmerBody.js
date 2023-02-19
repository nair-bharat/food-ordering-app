const ShimmerBody = () => {
  return (
    <div className="flex flex-wrap mx-12">
      {Array(15)
        .fill("")
        .map((e, i) => (
          <div className="w-60 h-56 p-2 m-4 shadow-lg">
            <div className="w-56 h-28 my-2 bg-gray-300"></div>
            <div className="w-36 h-4 my-2 bg-gray-300"></div>
            <div className="w-48 h-4 my-2 bg-gray-300"></div>
            <div className="w-56 h-4 my-2 bg-gray-300"></div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerBody;
