"use client";

import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
}
export const QuantitySelector = ({ quantity }: Props) => {
  const [count, setCount] = useState(quantity);

  function quantityResult(value: number) {
    if (count + value < 1) return;
    setCount(count + value);
  }

  return (
    <div className="flex">
      <button onClick={()=>{quantityResult(-1)}}>
        <IoRemoveCircleOutline size={30} />
      </button>
      <span className="w-16 bg-gray-100 text-center rounded">{count}</span>
      <button onClick={()=>{quantityResult(1)}}>
        <IoAddCircleOutline size={30} />
      </button>
    </div>
  );
};
