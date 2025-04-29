import { useState } from "react";
import { LucideIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface KeyMetricProps {
  icon: LucideIcon;
  label: string;
  value: string | React.ReactNode;
  isClickable?: boolean;
  onClick?: () => void;
  isLoading?: boolean;
}

export const KeyMetric = ({
  icon: Icon,
  label,
  value,
  isClickable = false,
  onClick,
  isLoading = false
}: KeyMetricProps) => {
  const handleClick = () => {
    if (isClickable && !isLoading && onClick) {
      onClick();
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center text-center p-4 rounded-lg bg-muted/50 transition-colors",
        isClickable && !isLoading && "cursor-pointer hover:bg-muted",
        isLoading && "cursor-wait"
      )}
      onClick={handleClick}
    >
      <Icon className="h-5 w-5 mb-2 text-muted-foreground flex-shrink-0" />
      <span className="text-sm text-muted-foreground flex-shrink-0">{label}</span>
      <div className="mt-1 flex items-center justify-center min-h-[24px]">
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <span className="font-medium overflow-hidden text-ellipsis">
            {value}
          </span>
        )}
      </div>
    </div>
  );
};
