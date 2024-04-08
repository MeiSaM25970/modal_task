import Link from "next/link";
import Modal from "./component/modal";


type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Page({ searchParams }: SearchParamProps) {
  const show = searchParams?.show;

  return (
    <div  className=" m-auto text-center rounded-sm text-white bg-blue-300 w-60 py-5">
    <Link href="/?show=true" >
       CLICK TO OPEN MODAL
      </Link>
      

      {show && <Modal />}
    </div>
  );
}