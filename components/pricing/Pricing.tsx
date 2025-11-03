import { AlertCircleIcon, Check } from "lucide-react";
import { PricingCard } from "./pricing-card";
import FadeIn from "../animations/FadeIn";
import { client } from "@/sanity/lib/client";
import { GET_PRICING_CARD_QUERY } from "@/sanity/lib/queries";
import { PricingCardProps } from "@/types/pricing";
import { v4 as uuidv4 } from "uuid";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

const Pricing = async () => {
  const { pricingCards } = (await client.fetch(GET_PRICING_CARD_QUERY)) || {
    pricingCards: [],
  };

  if (!pricingCards || pricingCards.length === 0) {
    return (
      <Alert variant="destructive" className="mt-8 gap-2">
        <AlertCircleIcon />
        <AlertTitle>Unable to load plans</AlertTitle>
        <AlertDescription>
          <p>Please try again later.</p>
        </AlertDescription>
      </Alert>
    );
  }
  return (
    <>
      <div className="mx-auto grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {pricingCards.map((card: PricingCardProps, index: number) => (
          <FadeIn
            delay={0.1 + index * 0.1}
            duration={0.8}
            direction="up"
            key={uuidv4()}
          >
            <PricingCard
              title={card.title}
              priceDetails={card.priceDetails}
              description={card.description}
              features={card.features}
              buttonText={card.buttonText}
              buttonVariant={card.buttonVariant}
              isPopular={card.isPopular}
            />
          </FadeIn>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="mb-4 text-muted">
          All plans include clean, maintainable code and comprehensive
          documentation
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-brand-600 dark:text-brand-200" />
            <span>Modern tech stack</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-brand-600 dark:text-brand-200" />
            <span>Mobile-first approach</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-brand-600 dark:text-brand-200" />
            <span>Best practices</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
