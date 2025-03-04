
export const OverviewTab = ({ provision }: { provision: any }) => {
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
          {provision.building_status && (
            <div className="flex gap-2 items-center">
              <span className="text-sm font-medium w-32">Building Status</span>
              <span className="text-sm text-muted-foreground">{provision.building_status}</span>
            </div>
          )}
          {provision.subject_to_obligation && (
            <div className="flex gap-2 items-center">
              <span className="text-sm font-medium w-32">Subject to Obligation</span>
              <span className="text-sm text-muted-foreground">{provision.subject_to_obligation}</span>
            </div>
          )}
          {provision.asset_class && (
            <div className="flex gap-2 items-center">
              <span className="text-sm font-medium w-32">Asset Class</span>
              <span className="text-sm text-muted-foreground">{provision.asset_class}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
