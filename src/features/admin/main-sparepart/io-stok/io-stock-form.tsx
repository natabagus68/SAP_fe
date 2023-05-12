import { Breadcrumbs } from "@common/components";
import useIoStock from "./io-stock-model";
import ModalConfirm from "@common/components/modals/ModalConfirm";
import ModalSuccess from "@common/components/modals/ModalSeccess";

export default function IoStockForm() {
  const ioStock = useIoStock();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <ModalConfirm
        open={ioStock.openModalConfirm}
        setOpen={ioStock.setOpenModalConfirm}
        setOpenSuccess={ioStock.setOpenModalSuccess}
        confirmMessage="Apakah data yang dimasukkan sudah benar?"
        cb={(setIsLoading) => {
          setTimeout(() => {
            setIsLoading({ loading: false, exec: true });
            console.log(ioStock.dataTransaction);
          }, 3000);
        }}
      />
      <ModalSuccess
        open={ioStock.openModalSuccess}
        setOpen={ioStock.setOpenModalSuccess}
        successMessage="Data anda telah berhasil disimpan."
      />
      <Breadcrumbs items={["Sparepart", "Log Transaksi", "Create Data"]} />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <span className="text-2xl text-[#514E4E] font-bold ">
            Create Data
          </span>
        </div>
        <form
          className="w-full flex py-[18px] px-[32px] gap-4 flex-wrap"
          onSubmit={ioStock.handleSubmit(ioStock.createTransaction)}
        >
          <div className="flex flex-col w-full gap-1">
            <span>Jenis Transaksi</span>
            <div className="flex gap-4 items-center">
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  {...ioStock.register("type")}
                  value="status"
                  defaultChecked
                  className="w-[24px] h-[24px]"
                />
                <span>In</span>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  {...ioStock.register("type")}
                  value="form"
                  className="w-[24px] h-[24px]"
                />
                <span>Out</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-1">
            <span>Part No - Part Name</span>
            <select
              className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                ioStock.errors.name ? "bg-red-100" : "bg-white"
              }`}
              {...ioStock.register("name", { required: true })}
            >
              <option value="">Pilih section</option>
              <option value="section">Section 1</option>
            </select>
          </div>
          <div className="flex flex-col w-full gap-1">
            <span>Quantity</span>
            <input
              type="number"
              className={`h-[40px] border border-[#D0D3D9] rounded px-2 ${
                ioStock.errors.quantity ? "bg-red-100" : "bg-white"
              }`}
              placeholder="Input Quantity"
              {...ioStock.register("quantity", { required: true })}
            />
          </div>
          <div className="flex items-center gap-6">
            <button className="flex items-center justify-center gap-2 h-[46px] w-[181px] px-[20px] bg-[#20519F] rounded text-white text-sm font-semibold">
              Simpan
            </button>
            <button
              className="flex items-center justify-center gap-2 h-[46px] px-[20px] w-[181px] border border-[#20519F] rounded"
              type="button"
              onClick={() => ioStock.navigate("..")}
            >
              <span className="text-[#20519F] text-sm font-semibold">
                Batal
              </span>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
