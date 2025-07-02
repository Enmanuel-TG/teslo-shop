import { initialData } from "@/src/seed/seed";
import notFound from "../../category/not-found";
import { geistSans } from "@/src/config/fonts";
import { ProductSlideshow, QuantitySelector, SizeSelector } from "@/src/components";

interface Props {
  params: {
    slug: string;
  };
}

const products = initialData.products;

export default function ({ params }: Props) {
  const { slug } = params;
  const product = products.find(product => product.slug === slug);
  if (!product) {
    return notFound();
   }
  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="col-span-1 md:col-span-2">
        <ProductSlideshow images={product.images} title={product.slug}/>
      </div>
      <div className="col-span-1 px-5">
        <h1 className={`${geistSans.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-log mb-5">{product.price}</p>

        <SizeSelector selectedSize={product.sizes[0]} availableSize={product.sizes} />
        <QuantitySelector quantity={5}/>

        <button className="btn-primary my-5">add to cart</button>
        <h3 className="font-bold text-sm">description</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}
