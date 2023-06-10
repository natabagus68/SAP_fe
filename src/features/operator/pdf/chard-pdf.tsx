import Logo from "../../../assets/png/Logo.png";
import QRCode from "react-qr-code";
export const ChartPadf = () => {
  return (
    <>
      <div className="absolute w-full h-screen flex items-center justify-center bg-gray-500">
        <div className="w-[40%] bg-white p-6">
          <div className="border-4 border-black p-4">
            <header className="w-full flex justify-between items-center">
              <img src={Logo} className="block" width={250} />
              <p className="block font-bold text-2xl">FO/PPC/PPC/067 Rev:0</p>
            </header>
            <body className="mt-11">
              <section className="flex flex-col gap-3">
                <div className="flex gap-3 items-center">
                  <h1 className="text-2xl font-semibold">Material</h1>
                  <h1 className="text-2xl font-semibold">
                    : NDHANC-SK59JEAHCA
                  </h1>
                </div>
                <div className="flex gap-3 items-center">
                  <h1 className="text-2xl font-semibold">Part Name</h1>
                  <h1 className="text-2xl font-semibold">
                    : RAIL REAR GRAB K59J (SFG){" "}
                  </h1>
                </div>
              </section>
              <div className="flex justify-between">
                <section className="flex flex-col gap-3 mt-12">
                  <div className="flex gap-3 items-center">
                    <h1 className="text-2xl font-semibold">Qty / Pack</h1>
                    <h1 className="text-2xl font-semibold">: 54 Pcs</h1>
                  </div>
                  <div className="flex gap-3 items-center">
                    <h1 className="text-2xl font-semibold">Date</h1>
                    <h1 className="text-2xl font-semibold">
                      : 22 May 2023 | 11:45
                    </h1>
                  </div>
                  <div className="flex gap-3 items-center">
                    <h1 className="text-2xl font-semibold">No. MC</h1>
                    <h1 className="text-2xl font-semibold">: -</h1>
                  </div>
                </section>

                <div className="flex flex-col justify-center">
                  <QRCode
                    size={56}
                    style={{ height: "auto", maxWidth: "100%", width: "90%" }}
                    value={"JANCOK"}
                    viewBox={`0 0 256 256`}
                  />
                  <p className="text-neutral-500 mt-4 ">NM13011603202100008</p>
                </div>
              </div>
            </body>
          </div>
        </div>
      </div>
    </>
  );
};

