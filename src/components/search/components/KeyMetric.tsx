
import { LucideIcon } from "lucide-react";

interface KeyMetricProps {
  icon: LucideIcon;
  label: string;
  value: string | React.ReactNode;
}

export const KeyMetric = ({ icon: Icon, label, value }: KeyMetricProps) => (
  <div className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/50">
    <Icon className="h-5 w-5 mb-2 text-muted-foreground" />
    <span className="text-sm text-muted-foreground">{label}</span>
    <span className="font-medium mt-1 max-w-full overflow-hidden text-ellipsis  " style={{ maxWidth: '200px' }}>
      {value}
    </span>
  </div>
);
