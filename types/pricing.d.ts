export interface PricingCardProps {
  _id: string;
  title: string;
  description: string;
  priceDetails: {
    price: string;
    priceDescription: string;
  };
  features: string[];
  buttonText: string;
  buttonVariant?: "default" | "secondary";
  isPopular?: boolean;
}

export interface ComparisonTableFeature {
  _id: number;
  name: string;
  starter: boolean;
  professional: boolean;
  custom: boolean;
}
