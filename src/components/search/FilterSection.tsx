
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { PolicyFiltersState, ProvisionFiltersState } from "@/types/search";
import { getRiskLabel } from "@/utils/search";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

type FilterType = keyof (PolicyFiltersState & ProvisionFiltersState);

interface FilterSectionProps {
  filterType: FilterType;
  options: string[];
  selectedValues: string[];
  handleFilterChange: (filterType: FilterType, value: string, checked: boolean) => void;
  handleSelectAll: (filterType: FilterType, options: string[]) => void;
  handleClearAll: (filterType: FilterType) => void;
}

const getRiskDescription = (rating: string) => {
  switch (rating) {
    case "1":
      return "Unlikely to directly impact investments. Provides context on national sustainability efforts.";
    case "2":
      return "Potential future implications for real estate. No immediate direct impact.";
    case "3":
      return "Directly impacts real estate investments. Includes compliance risks and building standards.";
    default:
      return "";
  }
};

export const FilterSection = ({
  filterType,
  options,
  selectedValues,
  handleFilterChange,
  handleSelectAll,
  handleClearAll,
}: FilterSectionProps) => {
  if (filterType === "riskRatings") {
    return (
      <div className="space-y-6">
        <div className="flex justify-end gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 text-xs"
            onClick={() => handleSelectAll(filterType, options)}
          >
            Select All
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 text-xs"
            onClick={() => handleClearAll(filterType)}
          >
            Clear All
          </Button>
        </div>
        <div className="flex justify-center gap-8">
          {options.map((option) => (
            <div key={option} className="flex flex-col items-center space-y-2">
              <button
                onClick={() => handleFilterChange(filterType, option, !selectedValues.includes(option))}
                className={`
                  inline-flex items-center justify-center w-16 h-16 rounded-full text-lg font-medium
                  transition-colors
                  ${selectedValues.includes(option) 
                    ? `bg-${Number(option) === 1 ? 'green' : Number(option) === 2 ? 'yellow' : 'red'}-100 text-${Number(option) === 1 ? 'green' : Number(option) === 2 ? 'yellow' : 'red'}-800 ring-2 ring-primary ring-offset-2`
                    : `bg-${Number(option) === 1 ? 'green' : Number(option) === 2 ? 'yellow' : 'red'}-100 text-${Number(option) === 1 ? 'green' : Number(option) === 2 ? 'yellow' : 'red'}-800 opacity-50`
                  }
                `}
              >
                {option}
              </button>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-medium text-muted-foreground">
                  {getRiskLabel(option)}
                </span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-[250px]" side="bottom">
                      <p className="text-sm">{getRiskDescription(option)}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end gap-2">
        <Button
          variant="ghost"
          size="sm"
          className="h-8 text-xs"
          onClick={() => handleSelectAll(filterType, options)}
        >
          Select All
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 text-xs"
          onClick={() => handleClearAll(filterType)}
        >
          Clear All
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-3 max-h-[60vh] overflow-y-auto pr-2">
        {options.map((option) => (
          <div
            key={option}
            onClick={() => handleFilterChange(filterType, option, !selectedValues.includes(option))}
            className={`
              p-3 rounded-lg border cursor-pointer transition-all
              ${selectedValues.includes(option)
                ? 'bg-primary/10 border-primary shadow-sm'
                : 'bg-card hover:bg-secondary/50 border-border'
              }
            `}
          >
            <div className="flex items-center gap-2">
              <Checkbox
                id={`${filterType}-${option}`}
                checked={selectedValues.includes(option)}
                onCheckedChange={(checked) => 
                  handleFilterChange(filterType, option, checked === true)
                }
              />
              <label
                htmlFor={`${filterType}-${option}`}
                className="text-sm leading-none flex-1 cursor-pointer"
              >
                {option}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
