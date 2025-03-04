
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Policy, PolicyFilterOptions, Provision, ProvisionFilterOptions } from "@/types/search";

export const useFilterOptions = () => {
  const { data: policyFilterOptions } = useQuery({
    queryKey: ["policyFilterOptions"],
    queryFn: async () => {
      const fetchDistinct = async (column: keyof Pick<Policy, 'country' | 'category' | 'entry_into_force' | 'risk_rating'>) => {
        const { data, error } = await supabase
          .from("policies")
          .select(column)
          .not(column, 'is', null)
          .limit(1000);
        
        if (error) throw error;
        
        const uniqueValues = [...new Set(data.map(item => String(item[column])))].sort();
        return uniqueValues;
      };

      const [countries, categories, years, riskRatings] = await Promise.all([
        fetchDistinct("country"),
        fetchDistinct("category"),
        fetchDistinct("entry_into_force"),
        fetchDistinct("risk_rating"),
      ]);

      return {
        countries: countries || [],
        categories: categories || [],
        years: years || [],
        riskRatings: riskRatings ? riskRatings.map(String) : [],
      } as PolicyFilterOptions;
    },
  });

  const { data: provisionFilterOptions } = useQuery({
    queryKey: ["provisionFilterOptions"],
    queryFn: async () => {
      const fetchDistinct = async (column: keyof Pick<Provision, 'country' | 'topic' | 'year_of_enforcement' | 'building_status' | 'asset_class'>) => {
        const { data, error } = await supabase
          .from("provisions")
          .select(column)
          .not(column, 'is', null)
          .limit(1000);
        
        if (error) throw error;
        
        const uniqueValues = [...new Set(data.map(item => String(item[column])))].sort();
        return uniqueValues;
      };

      const [countries, topics, years, buildingStatuses, assetClasses] = await Promise.all([
        fetchDistinct("country"),
        fetchDistinct("topic"),
        fetchDistinct("year_of_enforcement"),
        fetchDistinct("building_status"),
        fetchDistinct("asset_class"),
      ]);

      return {
        countries: countries || [],
        topics: topics || [],
        years: years || [],
        buildingStatuses: buildingStatuses || [],
        assetClasses: assetClasses || [],
      } as ProvisionFilterOptions;
    },
  });

  return { policyFilterOptions, provisionFilterOptions };
};
