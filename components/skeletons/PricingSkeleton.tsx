import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function PricingSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="mx-auto grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <Card key={i} className={cn("flex flex-col space-y-4 p-4")}>
          <CardHeader className="space-y-3">
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-4 w-3/4" />
          </CardHeader>

          <CardContent className="space-y-5">
            <div>
              <Skeleton className="mb-2 h-8 w-24" />
              <Skeleton className="h-3 w-1/2" />
            </div>

            <ul className="space-y-3">
              {Array.from({ length: 4 }).map((_, j) => (
                <li key={j} className="flex items-center gap-2">
                  <Skeleton className="h-4 w-4 rounded-full" />
                  <Skeleton className="h-3 w-3/4" />
                </li>
              ))}
            </ul>
          </CardContent>

          <CardFooter>
            <Skeleton className="h-10 w-full rounded-md" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
