
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Search from "./pages/Search";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import ErrorBoundary from "./utils/ErrorBoundary";

// Create a client
const queryClient = new QueryClient();

function App() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <SidebarProvider>
            <div className="min-h-screen flex w-full">
              {session && <AppSidebar />}
              <main className="flex-1">
                <ErrorBoundary>
                <Routes>
                  <Route 
                    path="/" 
                    element={session ? <Navigate to="/dashboard" /> : <Index />} 
                  />
                  <Route
                    path="/auth"
                    element={session ? <Navigate to="/dashboard" /> : <Auth />}
                  />
                  <Route 
                    path="/dashboard"
                    element={session ? <Dashboard /> : <Navigate to="/auth" />}
                  />
                  <Route 
                    path="/search"
                    element={session ? <Search /> : <Navigate to="/auth" />}
                  />
                  <Route 
                    path="/settings"
                    element={session ? <Settings /> : <Navigate to="/auth" />}
                  />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                </ErrorBoundary>
                <Toaster />
                <Sonner />
              </main>
            </div>
          </SidebarProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
