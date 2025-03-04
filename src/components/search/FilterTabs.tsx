
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FilterSection } from "@/components/search/FilterSection";
import { PolicyFiltersState, ProvisionFiltersState, ViewMode } from "@/types/search";

interface FilterTabProps {
  viewMode: ViewMode;
  activeFiltersCount: number;
  activeFilterTab: string;
  setActiveFilterTab: (tab: string) => void;
  filterTabs: Array<{ value: string; label: string }>;
  filters: PolicyFiltersState | ProvisionFiltersState;
  getFilterOptions: (type: keyof (PolicyFiltersState & ProvisionFiltersState)) => string[];
  handleFilterChange: (filterType: keyof (PolicyFiltersState & ProvisionFiltersState), value: string, checked: boolean) => void;
  handleSelectAll: (filterType: keyof (PolicyFiltersState & ProvisionFiltersState), options: string[]) => void;
  handleClearAll: (filterType: keyof (PolicyFiltersState & ProvisionFiltersState)) => void;
}

export const FilterTabs = ({
  viewMode,
  activeFiltersCount,
  activeFilterTab,
  setActiveFilterTab,
  filterTabs,
  filters,
  getFilterOptions,
  handleFilterChange,
  handleSelectAll,
  handleClearAll,
}: FilterTabProps) => {
  // Calculate the total active filters count correctly
  const totalActiveFilters = Object.values(filters).reduce(
    (count, filterArray) => count + filterArray.length,
    0
  );

  return (
    <div className="flex items-center gap-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="flex-shrink-0 relative">
            <Filter className="h-4 w-4 mr-2" />
            Filters
            {totalActiveFilters > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalActiveFilters}
              </span>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-md">
          <SheetHeader>
            <SheetTitle>{viewMode === 'policies' ? 'Policy Filters' : 'Provision Filters'}</SheetTitle>
          </SheetHeader>
          <div className="mt-6">
            <Tabs value={activeFilterTab} onValueChange={setActiveFilterTab}>
              <div className="border rounded-lg p-1 bg-muted/50">
                <TabsList className="w-full grid grid-cols-2 h-auto gap-1">
                  {filterTabs.map((tab) => (
                    <TabsTrigger 
                      key={tab.value} 
                      value={tab.value}
                      className="relative h-9 data-[state=active]:bg-white data-[state=active]:shadow-none rounded-md whitespace-nowrap px-3"
                    >
                      <span className="text-xs sm:text-sm truncate">
                        {tab.label}
                      </span>
                      {filters[tab.value as keyof typeof filters]?.length > 0 && (
                        <span className="absolute -top-1.5 -right-1.5 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {filters[tab.value as keyof typeof filters]?.length}
                        </span>
                      )}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              {filterTabs.map((tab) => (
                <TabsContent key={tab.value} value={tab.value} className="mt-4">
                  <FilterSection
                    filterType={tab.value as keyof typeof filters}
                    options={getFilterOptions(tab.value as keyof (PolicyFiltersState & ProvisionFiltersState))}
                    selectedValues={filters[tab.value as keyof typeof filters] || []}
                    handleFilterChange={handleFilterChange}
                    handleSelectAll={handleSelectAll}
                    handleClearAll={handleClearAll}
                  />
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </SheetContent>
      </Sheet>
      {totalActiveFilters > 0 && (
        <Button
          variant="ghost"
          size="sm"
          className="text-xs text-primary hover:text-primary hover:bg-transparent p-0 h-auto font-normal"
          onClick={() => {
            // Clear all filter types
            Object.keys(filters).forEach(filterType => {
              handleClearAll(filterType as keyof typeof filters);
            });
          }}
        >
          Clear all
        </Button>
      )}
    </div>
  );
};
