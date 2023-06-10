import { Outlet } from "react-router-dom";
import Logo from "../../../assets/png/Logo.png";
import { useLayoutOperator } from "./layout-operator-view-model";
import layoutContex from "./layout-contex";
import { useContext } from "react";
export const LayoutOperator = () => {
  const model = useLayoutOperator();
  return (
    <>
      <body className="w-full  pt-12 px-20 bg-white h-screen">
        <header className="w-full flex justify-between items-center">
          <section>
            <img src={Logo} alt="logo" width={250} />
          </section>
          <section className="text-center">
            <h1 className="font-bold text-5xl mb-3">{model.title.title}</h1>
            <h3 className="text-xl text-neutral-500">
              {model.title.textTitle}
            </h3>
          </section>
          <section>
            <h1 className="text-neutral-500 text-xl fo">
              {model.currentTime.format("YYYY-MM-DD HH:mm:ss")}
            </h1>
          </section>
        </header>

        <hr className="border-1 border-black mt-8" />
        <main className="w-full py-8">
          <layoutContex.Provider
            value={{ title: model.title, handleTitle: model.handleTitle }}
          >
            <Outlet />
          </layoutContex.Provider>
        </main>
      </body>
    </>
  );
};

