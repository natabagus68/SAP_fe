export const Pagination = ({
  page = null,
  limit = null,
  row = null,
  changePage = null,
}) => {
  const counting = Math.ceil(Number(row) / Number(limit));

  const temp = [];
  for (let i = 0; i < counting; i++) {
    temp.push(1);
  }

  if (temp) {
    return (
      <>
        <div className="flex items-center">
          <button className="border border-gray-300 rounded-l-md text-center py-5 px-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              />
            </svg>
          </button>

          {temp.map((item, i) => {
            return (
              <button className="border border-gray-300 px-6 py-5 text-center hover:bg-gray-200">
                {i + 1}
              </button>
            );
          })}

          <button className="border border-gray-300 rounded-r-md text-center py-5 px-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </button>
        </div>
      </>
    );
  }
};

