
import { Provision } from "@/types/search";

interface ResourcesTabProps {
  provision: Provision;
}

export const ResourcesTab = ({ provision }: ResourcesTabProps) => (
  <>
    <h2 className="text-xl font-semibold mb-6">Resources</h2>
    <div className="h-full">
      {provision.url_minimum_standards && (
        <a
          href={provision.url_minimum_standards}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:underline block"
        >
          View Minimum Standards Documentation →
        </a>
      )}
      {provision.url_best_practice && (
        <a
          href={provision.url_best_practice}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:underline block"
        >
          View Best Practice Documentation →
        </a>
      )}
      {!provision.url_minimum_standards && !provision.url_best_practice && (
        <p className="text-sm text-muted-foreground">
          No external resources available
        </p>
      )}
    </div>
  </>
);
