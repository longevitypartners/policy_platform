import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import LoginSideBar from "./LoginSideBar";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"; // assuming you placed the dialog code here

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  const [signupEmail, setSignupEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [regions, setRegions] = useState<string[]>([]);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      navigate("/");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email);
      if (error) throw error;
      setResetSent(true);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRegionToggle = (region: string) => {
    setRegions((prev) =>
      prev.includes(region)
        ? prev.filter((r) => r !== region)
        : [...prev, region]
    );
  };

  const availableRegions = [
    "UK",
    "France",
    "Germany",
    "USA",
    "Spain",
    "Italy",
    "Asia",
    
  ];

  return (
    <div className="flex flex-wrap md:flex-nowrap flex-row justify-between h-full">
      <LoginSideBar />
      <div className="w-full flex flex-col items-center md:justify-center bg-gradient-to-b from-white to-gray-50 p-4">
        <div className="md:w-1/2 text-center  md:text-start flex flex-col justify-start ">
          <h2 className="md:text-6xl text-4xl font-light mb-8">
            <span className="font-semibold">Policy</span> Tracker
          </h2>
          <p className="text-4xl font-semibold pb-2">
            {isForgotPassword ? "Reset Password" : "Log In"}
          </p>
        </div>

        <div className="md:w-1/2 bg-[#E9E9E9] px-8 py-6 rounded-b-lg shadow-md border-t-2 border-black ">
          {resetSent ? (
            <div className="flex flex-col items-center">
              <p className="text-green-700 text-center py-6">
                If your email exists in our system, a reset link has been sent.
              </p>
              <Button
                type="submit"
                className="w-[148px]"
                onClick={() => {
                  setIsForgotPassword(!isForgotPassword);
                  setResetSent(false);
                }}
              >
                Back to Sign In
              </Button>
            </div>
          ) : (
            <form
              onSubmit={isForgotPassword ? handlePasswordReset : handleSignIn}
              className="space-y-6"
            >
              <div>
                <label htmlFor="email" className="font-light">Email</label>
                <Input
                  className=" border-black focus:border-teal-700 mt-2 shadow-inner shadow-gray-400"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {!isForgotPassword && (
                <div>
                  <label htmlFor="password" className="font-light">Password</label>
                  <Input
                    className="border-black focus:border-teal-700 mt-2 shadow-inner shadow-gray-400"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              )}

              <div className="flex flex-wrap md:justify-between justify-center pb-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsForgotPassword(!isForgotPassword);
                    setResetSent(false);
                  }}
                  className="text-sm text-primary hover:underline pr-4 md:pb-0 pb-4 "
                >
                  {isForgotPassword
                    ? "Back to Sign In"
                    : "Forgotten your password?"}
                </button>
                <Button type="submit" className="w-[148px]" disabled={loading}>
                  {loading
                    ? "Loading..."
                    : isForgotPassword
                    ? "Reset Password"
                    : "Log In"}
                </Button>
              </div>
            </form>
          )}
        </div>

        <Dialog open={showSignupModal} onOpenChange={setShowSignupModal} >
          <DialogTrigger asChild>
            <button className="flex justify-end md:w-1/2 font-semibold pr-8 mt-2 text-sm text-primary hover:underline">
              New to Longevity Partners? Sign up here.
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className="flex flex-row justify-between pr-12">
              <DialogTitle>
                Request Access to Longevity Partners Policy Tracker
              </DialogTitle>
              {/* <Button
              className="h-6 "
              variant="outline"
                type="button"
                onClick={() => {
                  console.log({
                    email: signupEmail,
                    organization,
                    regions,
                  });
                  setShowSignupModal(false);
                  toast({
                    title: "Request Submitted",
                    description:
                      "We’ve received your request and will get back to you.",
                  });
                }}
              >
                Submit
              </Button> */}
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <Input
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Organization</label>
                <Input
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">
                  Relevant Countries/Regions
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {availableRegions.map((region) => (
                    <label key={region} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={regions.includes(region)}
                        onChange={() => handleRegionToggle(region)}
                      />
                      <span>{region}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <DialogFooter className="pt-4">
              <Button
                type="button"
                onClick={() => {
                  console.log({
                    email: signupEmail,
                    organization,
                    regions,
                  });
                  setShowSignupModal(false);
                  toast({
                    title: "Request Submitted",
                    description:
                      "We’ve received your request and will get back to you.",
                  });
                }}
              >
                Submit Request
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Auth;
