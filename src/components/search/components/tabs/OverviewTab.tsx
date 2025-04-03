interface Provision {
  requirement: string;
  subject_to_obligation?: string;
  asset_class?: string;
}

export const OverviewTab = ({ provision }: { provision: Provision | null }) => {
  if (!provision) return null;

  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-semibold mb-2">Requirement</h3>
        <p className="text-muted-foreground">{provision.requirement}</p>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Applies to</h3>
        <div className="space-y-2">
          <div className="flex gap-2 items-center">
            <span className="text-sm font-medium w-32">Building Status</span>
            <span className="text-sm text-muted-foreground">
              {" "}
              {provision.subject_to_obligation ?? "N/A"}
            </span>
          </div>

          <div className="flex gap-2 items-center">
            <span className="text-sm font-medium w-32">
              Subject to Obligation
            </span>
            <span className="text-sm text-muted-foreground">
              {provision.subject_to_obligation ?? "N/A"}
            </span>
          </div>

          <div className="flex gap-2 items-center">
            <span className="text-sm font-medium w-32">Asset Class</span>
            <span className="text-sm text-muted-foreground">
              {provision.asset_class ?? "N/A"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
