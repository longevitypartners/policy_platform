
import { useNavigate } from "react-router-dom";
import {
  Search,
  LayoutDashboard,
  Bell,
  Settings,
  LogOut,
  FileText,
  Menu,
  X
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

const mainMenuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard
  },
  {
    title: "Search",
    path: "/search",
    icon: Search
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings
  },
];

const bottomMenuItems = [];

export function AppSidebar() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(!isMobile);

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

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-3 rounded-lg bg-white shadow-md hover:bg-gray-50"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-gray-600" />
          ) : (
            <Menu className="w-6 h-6 text-gray-600" />
          )}
        </button>
      )}

      {/* Sidebar */}
      <div className={`${!isOpen && isMobile ? 'hidden' : 'block'}`}>
        <Sidebar className="bg-white border-r border-gray-100 w-[220px] shadow-sm min-h-screen">
          <SidebarContent>
            {/* Logo Section */}
            <div className="p-6 mb-4">
              <div className="flex justify-start px-4">
                <span className="text-xl font-bold text-black">Policy Platform</span>
              </div>
            </div>

            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {mainMenuItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        onClick={() => {
                          navigate(item.path);
                          if (isMobile) setIsOpen(false);
                        }}
                      >
                        <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors w-full">
                          {item.icon && <item.icon className="w-5 h-5 mr-3 text-gray-600" />}
                          <span className="text-sm text-gray-900">
                            {item.title}
                          </span>
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
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
                          if (isMobile) setIsOpen(false);
                        }}
                      >
                        <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors w-full">
                          {item.icon && <item.icon className="w-5 h-5 mr-3 text-gray-600" />}
                          <span className="text-sm text-gray-900">
                            {item.title}
                          </span>
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild onClick={handleSignOut}>
                      <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors w-full">
                        <LogOut className="w-5 h-5 mr-3 text-gray-600" />
                        <span className="text-sm text-gray-900">
                          Sign Out
                        </span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </div>
    </>
  );
}
