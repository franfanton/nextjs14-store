import { Hero } from "app/components/home/Hero";
import { Description } from "app/components/home/Description";
import "app/sass/globals.sass";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Hero />
      <Description />
      {children}
    </div>
  );
}
