import LoadingIcon from "@common/components/icons-new/LoadingIcon";
import useGuest from "./guest-model";

export default function GuestView() {
  const guest = useGuest();
  return guest.isLoading ? (
    <main className="w-screen h-screen flex bg-gray-200 items-center justify-center">
      <LoadingIcon className="animate-spin w-[80px] h-[80px]" />
    </main>
  ) : null;
}