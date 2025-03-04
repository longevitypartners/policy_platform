
import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchInputProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const SearchInput = ({ searchQuery, setSearchQuery }: SearchInputProps) => {
  return (
    <div className="relative w-full sm:max-w-md">
      <Input
        placeholder="Search by keyword"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pr-10"
      />
      <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
    </div>
  );
};
