import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Policy } from "@/types/search";
import { getRiskRatingColor } from "@/utils/search";
import { PolicyDetailsDialog } from "./PolicyDetailsDialog";
import { ArrowUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface PoliciesTableProps {
  policies: Policy[] | undefined;
}

type SortField = 'title' | 'country' | 'category' | 'risk_rating' | 'entry_into_force' | 'last_amended';
type SortDirection = 'asc' | 'desc';

export const PoliciesTable = ({ policies }: PoliciesTableProps) => {
  const [selectedPolicy, setSelectedPolicy] = useState<Policy | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [sortField, setSortField] = useState<SortField>('title');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const handleRowClick = (policy: Policy) => {
    setSelectedPolicy(policy);
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

  const sortedPolicies = policies ? [...policies].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];

    if (aValue === null) return sortDirection === 'asc' ? 1 : -1;
    if (bValue === null) return sortDirection === 'asc' ? -1 : 1;

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
    }

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
        "cursor-pointer select-none px-2 sm:px-4 lg:px-6 text-sm",
        field === 'risk_rating' || field === 'entry_into_force' || field === 'last_amended' ? "text-center" : "",
        "table-cell"
      )}
    >
      <div className="flex items-center gap-2">
        <span>{children}</span>
        <ArrowUpDown className="h-4 w-4 shrink-0" />
      </div>
    </TableHead>
  );

  if (!policies?.length) {
    return (
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="sticky top-0 bg-white z-10">
            <TableRow>
              <SortableHeader field="title">Policy</SortableHeader>
              <SortableHeader field="country">Country</SortableHeader>
              <SortableHeader field="category">Category</SortableHeader>
              <SortableHeader field="risk_rating">Risk Rating</SortableHeader>
              <SortableHeader field="entry_into_force">Entry into Force</SortableHeader>
              <SortableHeader field="last_amended">Last Amended</SortableHeader>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell colSpan={6} className="text-center h-24 text-muted-foreground">
                No policies found
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }

  return (
    <>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="sticky top-0 bg-white z-10">
            <TableRow>
              <SortableHeader field="title">Policy</SortableHeader>
              <SortableHeader field="country">Country</SortableHeader>
              <SortableHeader field="category">Category</SortableHeader>
              <SortableHeader field="risk_rating">Risk Rating</SortableHeader>
              <SortableHeader field="entry_into_force">Entry into Force</SortableHeader>
              <SortableHeader field="last_amended">Last Amended</SortableHeader>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedPolicies.map((policy, index) => (
              <TableRow 
                key={policy.policy_id}
                className={cn(
                  "cursor-pointer",
                  index % 2 === 0 ? "bg-white" : "bg-gray-50",
                  "hover:bg-[#22D081]/10 transition-colors"
                )}
                onClick={() => handleRowClick(policy)}
              >
                <TableCell className="w-full sm:w-[25%] px-2 sm:px-4 lg:px-6 font-medium">
                  <div className="whitespace-normal line-clamp-2" title={policy.title}>
                    {policy.title}
                  </div>
                </TableCell>
                <TableCell className="table-cell w-[15%] px-2 sm:px-4 lg:px-6">
                  {policy.country}
                </TableCell>
                <TableCell className="table-cell w-[20%] px-2 sm:px-4 lg:px-6">
                  <div 
                    className="whitespace-normal line-clamp-2 break-words" 
                    title={policy.category}
                    style={{ maxWidth: "200px" }}
                  >
                    {policy.category || '-'}
                  </div>
                </TableCell>
                <TableCell className="table-cell w-[15%] px-2 sm:px-4 lg:px-6 text-center">
                  <span className={`inline-flex items-center justify-center px-2.5 py-1 rounded-full text-sm font-medium ${getRiskRatingColor(policy.risk_rating || 0)}`}>
                    {policy.risk_rating || '-'}
                  </span>
                </TableCell>
                <TableCell className="table-cell w-[12.5%] px-2 sm:px-4 lg:px-6 text-center">
                  {policy.entry_into_force || '-'}
                </TableCell>
                <TableCell className="table-cell w-[12.5%] px-2 sm:px-4 lg:px-6 text-center">
                  {policy.last_amended || '-'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <PolicyDetailsDialog 
        policy={selectedPolicy}
        open={isDetailsOpen}
        onOpenChange={setIsDetailsOpen}
      />
    </>
  );
};
