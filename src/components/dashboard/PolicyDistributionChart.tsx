
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart as RechartsBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

interface PolicyDistributionChartProps {
  data: { country: string; count: number }[];
  isLoading: boolean;
}

export const PolicyDistributionChart = ({ data, isLoading }: PolicyDistributionChartProps) => {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Policies by Country</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">Loading...</div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <RechartsBarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="country" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#8884d8" />
            </RechartsBarChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
};
