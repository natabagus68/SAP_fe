import React from "react";
import useAccount from "./account-model";
import { Breadcrumbs } from "@common/components";

export default function AccountForm() {
  const account = useAccount();

  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs
        items={["User", "Account", account.state?.edit ? "Edit" : "Create"]}
      />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">
            {account?.state?.edit ? "Edit Account" : "Create Account"}
          </span>
        </div>
        <form
          className="w-full flex py-[18px] px-[32px] gap-4 flex-wrap"
          onSubmit={account.handleSubmit(account.createAccount)}
        >
          <div className="flex flex-col w-full gap-1">
            <span>Select Manpower</span>
            <select
              className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                account.errors.manpower ? "bg-red-100" : "bg-white"
              }`}
              {...account.register("manpower", { required: true })}
            >
              <option value="">Pilih Manpower</option>
              <option value="manpower">Manpower 1</option>
            </select>
          </div>
          <div className="flex flex-col w-full gap-1">
            <span>Email</span>
            <input
              type="email"
              className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                account.errors.email ? "bg-red-100" : "bg-white"
              }`}
              placeholder="Masukan Email"
              {...account.register("email", { required: true })}
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <span>Password</span>
            <input
              type="password"
              className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                account.errors.password ? "bg-red-100" : "bg-white"
              }`}
              placeholder="Masukan Password"
              {...account.register("password", { required: true })}
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <span>Role</span>
            <select
              className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                account.errors.role ? "bg-red-100" : "bg-white"
              }`}
              {...account.register("role", { required: true })}
            >
              <option value="">Pilih Role</option>
              <option value="role">Role 1</option>
            </select>
          </div>
        </form>
        <div className="flex items-center gap-6 pb-[32px] px-[32px]">
          <button className="flex items-center justify-center gap-2 h-[46px] w-[181px] px-[20px] bg-[#20519F] rounded text-white text-sm font-semibold">
            Simpan
          </button>
          <button
            className="flex items-center justify-center gap-2 h-[46px] px-[20px] w-[181px] border border-[#20519F] rounded"
            type="button"
            onClick={() => account.navigate("..")}
          >
            <span className="text-[#20519F] text-sm font-semibold">Batal</span>
          </button>
        </div>
      </div>
    </main>
  );
}
