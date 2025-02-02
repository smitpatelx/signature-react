"use client";

import { cn } from "@spx/lib/common";
import { useEffect, useState } from "react";

type EventHandlerProps = { preventDefault: () => void; stopPropagation: () => void };
type KeyboardEventHandlerProps = { key: string } & EventHandlerProps;

export const Switch = ({
  value: initialValue,
  label,
  id,
  onChange,
}: {
  value: boolean;
  label: string;
  id: string;
  onChange: (value: boolean) => void;
}) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleToggle = () => {
    setValue(!value);
    onChange(!value);
  };

  const handleEvent = (e: EventHandlerProps) => {
    e.preventDefault();
    e.stopPropagation();
    handleToggle();
  };

  const handleKeyDown = (e: KeyboardEventHandlerProps) => {
    if (e.key === "Enter" || e.key === " ") {
      handleEvent(e);
    }
  };

  return (
    <div>
      <fieldset className="flex items-center gap-x-2">
        <label
          htmlFor={id}
          onClick={handleEvent}
          onKeyDown={handleKeyDown}
          className="text-sm font-medium text-zinc-300 select-none cursor-default"
        >
          {label}
        </label>

        <div
          className={cn(
            "w-10 h-5 inline-block rounded-full border-zinc-700 focus:border-zinc-700",
            "transition-transform duration-200 ease-in-out relative",
            "focus:outline-none focus-visible:ring-1 focus-visible:ring-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950",
            {
              "bg-green-600": value,
              "bg-zinc-600": !value,
            },
          )}
          onClick={handleEvent}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div
            className={cn(
              "w-4 h-4 rounded-full bg-white absolute left-1/2 top-1/2 -translate-y-1/2",
              "transform transition-transform duration-200 ease-in-out",
              {
                "translate-x-[2px]": value,
                "translate-x-[calc(-100%-2px)]": !value,
              },
            )}
          />
        </div>

        <input type="checkbox" id={id} checked={value} hidden readOnly className="hidden" />
      </fieldset>
    </div>
  );
};
