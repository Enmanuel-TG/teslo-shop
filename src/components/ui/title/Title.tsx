import { geistSans } from "@/src/config/fonts";

interface Props {
  title: string;
  subtitle?: string;
  className: string;
}


export const Title = ({title, subtitle, className}: Props) => {
  return (
    <div className={`mt-3${className}`}>
      <h1 className={`${geistSans.className} antialiased text-4xl font-semibold mb-6 mt-2`}>{title}</h1>
      {subtitle && <h3 className="text-ml mb-5"> { subtitle}</h3>}
    </div>
  );
}
