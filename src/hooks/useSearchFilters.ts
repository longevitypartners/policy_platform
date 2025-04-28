import { useState } from "react";
import { PolicyFiltersState, ProvisionFiltersState, ViewMode } from "@/types/search";

export const useSearchFilters = (viewMode: ViewMode) => {
  const [policyFilters, setPolicyFilters] = useState<PolicyFiltersState>({
    countries: [],
    riskRatings: [],
    categories: [],
    yearsEnforced: [],
    policyTypes: [],
  });

  const [provisionFilters, setProvisionFilters] = useState<ProvisionFiltersState>({
    countries: [],
    topics: [],
    yearsEnforced: [],
    buildingStatuses: [],
    assetClasses: [],
  });

  const filters = viewMode === 'policies' ? policyFilters : provisionFilters;
  const setFilters = viewMode === 'policies' ? setPolicyFilters : setProvisionFilters;

  const handleFilterChange = (filterType: keyof (PolicyFiltersState & ProvisionFiltersState), value: string) => {
    setFilters(prev => {
      const currentFilterValues = (prev as any)[filterType] as string[];
      const valueExists = currentFilterValues.includes(value);

      return {
        ...prev,
        [filterType]: valueExists
          ? currentFilterValues.filter((item: string) => item !== value)
          : [...currentFilterValues, value]
      };
    });
  };

  const handleSelectAll = (filterType: keyof (PolicyFiltersState & ProvisionFiltersState), options: string[]) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: options
    }));
  };

  const handleClearAll = (filterType: keyof (PolicyFiltersState & ProvisionFiltersState)) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: []
    }));
  };

  return {
    policyFilters,
    provisionFilters,
    filters,
    handleFilterChange,
    handleSelectAll,
    handleClearAll,
  };
};
