import { useCastingMachiningPrint } from "./casting-machining-print-view-model";

export const CastingMachiningPrint = () => {
  const model = useCastingMachiningPrint();
  return (
    <>
      <section className="w-full">
        <form action="" className="w-full">
          <div className="w-full flex ">
            <div className="w-1/2 px-6 flex flex-col gap-14">
              {/* Machine */}
              <div className="flex flex-col gap-3 text-start ">
                <label htmlFor="Machine" className="text-neutral-500 text-2xl">
                  Machine
                </label>
                <select
                  placeholder="Choose machine"
                  value={""}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md outline-none bg-transparent  text-xl"
                >
                  <option value="" disabled selected>
                    Choose machine
                  </option>
                </select>
              </div>
              {/* Machine Deskription */}
              <div className="flex flex-col gap-3 text-start ">
                <label className="text-neutral-500 text-2xl">
                  Material Description
                </label>
                <select
                  placeholder="Choose machine"
                  value={""}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md outline-none bg-transparent  text-xl"
                >
                  <option value="" disabled selected>
                    Choose machine
                  </option>
                </select>
              </div>
              {/* Pro Number  */}
              <div className="flex flex-col gap-3 text-start ">
                <label className="text-neutral-500 text-2xl">Pro Number</label>
                <input
                  readOnly
                  disabled
                  value={"HELOOOO"}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md outline-none bg-gray-3 00  text-xl"
                />
              </div>
              {/* QR Tag Number  */}
              <div className="flex flex-col gap-3 text-start ">
                <label className="text-neutral-500 text-2xl">
                  QR Tag Number
                </label>
                <input
                  readOnly
                  disabled
                  value={"HELOOOO"}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md outline-none bg-gray-3 00  text-xl"
                />
              </div>
            </div>
            <div className="w-1/2 px-6">
              <div className="flex flex-col gap-3 text-start ">
                <label className="text-neutral-500 text-2xl">
                  QR Tag Number
                </label>
                <input
                  type="text"
                  placeholder="2352"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md outline-none bg-gray-3 bg-transparent  text-xl"
                />
              </div>
              <button
                type="button"
                className="px-4 py-3 rounded-md text-center text-white bg-blue-700 mt-5 flex gap-2 items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
                Save Changes
              </button>
            </div>
          </div>

          <section className="w-full mt-12 px-6">
            <button className="flex items-center gap-3 justify-center text-white text-2xl py-5 bg-blue-700 rounded-md w-full">
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
                  d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
                />
              </svg>
              Print
            </button>
          </section>
        </form>
      </section>
    </>
  );
};

