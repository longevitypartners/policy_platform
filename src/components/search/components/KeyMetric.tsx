import { useState } from "react";
import { LucideIcon } from "lucide-react";

interface KeyMetricProps {
  icon: LucideIcon;
  label: string;
  value: string | React.ReactNode;
}

export const KeyMetric = ({ icon: Icon, label, value }: KeyMetricProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/50">
      <Icon className="h-5 w-5 mb-2 text-muted-foreground" />
      <span className="text-sm text-muted-foreground">{label}</span>
      <span
        onClick={() => setExpanded(!expanded)}
        className={`font-medium mt-1 cursor-pointer ${
          expanded ? "" : "overflow-hidden truncate"
        }`}
        style={{ maxWidth: expanded ? "none" : "100px" }}
      >
        {value}
      </span>
    </div>
  );
};
