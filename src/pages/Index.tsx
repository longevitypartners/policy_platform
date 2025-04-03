
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-xl font-semibold">Policy Platform</span>
          <Button variant="outline" className="hover-scale" onClick={() => navigate("/auth")}>
            Sign In
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 flex-1 flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Track and Manage Real Estate Policies
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Stay informed with our comprehensive policy management platform
          </p>
          <Button 
            size="lg"
            className="hover-scale"
            onClick={() => navigate("/auth")}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
