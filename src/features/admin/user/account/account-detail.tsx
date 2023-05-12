import React from "react";
import useAccount from "./account-model";
import { Breadcrumbs } from "@common/components";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";
import ChecklistIcon from "@common/components/icons-new/ChecklistIcon";
import ExportIcon from "@common/components/icons-new/ExportIcon";
import EditIcon from "@common/components/icons-new/EditIcon";

export default function AccountDetail() {
  const account = useAccount();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs items={["User", "Account", "Detail"]} />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">
            Detail Account
          </span>
          <div className="flex items-end gap-4">
            <button
              className="flex items-center gap-2 h-[46px] px-[20px] border border-[#20519F] rounded"
              onClick={() => account.onOpenBack()}
            >
              <ArrowUpIcon className="-rotate-90 w-5 h-5" color="#20519F" />
              <span className="text-[#20519F] text-sm font-semibold">
                Kembali
              </span>
            </button>
            <button
              className="flex items-center gap-2 h-[46px] px-[20px] bg-[#F79009] rounded"
              onClick={() =>
                account.navigate("edit", {
                  state: {
                    edit: true,
                    type: account.type,
                    data: {
                      manpower: "manpower",
                      email: "ayu@mail.com",
                      password: "password",
                      role: "role",
                    },
                  },
                })
              }
            >
              <EditIcon color="white" />
              <span className="text-white text-sm font-semibold">Edit</span>
            </button>
          </div>
        </div>
        <div className="w-full flex gap-[160px] py-[18px] px-[32px] flex-wrap">
          <div className="flex flex-col gap-6">
            <span className="text-2xl text-[#514E4E]">Informasi Manpower</span>
            <span>Status : Active</span>
            <table className="w-[442px]">
              <tbody>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Nama</td>
                  <td className="px-4 py-[6px] font-semibold">
                    Ayu Umi Pertiwi
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-[6px]">Email</td>
                  <td className="px-4 py-[6px] font-semibold">Ayu@mail.com</td>
                </tr>
                <tr className="bg-[#D0D3D9]">
                  <td className="px-4 py-[6px]">Role</td>
                  <td className="px-4 py-[6px] font-semibold">Super Admin</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
