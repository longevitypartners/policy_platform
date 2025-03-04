
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { supabase } from "@/integrations/supabase/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const PolicyDigest = z.enum(["daily", "weekly", "monthly"]);
type PolicyDigestType = z.infer<typeof PolicyDigest>;

const notificationSettingsSchema = z.object({
  emailNotifications: z.boolean(),
  riskAlerts: z.boolean(),
  policyDigest: PolicyDigest,
});

type NotificationSettingsValues = z.infer<typeof notificationSettingsSchema>;

const defaultSettings: NotificationSettingsValues = {
  emailNotifications: true,
  riskAlerts: true,
  policyDigest: "weekly",
};

export function NotificationSettings() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: settings, isLoading } = useQuery({
    queryKey: ["notification-settings"],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("No user found");

      const { data, error } = await supabase
        .from("user_notification_settings")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();

      if (error) throw error;
      
      if (!data) return defaultSettings;

      // Ensure policy_digest is one of the allowed values
      const policyDigest = PolicyDigest.safeParse(data.policy_digest);
      
      return {
        emailNotifications: data.email_notifications,
        riskAlerts: data.risk_alerts,
        policyDigest: policyDigest.success ? policyDigest.data : defaultSettings.policyDigest,
      } satisfies NotificationSettingsValues;
    },
  });

  const form = useForm<NotificationSettingsValues>({
    resolver: zodResolver(notificationSettingsSchema),
    defaultValues: defaultSettings,
    values: settings,
  });

  const mutation = useMutation({
    mutationFn: async (values: NotificationSettingsValues) => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("No user found");

      const { error } = await supabase
        .from("user_notification_settings")
        .upsert({
          user_id: user.id,
          email_notifications: values.emailNotifications,
          risk_alerts: values.riskAlerts,
          policy_digest: values.policyDigest,
        });

      if (error) throw error;
    },
    onSuccess: () => {
      toast({
        title: "Settings updated",
        description: "Your notification preferences have been saved.",
      });
      queryClient.invalidateQueries({ queryKey: ["notification-settings"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to update settings. Please try again.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: NotificationSettingsValues) {
    mutation.mutate(data);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-6 p-6 bg-card rounded-lg border">
          <FormField
            control={form.control}
            name="emailNotifications"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Email Notifications</FormLabel>
                  <FormDescription>
                    Receive email notifications about policy updates
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="riskAlerts"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Risk Alerts</FormLabel>
                  <FormDescription>
                    Get notified about high-risk policy changes
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="policyDigest"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Policy Digest Frequency</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="daily" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Daily Digest
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="weekly" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Weekly Digest
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="monthly" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Monthly Digest
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? "Saving..." : "Save Changes"}
        </Button>
      </form>
    </Form>
  );
}
