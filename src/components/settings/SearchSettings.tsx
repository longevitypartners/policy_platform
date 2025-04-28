import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const searchSettingsSchema = z.object({
  defaultView: z.enum(["policies", "provisions"]),
  resultsPerPage: z.enum(["10", "25", "50", "100"]),
});

type SearchSettingsValues = z.infer<typeof searchSettingsSchema>;

export function SearchSettings() {
  const { toast } = useToast();

  const form = useForm<SearchSettingsValues>({
    resolver: zodResolver(searchSettingsSchema),
    defaultValues: {
      defaultView: "policies",
      resultsPerPage: "25",
    },
  });

  function onSubmit(data: SearchSettingsValues) {
    // TODO: Implement once we add the user_search_preferences table
    toast({
      title: "Search preferences saved",
      description: "Your search preferences have been updated successfully.",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-6 p-6 bg-card rounded-lg border">
          <FormField
            control={form.control}
            name="defaultView"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Default View</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="policies" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Policies
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="provisions" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Requirements
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="resultsPerPage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Results per Page</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select number of results" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="25">25</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                    <SelectItem value="100">100</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Choose how many results to display per page in search results
                </FormDescription>
              </FormItem>
            )}
          />
        </div>

        <Button type="submit">Save Changes</Button>
      </form>
    </Form>
  );
}
