import React, { useEffect, useState } from "react";

const Pagination = ({ row, limit, page, onClick = null }) => {
  const [count, setCount] = useState([]);
  useEffect(() => {
    const counting = Math.ceil(row / limit);
    const temp = [];
    for (let i = 0; i < counting; i++) {
      temp.push(1);
    }
    setCount(temp);
  }, []);
  return (
    <div className="flex justify-between">
      <button
        onClick={(e) => onClick(page > 1 ? page - 1 : page)}
        disabled={page < 2}
        type="button"
        role="button"
        className="flex gap-4 text-gray-400 items-center px-3 py-2 rounded-tl-[4px] rounded-bl-[4px] border-y border-l border-[#D0D3D9] hover:bg-gray-600 hover:text-white"
      >
        <div className="rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </button>

      {/* part pagination */}

      {count.map((item, i) => (
        <button
          key={i}
          type="button"
          role="button"
          onClick={(e) => onClick(i + 1)}
          className="flex gap-1 text-gray-400 items-center px-4 py-2 border border-[#D0D3D9] hover:bg-gray-600 hover:text-white"
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={(e) => onClick(page < count.length ? page + 1 : page)}
        disabled={page == count.length}
        type="button"
        role="button"
        className="flex gap-1 text-gray-400 items-center px-3 py-2 rounded-tr-[4px] rounded-br-[4px] border-y border-r border-[#D0D3D9] hover:bg-gray-600 hover:text-white"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default Pagination;
