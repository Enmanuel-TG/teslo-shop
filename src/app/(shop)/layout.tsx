import { TopMenu } from "@/src/components";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="">
    <TopMenu/>
    {children}</div>;
}
