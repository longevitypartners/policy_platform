
import { Policy } from "@/types/search";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { getCategoryIcon } from "../utils/icons";
import { formatDate } from "../utils/dates";

interface PolicyHeaderProps {
  policy: Policy;
}

export const PolicyHeader = ({ policy }: PolicyHeaderProps) => {
  const CategoryIcon = getCategoryIcon(policy.category);

  return (
    <DialogHeader className="space-y-4">
      {policy.category && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CategoryIcon className="h-4 w-4" />
          <span>{policy.category}</span>
        </div>
      )}
      <div>
        <DialogTitle className="font-semibold text-xl">{policy.title}</DialogTitle>
        {policy.last_amended && (
          <p className="text-sm text-muted-foreground mt-1">
            Last amended {formatDate(policy.last_amended)}
          </p>
        )}
      </div>
    </DialogHeader>
  );
};
