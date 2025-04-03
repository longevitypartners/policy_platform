
import { Provision } from "@/types/search";
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
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { KeyMetric } from "./components/KeyMetric";
import { TabContentWrapper } from "./components/TabContentWrapper";
import { OverviewTab } from "./components/tabs/OverviewTab";
import { DescriptionTab } from "./components/tabs/DescriptionTab";
import { RecommendationsTab } from "./components/tabs/RecommendationsTab";
import { ResourcesTab } from "./components/tabs/ResourcesTab";

interface ProvisionDetailsDialogProps {
  provision: Provision | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ProvisionDetailsDialog = ({ provision, open, onOpenChange }: ProvisionDetailsDialogProps) => {
  if (!provision) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[72rem] h-[80vh] flex flex-col overflow-hidden p-0">
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
                {provision.requirement || "Untitled Provision"}
              </DialogTitle>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              <KeyMetric 
                icon={BookOpen} 
                label="Associated Policy" 
                value={provision.policy || "Not specified"}
              />
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
          </DialogHeader>
        </div>

        <Separator />

        <div className="flex-1 overflow-hidden inset-0 overflow-y-auto py-4 px-6">
          <Tabs defaultValue="overview" className="h-full flex flex-col">
            <TabsList className="grid w-full grid-cols-4 bg-muted p-1">
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

            <div className="flex-1 overflow-hidden">
              <TabsContent value="overview" className="mt-6 mx-6 h-full">
                <div className="h-full overflow-y-auto">
                  <h2 className="text-xl font-semibold mb-6">Overview</h2>
                  <OverviewTab provision={provision} />
                </div>
              </TabsContent>

              <TabsContent value="description" className="mt-6 mx-6 h-full">
                <div className="h-full overflow-y-auto">
                  <DescriptionTab provision={provision} />
                </div>
              </TabsContent>

              <TabsContent value="recommendations" className="mt-6 mx-6 h-full">
                <div className="h-full overflow-y-auto">
                  <RecommendationsTab provision={provision} />
                </div>
              </TabsContent>

              <TabsContent value="resources" className="mt-6 mx-6 h-full">
                <div className="h-full overflow-y-auto">
                  <ResourcesTab provision={provision} />
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};
