import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import debounce from "lodash.debounce";
import { useCallback, useEffect, useState } from "react";

interface SearchInputProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const SearchInput = ({ searchQuery, setSearchQuery }: SearchInputProps) => {
  const [inputValue, setInputValue] = useState(searchQuery);

  const debouncedSetSearchQuery = useCallback(
    debounce((value: string) => setSearchQuery(value), 300),
    []
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setInputValue(value);
    debouncedSetSearchQuery(value);
  }

  useEffect(() => {
    return () => {
      debouncedSetSearchQuery.cancel();
    };
  }, [debouncedSetSearchQuery]);

  return (
    <div className="relative w-full sm:max-w-md">
      <Input
        onChange={handleChange}
        placeholder="Search by keyword"
        value={inputValue}
        className="pr-10"
      />
      <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
    </div>
  );
};
