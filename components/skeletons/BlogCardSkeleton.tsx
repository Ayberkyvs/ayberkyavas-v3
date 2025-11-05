import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogCardSkeleton() {
  return (
    <Card className="w-full min-w-[370px] rounded-lg">
      <CardHeader className="h-fit w-full">
        <Skeleton className="mb-4 aspect-video h-auto w-full rounded-t-lg" />{" "}
        {/* Image */}
        <div className="flex h-fit w-fit gap-1">
          <Skeleton className="h-4 w-16" /> {/* Category */}
          <Skeleton className="h-4 w-4" /> {/* Dot */}
          <Skeleton className="h-4 w-16" /> {/* Views */}
        </div>
        <Skeleton className="mt-2 h-6 w-3/4" /> {/* Title */}
      </CardHeader>
      <CardContent className="w-full">
        <Skeleton className="h-16 w-full" /> {/* Description */}
      </CardContent>
      <CardFooter className="flex h-fit flex-col items-start gap-2">
        <hr className="w-full border-border-soft" />
        <div className="flex w-full items-center gap-2">
          <Skeleton className="h-8 w-8 rounded-full" /> {/* Author image */}
          <Skeleton className="h-5 w-32" /> {/* Author name */}
        </div>
      </CardFooter>
    </Card>
  );
}
