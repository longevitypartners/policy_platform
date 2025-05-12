import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ViewMode, Policy } from "@/types/search";
import { SearchHeader } from "@/components/search/SearchHeader";
import { FilterTabs } from "@/components/search/FilterTabs";
import { PoliciesTable } from "@/components/search/PoliciesTable";
import { ProvisionsTable } from "@/components/search/ProvisionsTable";
import { useFilterOptions } from "@/hooks/useFilterOptions";
import { useSearchFilters } from "@/hooks/useSearchFilters";
import { SearchInput } from "@/components/search/SearchInput";
import { getPolicyFilterTabs, getProvisionFilterTabs, getFilterOptions } from "@/utils/filterUtils";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>('provisions');
  const [activeFilterTab, setActiveFilterTab] = useState<string>("countries");

  const { policyFilterOptions, provisionFilterOptions } = useFilterOptions();
  const {
    policyFilters,
    provisionFilters,
    filters,
    handleFilterChange,
    handleSelectAll,
    handleClearAll
  } = useSearchFilters(viewMode);

  const { data: policies, isLoading: isPoliciesLoading } = useQuery({
    queryKey: ["policies", policyFilters, searchQuery],
    queryFn: async () => {
      let query = supabase
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

      if (policyFilters.countries.length > 0) {
        query = query.in('country', policyFilters.countries);
      }
      if (policyFilters.categories.length > 0) {
        query = query.in('category', policyFilters.categories);
      }
      if (policyFilters.yearsEnforced.length > 0) {
        query = query.in('entry_into_force', policyFilters.yearsEnforced);
      }
      if (policyFilters.riskRatings.length > 0) {
        query = query.in('risk_rating', policyFilters.riskRatings.map(Number));
      }
      if (policyFilters.policyTypes.length > 0) {
        query = query.in('policy_type', policyFilters.policyTypes);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      let transformedData = data.map((policy: any) => ({
        ...policy,
        provisions_count: policy.provisions?.length || 0
      })) as Policy[];

      if (searchQuery) {
        const searchLower = searchQuery.toLowerCase();
        transformedData = transformedData.filter(policy =>
          policy.title?.toLowerCase().includes(searchLower) ||
          policy.country?.toLowerCase().includes(searchLower) ||
          policy.description?.toLowerCase().includes(searchLower) ||
          policy.category?.toLowerCase().includes(searchLower)
        );
      }

      return transformedData;
    },
    enabled: viewMode === 'policies',
  });

  const filterOptions = viewMode === 'policies' ? policyFilterOptions : provisionFilterOptions;
  const filterTabs = viewMode === 'policies' ? getPolicyFilterTabs() : getProvisionFilterTabs();
  const activeFiltersCount = Object.values(filters).reduce(
    (count, filterArray) => count + filterArray.length,
    0
  );

  const isLoading = viewMode === 'policies' ? isPoliciesLoading : false;

  return (
    <div className="flex-1 py-1 md:py-6">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 max-w-[1400px]">
        <div className="mb-6 sm:mb-8">
          <SearchHeader
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            viewMode={viewMode}
            setViewMode={setViewMode}
            activeFiltersCount={activeFiltersCount}
            setActiveFilterTab={setActiveFilterTab}
          />
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <FilterTabs
              viewMode={viewMode}
              activeFiltersCount={activeFiltersCount}
              activeFilterTab={activeFilterTab}
              setActiveFilterTab={setActiveFilterTab}
              filterTabs={filterTabs}
              filters={filters}
              getFilterOptions={(type) => getFilterOptions(type, viewMode, filterOptions)}
              handleFilterChange={handleFilterChange}
              handleSelectAll={handleSelectAll}
              handleClearAll={handleClearAll}
            />
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-8">Loading...</div>
        ) : (
          <div className="rounded-md border overflow-hidden">
            <div className="relative">
              <div className="overflow-y-auto" style={{ height: 'calc(100vh - 240px)' }}>
                {viewMode === 'policies' ? (
                  <PoliciesTable policies={policies} />
                ) : (
                  <ProvisionsTable
                    filters={provisionFilters}
                    searchQuery={searchQuery}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
