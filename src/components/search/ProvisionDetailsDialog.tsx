import { useState } from "react";
import { Provision, Policy } from "@/types/search";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Calendar,
  FileText,
  Globe,
  BookOpen,
  Loader2,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { KeyMetric } from "./components/KeyMetric";
import { OverviewTab } from "./components/tabs/OverviewTab";
import { DescriptionTab } from "./components/tabs/DescriptionTab";
import { RecommendationsTab } from "./components/tabs/RecommendationsTab";
import { ResourcesTab } from "./components/tabs/ResourcesTab";
import { PolicyDetailsDialog } from "./PolicyDetailsDialog";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface ProvisionDetailsDialogProps {
  provision: Provision | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ProvisionDetailsDialog = ({ provision, open, onOpenChange }: ProvisionDetailsDialogProps) => {
  const [selectedPolicy, setSelectedPolicy] = useState<Policy | null>(null);
  const [isPolicyDetailsOpen, setIsPolicyDetailsOpen] = useState(false);
  const [isLoadingPolicy, setIsLoadingPolicy] = useState(false);

  if (!provision) return null;

  const handlePolicyClick = async () => {
    if (!provision.policy_id) {
      toast.error("No associated policy found.");
      return;
    }

    setIsLoadingPolicy(true);
    try {
      const { data: policyData, error } = await supabase
        .from("policies")
        .select(`
          *,
          provisions (
            provision_id,
            requirement,
            description,
            minimum_requirement,
            best_practice,
            subject_to_obligation,
            asset_class,
            building_status,
            country,
            year_of_enforcement,
            year_in_force,
            policy,
            policy_id,
            topic,
            url_minimum_standards,
            url_best_practice
          )
        `)
        .eq('policy_id', provision.policy_id)
        .single();

      if (error) {
        throw error;
      }

      if (policyData) {
        const transformedPolicy = {
          ...policyData,
          provisions_count: policyData.provisions?.length || 0
        } as Policy;
        setSelectedPolicy(transformedPolicy);
        setIsPolicyDetailsOpen(true);
      } else {
        toast.error("Policy details not found.");
      }
    } catch (error: any) {
      console.error("Error fetching policy details:", error);
      toast.error(`Failed to fetch policy details: ${error.message}`);
    } finally {
      setIsLoadingPolicy(false);
    }
  };

  const handlePolicyDetailsOpenChange = (isOpen: boolean) => {
    setIsPolicyDetailsOpen(isOpen);
    if (!isOpen) {
      setSelectedPolicy(null);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-[72rem] h-[80vh] overflow-scroll p-0">
          <div className="flex flex-col">

            <div className="p-6 flex-shrink-0">
              <DialogHeader className="space-y-4">
                <div className="space-y-2">
                  {provision.topic && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <FileText className="h-4 w-4" />
                      <span>{provision.topic}</span>
                    </div>
                  )}
                  <DialogTitle className="text-xl font-semibold">
                    {provision.requirement || "Untitled Requirement"}
                  </DialogTitle>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <KeyMetric
                    icon={Globe}
                    label="Country"
                    value={provision.country || "Not specified"}
                  />
                  <KeyMetric
                    icon={Calendar}
                    label="Introduced"
                    value={provision.year_in_force || "Not specified"}
                  />
                  <KeyMetric
                    icon={Calendar}
                    label="Enforced"
                    value={provision.year_of_enforcement || "Not specified"}
                  />
                </div>

                <div
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-lg bg-muted/50 mt-4 transition-colors",
                    !!provision.policy_id && !isLoadingPolicy && "cursor-pointer hover:bg-muted",
                  )}
                  onClick={handlePolicyClick}
                >
                  {isLoadingPolicy ? (
                    <div className="flex items-center justify-center w-full h-full">
                      <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                    </div>
                  ) : (
                    <>
                      <BookOpen className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      <div className="flex flex-col">
                        <span className="text-sm text-muted-foreground flex-shrink-0">Associated Policy</span>
                        <div className="mt-1 flex items-center min-h-[24px]">
                          <span className="font-medium overflow-hidden text-ellipsis">
                            {provision.policy || "Not specified"}
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </div>

              </DialogHeader>
            </div>

            <Separator />

            <div className="flex-1 inset-0 py-4 px-6">
              <Tabs defaultValue="overview" className="h-full flex flex-col">
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 bg-muted p-1 rounded-lg">
                  <TabsTrigger
                    value="overview"
                    className="text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground rounded-md h-10"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="description"
                    className="text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground rounded-md h-10"
                  >
                    Description
                  </TabsTrigger>
                  <TabsTrigger
                    value="recommendations"
                    className="text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground rounded-md h-10"
                  >
                    Recommendations
                  </TabsTrigger>
                  <TabsTrigger
                    value="resources"
                    className="text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground rounded-md h-10"
                  >
                    Resources
                  </TabsTrigger>
                </TabsList>

                <div className="flex-1">
                  <TabsContent value="overview" className="mt-6 mx-6 h-full">
                    <div className="h-full hover-scroll">
                      <h2 className="text-xl font-semibold mb-6">Overview</h2>
                      <OverviewTab provision={provision} />
                    </div>
                  </TabsContent>

                  <TabsContent value="description" className="mt-6 mx-6 h-full">
                    <div className="h-full hover-scroll">
                      <DescriptionTab provision={provision} />
                    </div>
                  </TabsContent>

                  <TabsContent value="recommendations" className="mt-6 mx-6 h-full">
                    <div className="h-full hover-scroll">
                      <RecommendationsTab provision={provision} />
                    </div>
                  </TabsContent>

                  <TabsContent value="resources" className="mt-6 mx-6 h-full">
                    <div className="h-full hover-scroll">
                      <ResourcesTab provision={provision} />
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <PolicyDetailsDialog
        policy={selectedPolicy}
        open={isPolicyDetailsOpen}
        onOpenChange={handlePolicyDetailsOpenChange}
      />
    </>
  );
};
