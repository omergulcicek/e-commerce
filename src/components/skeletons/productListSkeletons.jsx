import { Skeleton } from "@/components/ui/skeleton";

export function ProductListSkeletons({ count = 4 }) {
  return (
    <>
      <div className="grid grid-cols-4 gap-8">
        {new Array(count).fill().map((_, index) => (
          <div className="flex flex-col space-y-3 p-4" key={index}>
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
