import { Breadcrumbs } from "@common/components";
import { useQr } from "./qr-view-model";
import NoData from "../../../../assets/NoData.png";
export const Qr = () => {
  const model = useQr();
  return (
    <>
      <div>
        <Breadcrumbs items={["Dashboard", "Scan QR"]} />
      </div>
      <div className="mt-12">
        <div className="m-auto w-1/5 py-4 px-2 rounded-md bg-gray-200">
          <div className="text-center">
            <p className="text-xl text-gray-400">QR Tag Number</p>
          </div>
          <div className="text-center mt-6">
            <p className="text-2xl text-gray-400 font-bold">
              NM13011603202100008
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-32">
          <img src={NoData} alt="logo" width={500} className="hidden" />
          {/* content */}
          <div className="w-full py-8 pb-12 px-12 rounded-md bg-gray-200">
            <h1 className="text-4xl text-gray-700 font-bold text-center">
              Information
            </h1>
            <main className="flex justify-between  mt-8">
              <section>
                <div>
                  <h1 className="text-3xl text-gray-400 font-semibold">
                    Material
                  </h1>
                  <h1 className="text-3xl text-gray-700 font-bold">
                    {" "}
                    1012101345068,489597338
                  </h1>
                </div>
                <div className="mt-8">
                  <h1 className="text-3xl text-gray-400 font-semibold">Date</h1>
                  <h1 className="text-3xl text-gray-700 font-bold">
                    {" "}
                    16/08/2013 18:37:12
                  </h1>
                </div>
              </section>
              <section>
                <div>
                  <h1 className="text-3xl text-gray-400 font-semibold">
                    Part Name
                  </h1>
                  <h1 className="text-3xl text-gray-700 font-bold">
                    {" "}
                    RAIL REAR GRAB K59J (SFG)
                  </h1>
                </div>
                <div className="mt-8">
                  <h1 className="text-3xl text-gray-400 font-semibold">Date</h1>
                  <h1 className="text-3xl text-gray-700 font-bold"> -</h1>
                </div>
              </section>
              <section className="">
                <div>
                  <h1 className="text-3xl text-gray-400 font-semibold">
                    Quantity/Pack
                  </h1>
                  <h1 className="text-3xl text-gray-700 font-bold">
                    {" "}
                    1012 ke 1013
                  </h1>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

