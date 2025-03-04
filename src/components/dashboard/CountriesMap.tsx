import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMemo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CountryData {
  country: string;
  count: number;
}

interface CountriesMapProps {
  data: CountryData[];
  isLoading: boolean;
}

const geoUrl = "https://raw.githubusercontent.com/leakyMirror/map-of-europe/master/GeoJSON/europe.geojson";

export const CountriesMap = ({ data, isLoading }: CountriesMapProps) => {
  const colorScale = useMemo(() => {
    const maxPolicies = Math.max(...data.map(d => d.count), 1);
    return scaleLinear<string>()
      .domain([0, maxPolicies])
      .range(["#f1f5f9", "#0f172a"]);
  }, [data]);

  // Get provisions count per country
  const { data: provisionsData } = useQuery({
    queryKey: ['provisionsPerCountry'],
    queryFn: async () => {
      const { data } = await supabase
        .from('provisions')
        .select('country');
      
      const countryCounts = data?.reduce((acc, provision) => {
        if (provision.country) {
          acc[provision.country] = (acc[provision.country] || 0) + 1;
        }
        return acc;
      }, {} as Record<string, number>) || {};

      return countryCounts;
    }
  });

  // Calculate summary statistics
  const totalPolicies = data.reduce((sum, d) => sum + d.count, 0);
  const totalProvisions = Object.values(provisionsData || {}).reduce((sum, count) => sum + count, 0);
  const totalCountries = data.length;

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="pb-2">
        <CardTitle className="mb-4">Policy Coverage</CardTitle>
        <div className="text-sm text-muted-foreground space-y-1">
          <p>Your plan covers {totalPolicies} policies and {totalProvisions} provisions across {totalCountries} countries.</p>
          <p>Please select each country below to see its policy coverage.</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          {isLoading ? (
            <div className="h-full w-full flex items-center justify-center">
              Loading...
            </div>
          ) : (
            <TooltipProvider>
              <ComposableMap
                projectionConfig={{
                  rotate: [-10, 0, 0],
                  scale: 800,
                  center: [15, 55]
                }}
                width={800}
                height={500}
                style={{
                  width: "100%",
                  height: "100%"
                }}
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const countryData = data.find(d => d.country === geo.properties.NAME);
                      const provisionsCount = provisionsData?.[geo.properties.NAME] || 0;
                      
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={countryData ? colorScale(countryData.count) : "#f1f5f9"}
                          stroke="#cbd5e1"
                          strokeWidth={0.5}
                          style={{
                            default: { outline: "none" },
                            hover: { outline: "none", fill: countryData ? colorScale(countryData.count) : "#e2e8f0" },
                            pressed: { outline: "none" }
                          }}
                          onMouseEnter={(event) => {
                            const tooltip = document.createElement('div');
                            tooltip.className = 'bg-white p-2 rounded shadow-lg border text-sm';
                            tooltip.innerHTML = `
                              <p class="font-semibold">${geo.properties.NAME}</p>
                              <p>Policies: ${countryData?.count || 0}</p>
                              <p>Provisions: ${provisionsCount}</p>
                            `;
                            tooltip.style.position = 'fixed';
                            tooltip.style.left = `${event.clientX + 10}px`;
                            tooltip.style.top = `${event.clientY + 10}px`;
                            tooltip.style.zIndex = '1000';
                            document.body.appendChild(tooltip);
                          }}
                          onMouseLeave={() => {
                            const tooltips = document.querySelectorAll('.bg-white.p-2.rounded.shadow-lg.border.text-sm');
                            tooltips.forEach(tooltip => tooltip.remove());
                          }}
                        />
                      );
                    })
                  }
                </Geographies>
              </ComposableMap>
            </TooltipProvider>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
