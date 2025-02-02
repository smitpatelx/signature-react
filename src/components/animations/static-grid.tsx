import { cn } from "@spx/lib/common";
import { Icon } from "@spx/components";

export const StaticGrid = () => {
  return (
    <div
      className="w-[calc(100%-6rem)] h-[80%] grid grid-cols-3 gap-0 mx-auto
                  fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[calc(50%-1.5rem)] -z-20 pointer-events-none"
    >
      {Array(9)
        .fill(null)
        .map((_, index, array) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            className={cn("border border-zinc-900 relative", {
              "border-r": index === array.length - 1,
              "border-l": index > 0,
              "ml-px": index % 3 === 0,
              "mr-px": (index + 1) % 3 === 0,
            })}
          >
            <Icon
              icon="plus"
              className="absolute text-lime-100 top-0 left-0 -translate-x-1/2 -translate-y-1/2
                        z-10 animate-pulse duration-300 ease-in-out stroke-1"
              size="lg"
            />

            {(index + 1) % 3 === 0 && (
              <Icon
                icon="plus"
                className="absolute text-lime-100 top-0 right-0 translate-x-1/2 -translate-y-1/2
                          z-10 animate-pulse duration-300 ease-in-out stroke-1"
                size="lg"
              />
            )}

            {index >= array.length - Math.sqrt(array.length) && (
              <Icon
                icon="plus"
                className="absolute text-lime-100 bottom-0 right-0 translate-x-1/2 translate-y-1/2
                          z-10 animate-pulse duration-300 ease-in-out stroke-1"
                size="lg"
              />
            )}

            {index === array.length - Math.sqrt(array.length) && (
              <Icon
                icon="plus"
                className="absolute text-lime-100 bottom-0 left-0 -translate-x-1/2 translate-y-1/2
                          z-10 animate-pulse duration-300 ease-in-out stroke-1"
                size="lg"
              />
            )}
          </div>
        ))}
    </div>
  );
};
