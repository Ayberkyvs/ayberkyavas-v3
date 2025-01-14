import InfiniteScrollHorizontal from "@/components/animations/InfiniteScrollHorizontal";
import { Cover } from "@/components/ui/cover";

export default function Home() {
  const brands = [
    {
      name: "Meta",
      logo: "/brands/meta-logo.svg",
    },
    {
      name: "MongoDB",
      logo: "/brands/mongodb-logo.svg",
    },
    {
      name: "Scrimba",
      logo: "/brands/scrimba-logo.svg",
    },
    {
      name: "FreeCodeCamp",
      logo: "/brands/freecodecamp-logo.svg",
    },
    {
      name: "Turkcell",
      logo: "/brands/turkcell-logo.svg",
    },
  ];
  return (
    <>
      <section
        className="hero">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/70 to-white/70">
          Building amazing websites <br /> at <Cover>warp speed</Cover>
        </h1>
      </section>
      <section className="certifications">
        <p className="sub-heading">CERTIFICATED BY</p>
        <div className="flex justify-between max-w-screen-xl w-full mx-auto overflow-hidden">
          {brands && brands.map((brand)=> (
            <div key={brand.logo} className="flex justify-center items-center gap-2">
              <img src={brand.logo} alt={`${brand.name} logo svg`} width={60} height={60} />
              <p className="heading-6">{brand.name}</p>
            </div>
          ))}
          {/* <InfiniteScrollHorizontal /> */}
        </div>
      </section>
    </>
  );
}
