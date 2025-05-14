import {
  Search,
  LayoutDashboard,
  Settings,
  LogOut,
  Menu,
  X,
  HelpCircle,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sidebar,
  SIDEBAR_WIDTH_MOBILE,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useToast } from "@/components/ui/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../images/LP_logo_black.svg";
import { cn } from "@/lib/utils";

const mainMenuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Policy Library",
    path: "/search",
    icon: Search,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
  {
    title: "Help",
    path: "/help",
    icon: HelpCircle,
  },
];

const bottomMenuItems = [];

export function AppSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const { toggleSidebar, openMobile, setOpenMobile } = useSidebar();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const currentPath = location.pathname.replace(/\/+$/, '');

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    } else {
      navigate("/auth");
    }
  };

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className={cn(
            "fixed top-2 z-[60] p-3 rounded-lg bg-white shadow-md hover:bg-gray-50 transition-all duration-300 ease-in-out",
            openMobile ? "ml-2" : ""
          )}
          style={{ left: openMobile ? SIDEBAR_WIDTH_MOBILE : "1rem" }}
        >
          {openMobile ? (
            <X className="w-6 h-6 text-gray-600" />
          ) : (
            <Menu className="w-6 h-6 text-gray-600" />
          )}
        </button>
      )}

      {/* Sidebar */}
        <Sidebar className="bg-white border-r border-gray-100 w-[220px] shadow-sm min-h-screen">
          <SidebarContent>
            {/* Logo Section */}
            <div className="p-6 mb-4 mx-auto">
              <img
                src={Logo}
                alt="Policy Tracker Logo"
                className="w-full pr-2 -ml-1"
              />
              <div className="flex justify-start px-2">
                <span className="text-xl font-bold text-black">
                  Policy Tracker
                </span>
              </div>
            </div>

            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {mainMenuItems.map((item) => {
                    const isRouteActive = currentPath === item.path;
                    return (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          onClick={() => {
                            navigate(item.path);
                            if (isMobile) setOpenMobile(false);
                          }}
                        >
                          <div
                            className={`flex items-center px-4 py-2 cursor-pointer transition-colors w-full 
                              ${isRouteActive
                                ? "bg-primary text-white hover:bg-primary"
                                : "hover:bg-foreground/15"
                              }`}
                          >
                            {item.icon && (
                              <item.icon
                                className={`w-5 h-5 mr-3 text-gray-600 
                                  ${isRouteActive
                                    ? "text-primary-foreground"
                                    : ""
                                  }`}
                              />
                            )}
                            <span className="text-sm">{item.title}</span>
                          </div>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup className="mt-auto pb-4">
              <SidebarGroupContent>
                <SidebarMenu>
                  {bottomMenuItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        onClick={() => {
                          navigate(item.path);
                          if (isMobile) setOpenMobile(false);
                        }}
                      >
                        <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors w-full">
                          {item.icon && (
                            <item.icon className="w-5 h-5 mr-3 text-gray-600" />
                          )}
                          <span className="text-sm text-gray-900">
                            {item.title}
                          </span>
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                  <SidebarMenuItem>
                    <Popover
                      open={isPopoverOpen}
                      onOpenChange={setIsPopoverOpen}
                    >
                      <PopoverTrigger asChild>
                        <div
                          onClick={() => setIsPopoverOpen((prev) => !prev)}
                          className="flex rounded-md items-center px-4 py-2 cursor-pointer hover:bg-foreground/15 transition-colors w-full"
                        >
                          <span className="text-sm text-gray-900">
                            Have a question?
                          </span>
                        </div>
                      </PopoverTrigger>
                      <PopoverContent
                        side="top"
                        align="center"
                        sideOffset={8}
                        className="text-sm w-full"
                      >
                        Reach out to us at <br />
                        <a
                          href="mailto:jg@longevity.co.uk"
                          className="text-blue-600 underline"
                        >
                          jg@longevity.co.uk
                        </a>
                      </PopoverContent>
                    </Popover>

                    <SidebarMenuButton asChild onClick={handleSignOut}>
                      <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-foreground/15 transition-colors w-full">
                        <LogOut className="w-5 h-5 mr-3 text-gray-600" />
                        <span className="text-sm text-gray-900">Sign Out</span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
      </Sidebar>
    </>
  );
}
