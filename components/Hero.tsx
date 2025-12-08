import { client } from "@/sanity/lib/client";
import { HeroParallax } from "./ui/hero-parallax";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";

export default async function Hero() {
  let products = await client.fetch(PROJECTS_QUERY);

  // need is 15 items
  while (products.length < 15) {
    const diff = 15 - products.length;
    const toAdd = products.slice(0, diff);
    products = products.concat(toAdd);
  }

  return (
    <div>
      <HeroParallax products={products} />
    </div>
  );
}
