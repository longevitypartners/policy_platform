
import { Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { format } from "date-fns";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Policy {
  policy_id: number;  
  title: string;
  created_at: string;
}

interface RecentPoliciesListProps {
  policies: Policy[] | null;
  isLoading: boolean;
  onPolicyClick: (policy: Policy) => void;
  timeFilter: '6months' | 'year';
  onTimeFilterChange: (value: '6months' | 'year') => void;
}

export const RecentPoliciesList = ({ 
  policies, 
  isLoading,
  onPolicyClick,
  timeFilter,
  onTimeFilterChange,
}: RecentPoliciesListProps) => {
  return (
    <Card className="col-span-1 flex flex-col h-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>New Policies</CardTitle>
          <Select value={timeFilter} onValueChange={onTimeFilterChange}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="6months">Last 6 months</SelectItem>
              <SelectItem value="year">Last year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <ScrollArea className="h-[calc(100%-2rem)]">
          {isLoading ? (
            <div>Loading...</div>
          ) : !policies?.length ? (
            <Alert>
              <AlertDescription>
                There are no new policies.
              </AlertDescription>
            </Alert>
          ) : (
            <div className="space-y-4">
              {policies?.map((policy) => (
                <div 
                  key={policy.policy_id} 
                  className="flex items-center space-x-4 p-2 rounded-md hover:bg-muted cursor-pointer"
                  onClick={() => onPolicyClick(policy)}
                >
                  <Activity className="h-4 w-4" />
                  <div>
                    <p className="text-sm font-medium">{policy.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {format(new Date(policy.created_at), 'MMM d, yyyy')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
