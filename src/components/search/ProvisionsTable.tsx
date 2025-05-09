import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import { Provision, ProvisionFiltersState } from "@/types/search";
import { ProvisionDetailsDialog } from "./ProvisionDetailsDialog";
import { ArrowUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProvisionsTableProps {
  filters: ProvisionFiltersState;
  searchQuery: string;
}

type SortField = 'requirement' | 'country' | 'topic' | 'year_of_enforcement';
type SortDirection = 'asc' | 'desc';

export const ProvisionsTable = ({ filters, searchQuery }: ProvisionsTableProps) => {
  const [selectedProvision, setSelectedProvision] = useState<Provision | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [sortField, setSortField] = useState<SortField>('requirement');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const { data: provisions, isLoading, error } = useQuery({
    queryKey: ["provisions", filters, searchQuery],
    queryFn: async () => {
      let query = supabase
        .from("provisions")
        .select(`
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
        `)


      if (filters.countries.length > 0) {
        query = query.in('country', filters.countries);
      }
      if (filters.topics.length > 0) {
        query = query.in('topic', filters.topics);
      }
      if (filters.yearsEnforced.length > 0) {
        query = query.in('year_of_enforcement', filters.yearsEnforced);
      }
      if (filters.buildingStatuses.length > 0) {
        query = query.in('building_status', filters.buildingStatuses);
      }
      if (filters.assetClasses.length > 0) {
        query = query.in('asset_class', filters.assetClasses);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      // Apply search filter
      let filteredData = data;
      if (searchQuery) {
        const searchLower = searchQuery.toLowerCase();
        filteredData = data.filter((provision: Provision) =>
          provision.requirement?.toLowerCase().includes(searchLower) ||
          provision.description?.toLowerCase().includes(searchLower) ||
          provision.country?.toLowerCase().includes(searchLower) ||
          provision.topic?.toLowerCase().includes(searchLower)
        );
      }

      return filteredData as Provision[];
    },
  });

  const handleRowClick = (provision: Provision) => {
    setSelectedProvision(provision);
    setIsDetailsOpen(true);
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(current => current === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedProvisions = provisions ? [...provisions].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];

    if (aValue === null) return sortDirection === 'asc' ? 1 : -1;
    if (bValue === null) return sortDirection === 'asc' ? -1 : 1;

    const aString = String(aValue).toLowerCase();
    const bString = String(bValue).toLowerCase();
    return sortDirection === 'asc'
      ? aString.localeCompare(bString)
      : bString.localeCompare(aString);
  }) : [];

  const SortableHeader = ({ field, children }: { field: SortField, children: React.ReactNode }) => (
    <TableHead
      onClick={() => handleSort(field)}
      className={cn(
        "cursor-pointer select-none px-6",
        field === 'year_of_enforcement' ? "text-center" : ""
      )}
    >
      <div className="flex items-center gap-2">
        <span>{children}</span>
        <ArrowUpDown className="h-4 w-4 shrink-0" />
      </div>
    </TableHead>
  );

  if (isLoading) {
    return (
      <div>
        <Table>
          <TableHeader className="sticky top-0 bg-white z-10">
            <TableRow>
              <SortableHeader field="requirement">Requirement</SortableHeader>
              <SortableHeader field="country">Country</SortableHeader>
              <SortableHeader field="topic">Topic</SortableHeader>
              <SortableHeader field="year_of_enforcement">Year of Enforcement</SortableHeader>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell colSpan={4} className="text-center h-24 text-muted-foreground">
                Loading requirements...
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Table>
          <TableHeader className="sticky top-0 bg-white z-10">
            <TableRow>
              <SortableHeader field="requirement">Requirement</SortableHeader>
              <SortableHeader field="country">Country</SortableHeader>
              <SortableHeader field="topic">Topic</SortableHeader>
              <SortableHeader field="year_of_enforcement">Year of Enforcement</SortableHeader>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell colSpan={4} className="text-center h-24 text-muted-foreground text-red-600">
                Error loading requirements: {error.message}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }

  return (
    <>
      <div>

        <Table>
          <TableHeader className="sticky top-0 bg-white z-10">
            <TableRow>
              <SortableHeader field="requirement">Requirement</SortableHeader>
              <SortableHeader field="country">Country</SortableHeader>
              <SortableHeader field="topic">Topic</SortableHeader>
              <SortableHeader field="year_of_enforcement">Year of Enforcement</SortableHeader>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedProvisions && sortedProvisions.length > 0 ? (
              sortedProvisions.map((provision, index) => (
                <TableRow
                  key={provision.provision_id}
                  className={cn(
                    "cursor-pointer",
                    index % 2 === 0 ? "bg-white" : "bg-gray-50",
                    "hover:bg-[#22D081]/10 transition-colors"
                  )}
                  onClick={() => handleRowClick(provision)}
                >
                  <TableCell className="w-[40%] px-6">
                    <div className="whitespace-normal line-clamp-2" title={provision.requirement}>
                      {provision.requirement || "N/A"}
                    </div>
                  </TableCell>
                  <TableCell className="w-[20%] px-6">{provision.country || "N/A"}</TableCell>
                  <TableCell className="w-[25%] px-6">{provision.topic || "N/A"}</TableCell>
                  <TableCell className="w-[15%] px-6 text-center">{provision.year_of_enforcement || "N/A"}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center h-24 text-muted-foreground">
                  No requirements found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <ProvisionDetailsDialog
        provision={selectedProvision}
        open={isDetailsOpen}
        onOpenChange={setIsDetailsOpen}
        closeAllDialogs={() => setIsDetailsOpen(false)}
        dialogDepth={1}
      />
    </>
  );
};
