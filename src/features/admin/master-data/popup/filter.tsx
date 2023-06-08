import Modal from "@common/components/modals/Modal";
import FilterIcon from "@common/components/icons-new/FilterIcon";

export default function FilterModal({ open, close }) {
  return (
    <Modal open={open}>
      <div className="flex items-center text-[#667085] font-[700] gap-3">
        <FilterIcon width="22px" height="22px" />
        <h1 className="text-2xl">Filter</h1>
      </div>
      <div className="text-[#667085] my-2">
        <h1 className="mb-2 font-[600]">Sort By</h1>
        <select
          name="sorting"
          id="sorting"
          className="border h-[46px] px-5 border-[#667085] rounded-[4px] bg-[#FFFFFF] text-sm"
        >
          <option className="text-sm">Ascending</option>
          <option className="text-sm">Descending</option>
          <option className="text-sm">Last Update</option>
          <option className="text-sm">First Update</option>
        </select>
      </div>
      <div className="text-[#667085]">
        <h1 className="mb-2 font-[600]">Location</h1>
        <label htmlFor="line-one" className="flex gap-3">
          <input type="checkbox" name="line-one" />
          Line 1
        </label>
        <label htmlFor="line-two" className="flex gap-3">
          <input type="checkbox" name="line-two" />
          Line 2
        </label>
        <label htmlFor="line-three" className="flex gap-3">
          <input type="checkbox" name="line-three" />
          Line 3
        </label>
        <label htmlFor="line-four" className="flex gap-3">
          <input type="checkbox" name="line-four" />
          Line 4
        </label>
        <label htmlFor="line-five" className="flex gap-3">
          <input type="checkbox" name="line-five" />
          Line 5
        </label>
        <label htmlFor="line-six" className="flex gap-3">
          <input type="checkbox" name="line-six" />
          Line 6
        </label>
      </div>
      <div className="flex gap-3 my-2">
        <button className="px-8 h-[46px] text-[#FFFFFF] bg-[#20519F] rounded-[4px] text-sm font-[600]">
          Apply
        </button>
        <button
          className="px-8 h-[46px] bg-[#FFFFFF] border border-[#667085] text-[#667085] rounded-[4px] text-sm font-[600]"
          onClick={close}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
}
