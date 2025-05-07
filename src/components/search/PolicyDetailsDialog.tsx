import { Policy } from "@/types/search";
import {
  Dialog,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Globe,
  Shield,
  ListChecks,
  Info,
  Link as LinkIcon,
  AlertCircle,
  FileText,
  ChevronLeft,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PolicyHeader } from "./components/PolicyHeader";
import { KeyMetric } from "./components/KeyMetric";
import { ProvisionCard } from "./components/ProvisionCard";
import { TabContentWrapper } from "./components/TabContentWrapper";
import { formatDate } from "./utils/dates";

interface PolicyDetailsDialogProps {
  policy: Policy | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  closeAllDialogs: () => void;
  dialogDepth: number;
}

const getRiskLabel = (rating: number | null): string => {
  if (rating === null) return 'Not rated';
  if (rating <= 1) return 'Low risk';
  if (rating <= 2) return 'Medium risk';
  return 'High risk';
};

const getRiskColorClass = (rating: number | null): string => {
  if (rating === null) return 'bg-gray-100 text-gray-800';
  if (rating <= 1) return 'bg-green-100 text-green-800';
  if (rating <= 2) return 'bg-yellow-100 text-yellow-800';
  return 'bg-red-100 text-red-800';
};

export const PolicyDetailsDialog = ({ policy, open, onOpenChange, closeAllDialogs, dialogDepth }: PolicyDetailsDialogProps) => {
  if (!policy) return null;

  const provisions = Array.isArray(policy.provisions) ? policy.provisions : [];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[72rem] h-[80vh] p-0">
        {dialogDepth > 1 && (
          <div className="absolute top-0 right-0 flex gap-2 transform -translate-y-12 z-50">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => onOpenChange(false)}
              title="Back to Previous Dialog"
            >
              <ChevronLeft className="h-4 w-4 mr-1" /> Back
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={closeAllDialogs}
              title="Close All Dialogs"
            >
              Close all ({dialogDepth})
            </Button>
          </div>
        )}
        <div className="flex flex-col h-full overflow-scroll">
          <div className="p-6 flex-shrink-0">
            <DialogHeader className="space-y-4">
              <PolicyHeader policy={policy} />
              <div className="grid grid-cols-4 gap-4">
                <div className={`flex flex-col items-center text-center p-4 rounded-lg ${getRiskColorClass(policy.risk_rating)}`}>
                  <Shield className="h-5 w-5 mb-2" />
                  <span className="text-sm">Risk Rating</span>
                  <span className="font-medium mt-1">
                    {policy.risk_rating || 'N/A'} - {getRiskLabel(policy.risk_rating)}
                  </span>
                </div>
                <KeyMetric
                  icon={Globe}
                  label="Country"
                  value={policy.country || 'Not specified'}
                />
                <KeyMetric
                  icon={FileText}
                  label="Type"
                  value={policy.policy_type || 'Not specified'}
                />
                <KeyMetric
                  icon={Calendar}
                  label="Entry into Force"
                  value={formatDate(policy.entry_into_force)}
                />
              </div>
            </DialogHeader>
          </div>

          <Separator />

          <div className="flex-1 inset-0 py-4 px-6">
            <Tabs defaultValue="description" className="h-full flex flex-col">
              <TabsList className="grid w-full grid-cols-4 bg-muted p-1">
                <TabsTrigger
                  value="description"
                  className="text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground rounded-md h-10"
                >
                  Description
                </TabsTrigger>
                <TabsTrigger
                  value="implications"
                  className="text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground rounded-md h-10"
                >
                  Implications
                </TabsTrigger>
                <TabsTrigger
                  value="resources"
                  className="text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground rounded-md h-10"
                >
                  Resources
                </TabsTrigger>
                <TabsTrigger
                  value="provisions"
                  className="text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground rounded-md h-10"
                >
                  <div className="flex items-center gap-2">
                    Requirements
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-primary">
                      <span className="text-xs font-medium text-white">
                        {provisions.length}
                      </span>
                    </span>
                  </div>
                </TabsTrigger>
              </TabsList>

              <div className="flex-1 mt-4">
                <TabsContent value="description" className="h-full">
                  <div className="space-y-4 py-4 px-6">
                    <h2 className="text-xl font-semibold">Description</h2>
                    <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                      {policy.description || 'No description available.'}
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="implications" className="h-full">
                  <div className="space-y-4 py-4 px-6">
                    <h2 className="text-xl font-semibold">Implications</h2>
                    <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                      {policy.implications || 'No implications specified.'}
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="resources" className="h-full">
                  <div className="space-y-4 py-4 px-6">
                    <h2 className="text-xl font-semibold">Resources</h2>
                    <div className="space-y-2">
                      {policy.url_regulation && (
                        <a
                          href={policy.url_regulation}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:underline block"
                        >
                          View Regulation Document →
                        </a>
                      )}
                      {policy.url_implications && (
                        <a
                          href={policy.url_implications}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:underline block"
                        >
                          View Implications Document →
                        </a>
                      )}
                      {!policy.url_regulation && !policy.url_implications && (
                        <p className="text-sm text-muted-foreground">No external resources available.</p>
                      )}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="provisions" className="h-full">
                  <div className="py-4 px-6">
                    <h2 className="text-xl font-semibold mb-4">Requirements</h2>
                    {provisions.length > 0 ? (
                      <div className="space-y-4">
                        {provisions.map((provision) => (
                          <ProvisionCard
                            key={provision.provision_id}
                            provision={provision}
                            closeAllDialogs={closeAllDialogs}
                            dialogDepth={dialogDepth}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="h-[calc(100%-2rem)] flex items-center justify-center">
                        <div className="bg-muted/50 rounded-lg p-8 text-center">
                          <ListChecks className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">
                            There are no requirements associated with this policy.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
