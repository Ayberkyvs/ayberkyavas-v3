import { AlertCircleIcon, Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { client } from "@/sanity/lib/client";
import { GET_COMPARISON_TABLE_QUERY } from "@/sanity/lib/queries";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { ComparisonTableFeature } from "@/types/pricing";
import FadeIn from "../animations/FadeIn";

export async function ComparisonTable() {
  const { comparisonTable: data } = await client.fetch(
    GET_COMPARISON_TABLE_QUERY,
  );
  const features = data?.features || [];

  if (!features || features.length === 0) {
    return (
      <Alert variant="destructive" className="mt-8 gap-2">
        <AlertCircleIcon />
        <AlertTitle>Unable to load comparison table</AlertTitle>
        <AlertDescription>
          <p>Please try again later.</p>
          <ul className="list-inside list-disc text-sm">
            <li>Maybe it was a temporary issue</li>
            <li>Maybe you tried too much</li>
            <li>Maybe you need to check your internet connection</li>
          </ul>
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="bg-muted/30 w-full py-24">
      <div className="mx-auto px-4">
        <div>
          <Card className="mx-auto w-full overflow-hidden scrollbar-hide">
            <div className="overflow-x-auto">
              <table className="no-scroll w-full overflow-hidden">
                <thead>
                  <tr className="border-b border-border-strong bg-white/50 dark:bg-black/50">
                    <th className="p-4 text-left font-semibold">Feature</th>
                    <th className="p-4 text-center font-semibold">Starter</th>
                    <th className="p-4 text-center font-semibold">
                      Professional
                    </th>
                    <th className="p-4 text-center font-semibold">Custom</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map(
                    (feature: ComparisonTableFeature, index: number) => (
                      <tr
                        className="border-b border-border-soft transition-colors last:border-0 hover:bg-white/30 dark:hover:bg-black/30"
                        key={index}
                      >
                        <td className="p-4 text-base">{feature.name}</td>
                        <td className="p-4 text-center">
                          <FadeIn
                            delay={0.1}
                            direction="down"
                            className="h-fit w-full"
                          >
                            {feature.starter ? (
                              <Check className="mx-auto h-5 w-5 text-brand-600 dark:text-brand-300" />
                            ) : (
                              <X className="mx-auto h-5 w-5 text-muted" />
                            )}
                          </FadeIn>
                        </td>
                        <td className="p-4 text-center">
                          <FadeIn
                            delay={0.3}
                            direction="down"
                            className="h-fit w-full"
                          >
                            {feature.professional ? (
                              <Check className="mx-auto h-5 w-5 text-brand-600 dark:text-brand-300" />
                            ) : (
                              <X className="mx-auto h-5 w-5 text-muted" />
                            )}
                          </FadeIn>
                        </td>
                        <td className="p-4 text-center">
                          <FadeIn
                            delay={0.5}
                            direction="down"
                            className="h-fit w-full"
                          >
                            {feature.custom ? (
                              <Check className="mx-auto h-5 w-5 text-brand-600 dark:text-brand-300" />
                            ) : (
                              <X className="mx-auto h-5 w-5 text-muted" />
                            )}
                          </FadeIn>
                        </td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
