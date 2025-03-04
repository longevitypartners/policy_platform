
export const formatDate = (dateString: string | null): string => {
  if (!dateString) return 'Not specified';
  // If the dateString is just "N/A", return it as is
  if (dateString === 'N/A') return 'N/A';
  // Return the date string as is without attempting to parse it
  return dateString;
};
