export default function LineBar({ BC, AC, BM }) {
  return (
    <>
      <div className="w-full flex">
        <div className={`w-[${BC}%] h-[32px] bg-[#F04438] rounded-tl rounded-bl`}></div>
        <div className={`w-[${AC}%] h-[32px] bg-[#F79009]`}></div>
        <div className={`w-[${BM}%] h-[32px] bg-[#12B569] rounded-tr rounded-br`}></div>
      </div>
      <div className="mt-[45px] flex flex-col gap-[20px]">
        <div className="flex items-center justify-between gap-2">
          <div className="w-4 h-4 bg-[#F04438] rounded"></div>
          <h1 className="flex-1 text-sm">Before Casting</h1>
          <span className="text-sm">{BC}</span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="w-4 h-4 bg-[#F79009] rounded"></div>
          <h1 className="flex-1 text-sm">After Casting</h1>
          <span className="text-sm">{AC}</span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="w-4 h-4 bg-[#12B569] rounded"></div>
          <h1 className="flex-1 text-sm">Before Machining</h1>
          <span className="text-sm">{BM}</span>
        </div>
      </div>
    </>
  );
}
