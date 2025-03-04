
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Provision } from "@/types/search";
import { Card, CardContent } from "@/components/ui/card";
import { format, isValid, parseISO } from "date-fns";
import { ProvisionDetailsDialog } from "@/components/search/ProvisionDetailsDialog";

interface ProvisionCardProps {
  provision: Provision;
}

const formatDate = (dateString: string | null): string => {
  if (!dateString) return 'Not specified';
  const date = parseISO(dateString);
  if (!isValid(date)) return 'Invalid date';
  return format(date, 'MMMM d, yyyy');
};

export const ProvisionCard = ({ provision }: ProvisionCardProps) => {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const handleClick = () => {
    setIsDialogOpen(true);
  };

  return (
    <>
      <Card 
        className="cursor-pointer hover:bg-muted/50 transition-colors h-full"
        onClick={handleClick}
      >
        <CardContent className="p-4 space-y-2">
          <h4 className="font-medium">{provision.requirement || 'No requirement specified'}</h4>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span>Year of Enforcement: {formatDate(provision.year_of_enforcement)}</span>
            <span>Asset Class: {provision.asset_class || 'Not specified'}</span>
            <span>Building Status: {provision.building_status || 'Not specified'}</span>
          </div>
        </CardContent>
      </Card>

      <ProvisionDetailsDialog
        provision={provision}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </>
  );
};

