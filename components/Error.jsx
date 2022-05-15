const Error = ({ children, clear }) => {
  return (
    <div className="absolute left-3 bottom-3 md:left-20 md:bottom-14 px-5 py-2 bg-[#ff0606] text-white z-50 rounded">
      <div
        onClick={clear}
        className="absolute top-1 right-3 text-lg text-white font-bold cursor-pointer"
      >
        x
      </div>
      <h2 className="text-xl font-bold">Error: </h2>
      <p className="">{children}</p>
    </div>
  );
};

export default Error;
