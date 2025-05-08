import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { PolicyDetailsDialog } from "@/components/search/PolicyDetailsDialog";
import { ProvisionDetailsDialog } from "@/components/search/ProvisionDetailsDialog";
import { UpdatesList } from "@/components/dashboard/UpdatesList";
import { CountriesMap } from "@/components/dashboard/CountriesMap";
import { useIsMobile } from "@/hooks/use-mobile";

type TimeFilter = '30days' | '6months' | 'year';
type ViewMode = 'policies' | 'provisions';

const Dashboard = () => {
  const [selectedPolicy, setSelectedPolicy] = useState<any>(null);
  const [selectedProvision, setSelectedProvision] = useState<any>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [timeFilter, setTimeFilter] = useState<TimeFilter>('6months');
  const [viewMode, setViewMode] = useState<ViewMode>('provisions');
  const isMobile = useIsMobile();

  const getTimeFilterDate = (filter: TimeFilter) => {
    const now = new Date();
    switch (filter) {
      case '30days':
        return new Date(now.setDate(now.getDate() - 30)).toISOString();
      case '6months':
        return new Date(now.setMonth(now.getMonth() - 6)).toISOString();
      case 'year':
        return new Date(now.setFullYear(now.getFullYear() - 1)).toISOString();
    }
  };

  const {
    data: countryStats,
    isLoading: countryStatsLoading
  } = useQuery({
    queryKey: ['countryStats'],
    queryFn: async () => {
      const { data } = await supabase
        .from('policies')
        .select('country')
        .not('country', 'is', null);
      
      const countryCounts = data?.reduce((acc, policy) => {
        if (policy.country) {
          acc[policy.country] = (acc[policy.country] || 0) + 1;
        }
        return acc;
      }, {} as Record<string, number>) || {};

      return Object.entries(countryCounts).map(([country, count]) => ({
        country,
        count
      }));
    }
  });

  const {
    data: updates,
    isLoading: updatesLoading
  } = useQuery({
    queryKey: ['updates', timeFilter, viewMode],
    queryFn: async () => {
      const filterDate = getTimeFilterDate(timeFilter);
      
      if (viewMode === 'policies') {
        const { data: policies } = await supabase
          .from('policies')
          .select('policy_id, title, created_at, country, updated_at')
          .gte('created_at', filterDate)
          .order('created_at', { ascending: false });

        return policies?.map(policy => ({
          id: policy.policy_id,
          title: policy.title,
          created_at: policy.created_at,
          type: 'policy' as const,
          country: policy.country,
          last_amended: policy.updated_at
        })) || [];
      } else {
        const { data: provisions } = await supabase
          .from('provisions')
          .select('provision_id, requirement, created_at, country, updated_at')
          .gte('created_at', filterDate)
          .order('created_at', { ascending: false });

        return provisions?.map(provision => ({
          id: provision.provision_id,
          title: provision.requirement,
          created_at: provision.created_at,
          type: 'provision' as const,
          country: provision.country,
          last_amended: provision.updated_at
        })) || [];
      }
    }
  });

  const handleUpdateClick = async (update: any) => {
    try {
      if (update.type === 'policy') {
        // Fetch policy with its provisions
        const { data: policy } = await supabase
          .from('policies')
          .select(`
            *,
            provisions:provisions(*)
          `)
          .eq('policy_id', update.id)
          .single();
        
        if (policy) {
          setSelectedPolicy(policy);
        }
      } else {
        // Fetch provision with its policy
        const { data: provision } = await supabase
          .from('provisions')
          .select(`
            *,
            policies:policy_id(*)
          `)
          .eq('provision_id', update.id)
          .single();
        
        if (provision) {
          setSelectedProvision(provision);
        }
      }
    } catch (error) {
      console.error('Error fetching details:', error);
    }
  };

  const closeAllDialogs = () => {
    setSelectedPolicy(null);
    setSelectedProvision(null);
  };

  return (
    <div className="flex-1 h-[calc(100vh-1rem)] overflow-hidden">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 max-w-[1400px] h-full py-4 md:py-6 flex flex-col">
        <div className="mb-4">
          <h1 className="text-3xl font-bold mb-1 text-center md:text-left">Dashboard</h1>
          <p className="text-muted-foreground mt-2 text-center md:text-left">Welcome to your Policy Tracker dashboard.</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 h-[calc(100vh-9rem)]">
          {!isMobile && (
            <CountriesMap
              data={countryStats || []}
              isLoading={countryStatsLoading}
            selectedCountry={selectedCountry}
            onCountrySelect={setSelectedCountry}
            />
          )}
          <UpdatesList 
            updates={updates} 
            isLoading={updatesLoading}
            onUpdateClick={handleUpdateClick}
            timeFilter={timeFilter}
            onTimeFilterChange={setTimeFilter}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            selectedCountry={selectedCountry}
          />
        </div>
      </div>

      <PolicyDetailsDialog 
        policy={selectedPolicy} 
        open={!!selectedPolicy} 
        onOpenChange={open => !open && setSelectedPolicy(null)} 
        closeAllDialogs={closeAllDialogs}
        dialogDepth={1}
      />
      
      <ProvisionDetailsDialog 
        provision={selectedProvision} 
        open={!!selectedProvision} 
        onOpenChange={open => !open && setSelectedProvision(null)} 
        closeAllDialogs={closeAllDialogs}
        dialogDepth={1}
      />
    </div>
  );
};

export default Dashboard;
