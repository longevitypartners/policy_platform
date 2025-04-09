
import { Provision } from "@/types/search";

interface DescriptionTabProps {
  provision: Provision;
}

export const DescriptionTab = ({ provision }: DescriptionTabProps) => (
  <>
    <h2 className="text-xl font-semibold mb-6">Description</h2>
    <p className="text-sm text-muted-foreground whitespace-pre-wrap">
      {provision.description || "No description available"}
    </p>
  </>
);
