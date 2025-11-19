import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { PricingCardProps } from "@/types/pricing";

export function PricingCard({
  title,
  priceDetails,
  description,
  features,
  buttonText,
  buttonVariant = "secondary",
  isPopular,
}: Omit<PricingCardProps, "_id">) {
  const { price, priceDescription } = priceDetails;
  return (
    <Card
      className={cn(
        "relative flex flex-col transition-all hover:shadow-lg",
        isPopular && "scale-105 border-brand shadow-md",
      )}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge className="!bg-brand !text-white">Recommended</Badge>
        </div>
      )}

      <CardHeader className="pb-8">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="paragraph">{description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 space-y-6">
        <div>
          <div className="text-4xl font-bold">{price}</div>
          {price !== "Let's Talk" && (
            <p className="mt-1 text-sm text-muted">{priceDescription}</p>
          )}
        </div>

        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="mt-0.5 size-5 shrink-0 text-brand-600 dark:text-brand-200" />
              <span className="text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button variant={buttonVariant} className="w-full" size="lg">
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}
