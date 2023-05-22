export const ChartTopDashboard = ({ children, checkList, time, to = null }) => {
  return (
    <>
      <div className="border border-gray-300 rounded-xl py-4 px-3 flex  w-full bg-white">
        <div className="w-20 pl-6 ">{children}</div>
        <div className="text-center flex flex-col justify-center gap-5 w-full ">
          <p className="text-xl">
            Checklist: <span className="font-semibold text-2xl">120</span>/200
          </p>
          <p className="text-md">Working Time : 12:22</p>
        </div>
        <div className="text-center h-full flex justify-end items-center px-2 w-20  ">
          <p className="text-[#20519F] ">Detail {">"}</p>
        </div>
      </div>
    </>
  );
};

