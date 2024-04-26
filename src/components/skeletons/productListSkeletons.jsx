import { Skeleton } from "@/components/ui/skeleton";

export function ProductListSkeletons() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {new Array(8).fill().map((_, index) => (
          <div className="flex flex-col space-y-3" key={index}>
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
