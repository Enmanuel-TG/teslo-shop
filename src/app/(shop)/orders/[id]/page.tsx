import { Title } from "@/src/components";
import { initialData } from "@/src/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

const productInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface Props {
  params: {
    id: string;
  };
}

export default function ({ params }: Props) {

  const { id } = params;
  //TODO fix
  return (
    <div className="flex justify-center items-center mb-72 px-4">
      <div className="flex flex-col w-[1000px]">
        <Title title={`Order #${id}`} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col">
            <div
              className={clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  "bg-red-500": false,
                  "bg-green-500": true,
                }
              )}
            >
              <IoCartOutline size={30} />
              <span className="mx-2">Pending</span>
              <span className="mx-2">Already</span>
            </div>

            {productInCart.map((product) => (
              <div
                className="shadow-lg drop-shadow-black flex mt-5"
                key={product.slug}
              >
                <Image
                  className="rounded"
                  src={`/products/${product.images[0]}`}
                  alt={product.title}
                  width={100}
                  height={100}
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                />
                <div>
                  <p>{product.title}</p>
                  <p>${product.price}x 3</p>
                  <p className="font-bold">SubTotal: {product.price * 3}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="px-4">
            <h2 className="text-2xl font-bold mb-2">Delivery address</h2>
            <div className="mb-10">
              <p className="text-xl">Enmanuel</p>
              <p>Av. Duarte</p>
              <p>Col. Centro</p>
              <p>Alcaldia Central</p>
              <p>Santiago</p>
              <p>Cp 12121212 </p>
              <p>123.123.123.123</p>
            </div>
            <hr className="mb-10" />
            <h2 className="text-2xl mb-2 ">Your Orders</h2>
            <div className="p-7 rounded-xl shadow-xl px-4">
              <div className="grid grid-cols-2 ">
                <span>#No. Products</span>
                <span className="text-right">3 article</span>

                <span>SubTotal</span>
                <span className="text-right">$ 100</span>

                <span>tax</span>
                <span className="text-right">$ 100</span>

                <span className="text-2xl mt-5">Total:</span>
                <span className="text-right mt-5">$ 100</span>
              </div>
              <div
                className={clsx(
                  "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mt-5",
                  {
                    "bg-red-500": false,
                    "bg-green-500": true,
                  }
                )}
              >
                <IoCartOutline size={30} />
                <span className="mx-2">Pending</span>
                <span className="mx-2">Already</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
