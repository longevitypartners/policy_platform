import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Label } from "@/components/ui/label";

export function ProfileSettings() {
  const { data: profile, isLoading } = useQuery({
    queryKey: ["user-profile"],
    queryFn: async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) throw new Error("No user found");

      const { data, error } = await supabase
        .from("user_country_access")
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <div className="space-y-6 p-6 bg-card rounded-lg border">
        <div className="space-y-2">
          <Label className="font-medium">Username</Label>
          <p className="text-sm text-muted-foreground">{profile?.username || "Not set"}</p>
        </div>

        <div className="space-y-2">
          <Label className="font-medium">Organization Name</Label>
          <p className="text-sm text-muted-foreground">{profile?.organization || "Not set"}</p>
        </div>
      </div>
    </div>
  );
}
