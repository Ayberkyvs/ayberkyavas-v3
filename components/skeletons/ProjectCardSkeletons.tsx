import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectCardSkeleton() {
  return (
    <div className="relative flex h-fit min-h-[400px] w-full flex-col items-center gap-5 overflow-hidden rounded-lg border border-card-border bg-card-bg p-[30px] xl:flex-row xl:p-[50px]">
      <div className="flex w-full flex-col gap-5 xl:max-w-[490px]">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-5 w-20" /> {/* time */}
          <Skeleton className="h-6 w-32" /> {/* forWho */}
          <Skeleton className="h-8 w-48" /> {/* title */}
        </div>
        <hr className="border border-border-soft" />
        <Skeleton className="h-20 w-full" /> {/* description */}
        <div className="flex gap-2">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-8 w-24" />
        </div>
      </div>
      <Skeleton className="-bottom-10 flex h-[376px] w-full basis-1/2 xl:absolute xl:-right-12 xl:h-[376px] xl:max-w-[557px]" />
    </div>
  );
}
