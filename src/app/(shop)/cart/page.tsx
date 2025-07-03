import { QuantitySelector, Title } from "@/src/components";
import { initialData } from "@/src/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const productInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function () {

  if (productInCart.length === 0) {
    redirect("/empty")
  }

  return (
    <div className="flex justify-center items-center mb-72 px-4">
      <div className="flex flex-col w-[1000px]">
        <Title title="Cart" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col">
            <span className="text-xl">Add more items</span>
            <Link href={"/"} className="underline mb-5">
              continue shopping
            </Link>

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
                  <p>${product.price}</p>
                  <QuantitySelector quantity={3} />
                  <button className="underline mt-3">Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="px-4">
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
              <div className="mt-5 mb-2 w-full">
                <Link
                  className="flex btn-primary justify-center"
                  href="/checkout/address"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
