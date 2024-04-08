import Link from "next/link";

import NavigateBack from "@/component/NavigateBack";
import Modal from "./Modal";


type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Page({ searchParams }: SearchParamProps) {
  const show = searchParams?.show;
  console.log(show);
  return (
    <>
      <Link
        href="/?show=true"
        className="flex justify-center  bg-blue-500 text-white text-base  py-3 px-3  font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 "
      >
        please, click to open the modal...
      </Link>

      <Modal isShow={show} mode="right">
        <NavigateBack />
      </Modal>
    </>
  );
}
