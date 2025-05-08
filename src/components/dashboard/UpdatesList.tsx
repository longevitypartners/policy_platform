import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { formatDistanceToNow } from "date-fns";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { useMemo } from "react";

interface Update {
  id: number;
  title: string;
  created_at: string;
  type: 'policy' | 'provision';
  country?: string | null;
  last_amended?: string | null;
}

interface UpdatesListProps {
  updates: Update[] | undefined;
  isLoading: boolean;
  onUpdateClick: (update: Update) => void;
  timeFilter: '30days' | '6months' | 'year';
  onTimeFilterChange: (value: '30days' | '6months' | 'year') => void;
  viewMode: 'policies' | 'provisions';
  onViewModeChange: (mode: 'policies' | 'provisions') => void;
  selectedCountry: string | null;
}

export const UpdatesList = ({ 
  updates, 
  isLoading, 
  onUpdateClick,
  timeFilter,
  onTimeFilterChange,
  viewMode,
  onViewModeChange,
  selectedCountry
}: UpdatesListProps) => {

  const filteredUpdates = useMemo(() => {
    if (!updates) return [];
    if (selectedCountry) {
      return updates.filter(update => update.country === selectedCountry);
    }
    return updates;
  }, [updates, selectedCountry]);

  return (
    <Card className="flex flex-col h-full overflow-hidden">
      <CardHeader className="flex-shrink-0 sticky top-0 bg-background z-10 border-b p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <CardTitle className="hidden sm:block">Updates</CardTitle>
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'provisions' ? 'default' : 'outline'}
                size="sm"
                onClick={() => onViewModeChange('provisions')}
              >
                Requirements
              </Button>
              <Button
                variant={viewMode === 'policies' ? 'default' : 'outline'}
                size="sm"
                onClick={() => onViewModeChange('policies')}
              >
                Policies
              </Button>
            </div>
          </div>
          <Select value={timeFilter} onValueChange={onTimeFilterChange}>
            <SelectTrigger className="w-[140px] focus:ring-0">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="30days">Last 30 Days</SelectItem>
              <SelectItem value="6months">Last 6 Months</SelectItem>
              <SelectItem value="year">Last Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden p-0">
        <div className="h-full overflow-y-auto">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              Loading updates...
            </div>
          ) : !filteredUpdates?.length ? (
            <div className="flex items-center justify-center h-full text-muted-foreground">
                {selectedCountry ? `No updates found for ${selectedCountry}` : "No updates found"}
            </div>
          ) : (
            <div className="space-y-4 p-6">
                  {filteredUpdates.map((update) => (
                <TooltipProvider key={`${update.type}-${update.id}`}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        className="flex flex-col space-y-1.5 p-4 cursor-pointer rounded-lg hover:bg-background transition-colors"
                        onClick={() => onUpdateClick(update)}
                      >
                        <div className="space-y-2">
                          <h4 className="font-medium leading-tight line-clamp-2">
                            {update.title}
                          </h4>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            {update.country && (
                              <>
                                <span className="font-medium">{update.country}</span>
                                <span className="text-muted-foreground/50">•</span>
                              </>
                            )}
                            <span>
                              {update.last_amended 
                                ? `Updated ${formatDistanceToNow(new Date(update.last_amended), { addSuffix: true })}`
                                : formatDistanceToNow(new Date(update.created_at), { addSuffix: true })}
                            </span>
                          </div>
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="left" align="start">
                      <p className="max-w-xs">{update.title}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
