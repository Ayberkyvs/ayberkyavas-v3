import { Cover } from "@/components/ui/cover";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section
        className="hero">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/70 to-white/70">
          Building amazing websites <br /> at <Cover>warp speed</Cover>
        </h1>
      </section>
    </>
  );
}
