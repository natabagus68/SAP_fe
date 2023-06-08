import EmailIcon from "@common/components/icons-new/EmailIcon";
import EyeHideIcon from "@common/components/icons-new/EyeHideIcon";
import EyeShowIcon from "@common/components/icons-new/EyeShowIcon";
import LockIcon from "@common/components/icons-new/LockIcon";
import useLogin from "./login-model";
import LoadingIcon from "@common/components/icons-new/LoadingIcon";
import heroLogin from "../../assets/hero-login.svg";
import myLogin from "../../assets/my-logo.svg";

export default function LoginView() {
  const login = useLogin();
  return login.isLoading ? (
    <main className="w-screen h-screen flex bg-gray-200 items-center justify-center">
      <LoadingIcon className="animate-spin w-[80px] h-[80px]" />
    </main>
  ) : (
    <main className="w-screen h-[100dvh] flex">
      <div className="flex-1 bg-[#20519F] flex items-center justify-center relative">
        <img src={heroLogin} alt="hero-image" />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <form
          className="w-[479px] h-[616px] bg-white rounded-xl border border-[#20519F] shadow-[#20519F] shadow-lg px-[72px] py-[92px] flex flex-col justify-between"
          onSubmit={login.handleSubmit(login.onSubmitLogin)}
        >
          <div className="flex flex-col">
            <img src={myLogin} alt="My Logo" className="h-[94px] w-fit" />
            <span className="font-extrabold text-[34px] text-[#514E4E]">
              Selamat Datang.
            </span>
            <span className="text-[16px] text-[#514E4E]">
              Masuk dengan akun anda
            </span>
          </div>
          <div className="flex flex-col gap-[25px]">
            <div
              className={`w-full h-[52px] ${
                login.errors.email ? "bg-red-100" : "bg-[#EFF1F999]"
              } px-[18px] flex items-center gap-[16px] rounded-lg`}
            >
              <EmailIcon />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent w-full h-full outline-none"
                {...login.register("email", { required: true })}
              />
            </div>
            <div
              className={`w-full h-[52px] ${
                login.errors.password ? "bg-red-100" : "bg-[#EFF1F999]"
              } px-[18px] flex items-center gap-[16px] rounded-lg`}
            >
              <LockIcon />
              <input
                type={`${login.isPasswordShow ? "text" : "password"}`}
                placeholder="Password"
                className=" bg-transparent w-full h-full outline-none"
                {...login.register("password", { required: true })}
              />
              {login.isPasswordShow ? (
                <EyeShowIcon
                  color="#6E7079"
                  className="w-[22px] h-[22px]"
                  onClick={() => login.onPasswordShow()}
                />
              ) : (
                <EyeHideIcon
                  color="#6E7079"
                  className="w-[22px] h-[22px]"
                  onClick={() => login.onPasswordShow()}
                />
              )}
            </div>
          </div>
          <span
            className={`text-[#F04438] text-center ${
              login.messages ? "opacity-100" : "opacity-0"
            }`}
          >
            {login.messages || "-"}
          </span>
          <button className="w-full h-[44px] bg-[#20519F] rounded-[4px] text-white text-base">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
