import EmailIcon from "@common/components/icons-new/EmailIcon";
import EyeHideIcon from "@common/components/icons-new/EyeHideIcon";
import EyeShowIcon from "@common/components/icons-new/EyeShowIcon";
import LockIcon from "@common/components/icons-new/LockIcon";
import EyesShowHide from "@common/components/icons/ShowHideIcon";
import useLogin from "./login-model";
import { EyeIcon } from "@common/components/icons";
import myLogo from "../../assets/my-logo.svg";
import maintenanceLogo from "../../assets/maintenance-logo.png";
import poweredByLogo from "../../assets/powered-by-logo.png";

export default function LoginView() {
  const login = useLogin();
  return (
    <main className="w-screen h-[100dvh] flex">
      <div className="flex-1 bg-[#20519F] flex items-center justify-center relative">
        <img src={maintenanceLogo} alt="My Logo" className="h-[346px] w-fit" />
        <img src={poweredByLogo} alt="My Logo" className="h-[105px] w-fit absolute bottom-10" />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <form
          className="w-[479px] h-[616px] bg-white rounded-xl border border-[#20519F] shadow-[#20519F] shadow-lg px-[72px] py-[92px] flex flex-col justify-between"
          onSubmit={login.onSubmitLogin}
        >
          <div className="flex flex-col">
            <img src={myLogo} alt="My Logo" className="h-[94px] w-fit" />
            <span className="font-extrabold text-[34px] text-[#514E4E]">
              Selamat Datang.
            </span>
            <span className="text-[16px] text-[#514E4E]">
              Masuk dengan akun anda
            </span>
          </div>
          <div className="flex flex-col gap-[25px]">
            <div className="w-full h-[52px] bg-[#EFF1F999] px-[18px] flex items-center gap-[16px] rounded-lg">
              <EmailIcon />
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                className=" bg-transparent w-full h-full outline-none"
              />
            </div>
            <div className="w-full h-[52px] bg-[#EFF1F999] px-[18px] flex items-center gap-[16px] rounded-lg">
              <LockIcon />
              <input
                type={`${login.isPasswordShow ? "text" : "password"}`}
                name="password"
                placeholder="Password"
                className=" bg-transparent w-full h-full outline-none"
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
          <span className="text-[#F04438] opacity-0">
            Your password is not correct
          </span>
          <button className="w-full h-[44px] bg-[#20519F] rounded-xl text-white text-base">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}