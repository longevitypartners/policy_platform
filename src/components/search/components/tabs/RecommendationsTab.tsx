
import { Provision } from "@/types/search";

interface RecommendationsTabProps {
  provision: Provision;
}

export const RecommendationsTab = ({ provision }: RecommendationsTabProps) => (
  <>
    <h2 className="text-xl font-semibold mb-6">Recommendations</h2>
    <div>
      <h4 className="font-medium">
        Minimum Requirements
      </h4>
      <p className="text-sm text-muted-foreground mt-2">
        {provision.minimum_requirement || "No minimum requirements specified"}
      </p>
    </div>
    <div>
      <h4 className="font-medium">
        Best Practices
      </h4>
      <p className="text-sm text-muted-foreground mt-2">
        {provision.best_practice || "No best practices available"}
      </p>
    </div>
  </>
);
