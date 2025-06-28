import { notFound } from "next/navigation";
import { ProductGrid, Title } from "@/src/components";
import { initialData } from "@/src/seed/seed";
import { Category } from "@/src/components/interfaces";
import { BiCategory } from "react-icons/bi";

interface Props {
  params: {
    id: Category;
  };
}
const category: Category[] = ["kid", "men", "women"];

export default async function ({ params }: Props) {
  const { id } = await (params as unknown as Promise<{ id: string }>);
  const seedProduct = initialData.products;
  const products = seedProduct.filter((product) => product.gender === id);

  if (!category.includes(id as Category)) {
    notFound();
  }

  return (
    <>
      <Title
        title={`Product for ${id}`}
        subtitle="All Product"
        className="mb-2"
      />
      <ProductGrid products={products} />
    </>
  );
}
