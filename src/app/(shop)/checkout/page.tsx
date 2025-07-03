import { QuantitySelector, Title } from "@/src/components";
import { initialData } from "@/src/seed/seed";
import Image from "next/image";
import Link from "next/link";

const productInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function () {
  return (
    <div className="flex justify-center items-center mb-72 px-4">
      <div className="flex flex-col w-[1000px]">
        <Title title="Check order" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col">
            <span className="text-xl">check items</span>
            <Link href={"/cart"} className="underline mb-5">
              Edit cart
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
              <div className="mt-5 mb-2 w-full">
                <p className="mb-5">
                  <span className="text-xs">
                    By clicking take order you agree to our{" "}
                    <a className="underline" href="#">
                      terms
                    </a>{" "}
                    and{" "}
                    <a className="underline" href="#">
                      conditions
                    </a>
                  </span>
                </p>
                <Link
                  className="flex btn-primary justify-center"
                  href="/orders/123"
                >
                  Take order
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
