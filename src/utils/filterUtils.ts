import { PolicyFilterOptions, ProvisionFilterOptions, ViewMode } from "@/types/search";

export const getPolicyFilterTabs = () => [
  { value: "countries", label: "Countries" },
  { value: "riskRatings", label: "Risk Rating" },
  { value: "categories", label: "Categories" },
  { value: "yearsEnforced", label: "Entry into Force" },
  { value: "policyTypes", label: "Policy Type" },
];

export const getProvisionFilterTabs = () => [
  { value: "countries", label: "Countries" },
  { value: "topics", label: "Topics" },
  { value: "yearsEnforced", label: "Year of Enforcement" },
  { value: "buildingStatuses", label: "Building Status" },
  { value: "assetClasses", label: "Asset Class" },
];

export const getFilterOptions = (
  type: string,
  viewMode: ViewMode,
  filterOptions: PolicyFilterOptions | ProvisionFilterOptions
): string[] => {
  if (!filterOptions) return [];

  if (viewMode === 'policies') {
    const options = filterOptions as PolicyFilterOptions;
    switch (type) {
      case "countries":
        return options.countries || [];
      case "riskRatings":
        return options.riskRatings || [];
      case "categories":
        return options.categories || [];
      case "yearsEnforced":
        return options.years || [];
      case "policyTypes":
        return options.policyTypes || [];
      default:
        return [];
    }
  } else {
    const options = filterOptions as ProvisionFilterOptions;
    switch (type) {
      case "countries":
        return options.countries || [];
      case "topics":
        return options.topics || [];
      case "yearsEnforced":
        return options.years || [];
      case "buildingStatuses":
        return options.buildingStatuses || [];
      case "assetClasses":
        return options.assetClasses || [];
      default:
        return [];
    }
  }
};
