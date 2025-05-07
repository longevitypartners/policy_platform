import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutDashboard, Search, Settings, HelpCircle, Lightbulb } from "lucide-react";

export default function Help() {
    const routes = [
        {
            name: "Dashboard",
            icon: LayoutDashboard,
            explanationItems: [
                "The Dashboard provides an overview of the number of requirements and policies in the countries selected by your organisation."
            ],
            usageTips: [
                "Check the dashboard at least monthly for new updates",
                "Hover over the map to see the count of policies and requirements per country"
            ]
        },
        {
            name: "Policy Library",
            icon: Search,
            explanationItems: [
                <>
                    The Policy Library is comprised of 2 comprehensive databases covering ESG-related policies and regulations relevant to the real estate investment sector.
                </>,
                <>
                    <strong>Requirements</strong>
                </>,
                <>
                    Specific provisions within national policies that have a direct and significant impact on real estate investment activities. These are the legally or practically binding elements – such as minimum energy performance standards or electric vehicle charging infrastructure requirements – that investors must be aware of and adhere to.
                </>,
                <>
                    <strong>Policies</strong>
                </>,
                <>
                    All regulatory instruments, national strategies, legislative proposals, and incentive schemes that have been identified as relevant to the real estate sector. This includes both binding laws and non-binding frameworks that influence sustainability, ESG alignment, or investment decision-making.
                </>
            ],
            usageTips: [
                "Use the Requirements database for highly material and asset-specific regulations",
                "Click through the “Resources” tab to get direct access to the legislative text and possible financial incentives relevant to the requirement or policy"
            ]
        },
        {
            name: "Settings",
            icon: Settings,
            explanationItems: [
                "The Settings page allows you to customize your experience."
            ],
            usageTips: [
                "Contact us if you don't find a setting you're looking for"
            ]
        }
    ];

    return (
        <div className="container max-w-screen-xl mx-auto px-4 py-4">
            <div className="flex flex-col gap-8 mt-4">
                <Card>
                    <CardHeader>
                        <CardTitle>About</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>
                            Longevity Partners' Policy Tracker is a comprehensive, searchable library of ESG-related policies and regulations that impact real estate investment. It covers both asset-level and corporate-level sustainability requirements, helping users stay aligned with regulatory updates across jurisdictions.
                        </p>
                        <p>
                            In the Policy Library you can easily search and filter for relevant policies, understand their associated key requirements, assess risk levels and stay up-to-date on regulatory changes that may impact your operations.
                        </p>
                    </CardContent>
                </Card>
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Features Guide</h2>
                    <Tabs defaultValue="Dashboard" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 bg-background border rounded-md">
                            {routes.map((route) => (
                                <TabsTrigger
                                    key={route.name}
                                    value={route.name}
                                    className="flex items-center gap-2 data-[state=active]:bg-muted"
                                >
                                    <route.icon className="h-4 w-4" />
                                    <span>{route.name}</span>
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        <div className="mt-2">
                            {routes.map((route) => (
                                <TabsContent key={route.name} value={route.name}>
                                    <Card className="w-full">
                                        <CardContent className="flex flex-col gap-6 p-6">
                                            <div>
                                                {route.explanationItems.map((item, idx) => (
                                                    <p className="mb-4" key={idx}>{item}</p>
                                                ))}
                                            </div>
                                            {route.usageTips.length > 0 && (
                                                <div>
                                                    <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                                                        <Lightbulb className="w-5 h-5" />
                                                        Tips
                                                    </h3>
                                                    <ul className="list-disc list-inside space-y-2">
                                                        {route.usageTips.map((tip, index) => (
                                                            <li key={index}>{tip}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            ))}
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    );
} 