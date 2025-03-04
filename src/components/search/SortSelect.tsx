
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SortConfig } from "@/types/search";

interface SortSelectProps {
  sort: SortConfig;
  setSort: (sort: SortConfig) => void;
}

export const SortSelect = ({ sort, setSort }: SortSelectProps) => {
  return (
    <Select
      value={`${sort.field}-${sort.direction}`}
      onValueChange={(value) => {
        const [field, direction] = value.split('-') as [SortConfig['field'], SortConfig['direction']];
        setSort({ field, direction });
      }}
    >
      <SelectTrigger className="flex-1 max-w-[200px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="risk_rating-desc">Risk Rating (High to Low)</SelectItem>
        <SelectItem value="risk_rating-asc">Risk Rating (Low to High)</SelectItem>
        <SelectItem value="last_amended-desc">Last Amended (Newest)</SelectItem>
        <SelectItem value="last_amended-asc">Last Amended (Oldest)</SelectItem>
        <SelectItem value="entry_into_force-desc">Year Enforced (Newest)</SelectItem>
        <SelectItem value="entry_into_force-asc">Year Enforced (Oldest)</SelectItem>
      </SelectContent>
    </Select>
  );
};
