import { Search as SearchIcon, FileText, ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ViewMode } from "@/types/search";
import { useIsMobile } from "@/hooks/use-mobile";

interface SearchHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  activeFiltersCount: number;
  setActiveFilterTab: (tab: string) => void;
}

export const SearchHeader = ({
  searchQuery,
  setSearchQuery,
  viewMode,
  setViewMode,
  activeFiltersCount,
  setActiveFilterTab,
}: SearchHeaderProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="mb-8">
      <div className={`flex ${isMobile ? 'flex-col' : ''} items-center gap-4 mb-4`}>
        <h1 className="text-3xl font-bold text-center md:text-left py-3">Search</h1>
        <div className="flex gap-2">
          <Button
            variant={viewMode === 'provisions' ? 'default' : 'outline'}
            onClick={() => {
              setViewMode('provisions');
              setActiveFilterTab("countries");
            }}
            className="gap-2"
          >
            <ScrollText className="h-4 w-4" />
            Requirements
          </Button>
          <Button
            variant={viewMode === 'policies' ? 'default' : 'outline'}
            onClick={() => {
              setViewMode('policies');
              setActiveFilterTab("countries");
            }}
            className="gap-2"
          >
            <FileText className="h-4 w-4" />
            Policies
          </Button>
        </div>
      </div>
    </div>
  );
};
