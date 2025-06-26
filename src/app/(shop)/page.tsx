import { ProductGrid, Title } from "@/src/components";
import { initialData } from "@/src/seed/seed";


const product = initialData.products;

export default function ShopPage() {
  return (
    <>
      <Title title="Store" subtitle="All Product" className="mb-2" />
      <ProductGrid products={product}/>
    </>
  );
}
