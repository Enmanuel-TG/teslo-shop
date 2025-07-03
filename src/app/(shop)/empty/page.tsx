import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

export default function () {
  return (
    <div className="flex justify-center items-center h-[800px]">
      <IoCartOutline size={80} className="mx-5"/>
      <div className="flex flex-col items-center ">
        <h1 className="text-xl font-semibold">
          You cart's empty
        </h1>
        <Link className="text-blue-500 mt-2 underline text-4xl" href="/">Return</Link>
      </div>
    </div>
  );
}