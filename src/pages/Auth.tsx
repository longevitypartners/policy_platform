// TODO: component needs to be refactored
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import Resend from "resend";
import LoginSideBar from "./LoginSideBar";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import SubscriptionAgreement from "./SubscriptionAgreement";
import ReCAPTCHA from "react-google-recaptcha";

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
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showTCModal, setShowTCModal] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const SITE_KEY = import.meta.env.VITE_GOOGLE_CAPTCHA_SITE_KEY 
 
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
    "Portugal",
    "Austria",
    "Sweden",
    "Luxembourg",
    "Belgium (Flanders)",
    "Belgium (Brussels)",
    "Finland",
    "Netherlands",
    "France",
    "Italy",
    "United Kingdom",
    "Denmark",
    "Romania",
    "Hungary",
    "Slovakia",
    "Spain",
    "Ireland",
    "Belgium (Wallonia)",
    "Germany",
    "Poland",
    "Czech Republic",
    "Norway",
  ];

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const isLocalhost = window.location.hostname === "localhost";

  const handleSignUpSubmit = async () => {
    if (
      !signupEmail ||
      !validateEmail(signupEmail) ||
      !organization ||
      regions.length === 0 ||
      !acceptedTerms ||
      (!isLocalhost && !captchaToken)
    ) {
      toast({
        title: "Error",
        description: "Please fill in all fields and accept the terms.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { data, error } = await supabase.from("signup_requests").insert([
        {
          email: signupEmail,
          organization,
          regions,
          accepted_terms: acceptedTerms,
          captcha_token: captchaToken,
        },
      ]);

      if (error) {
        throw error;
      }
            const resend = new Resend("re_W7xvGNAb_DCfoLmwtQQjUy99abMqY97oG");
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "du@longevity.co.uk",
        subject: "New Signup Request",
        html: `<p>A new signup request has been added:</p>
             <p>Email: ${signupEmail}</p>
             <p>Organization: ${organization}</p>
             <p>Regions: ${regions.join(", ")}</p>`,
      });
      // const bearer =
      //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNnYml4YXptb3BycXJmdnVncXFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3NTY0NDEsImV4cCI6MjA1NDMzMjQ0MX0.0zaITk13su7SB3eto6l-Flt2LAykIsDajWueKhr1VNM";
      // const { error: functionError } = await fetch(
      //   "https://sgbixazmoprqrfvugqqi.supabase.co/functions/v1/resend",
      //   {
      //     method: "POST",
      //     headers: {
      //       Authorization: `Bearer ${bearer}`,
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       email: signupEmail,
      //     }),
      //   }
      // ).then((res) => res.json());

      // if (functionError) {
      //   throw functionError;
      // }
      setShowSignupModal(false);
      setAcceptedTerms(false);
      toast({
        title: "Request Submitted",
        description: "We’ve received your request and will get back to you.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-wrap md:flex-nowrap flex-row justify-between h-full">
      <LoginSideBar />
      <div className="w-full flex flex-col items-center md:justify-center bg-gradient-to-b from-white to-gray-50 p-4">
        <div className="md:w-1/2 text-center md:text-start flex flex-col justify-start">
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
                  setIsForgotPassword(false);
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
                <label htmlFor="email" className="font-light">
                  Email
                </label>
                <Input
                  className="border-black focus:border-teal-700 mt-2 shadow-inner shadow-gray-400"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {!isForgotPassword && (
                <div>
                  <label htmlFor="password" className="font-light">
                    Password
                  </label>
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
                  className="text-sm text-primary hover:underline pr-4 md:pb-0 pb-4"
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

        {/* SIGNUP MODAL */}
        <Dialog open={showSignupModal} onOpenChange={setShowSignupModal}>
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
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <Input
                  type="email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Organization</label>
                <Input
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">
                  Relevant Countries/Regions
                </label>
                <div className="grid grid-cols-3 gap-2">
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

              {/* T&C Checkbox */}
              <div className="flex items-center space-x-2 pt-2">
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={() => setAcceptedTerms(!acceptedTerms)}
                />
                <p className="text-sm">
                  I agree to the{" "}
                  <button
                    type="button"
                    className="text-primary underline"
                    onClick={() => setShowTCModal(true)}
                  >
                    Terms and Conditions
                  </button>
                </p>
              </div>
              <div className="captcha">
                <ReCAPTCHA
                  sitekey={SITE_KEY}
                  onChange={(token: string | null) => setCaptchaToken(token)}
                  className="pt-4"
                />
              </div>
            </div>

            <DialogFooter className="pt-4">
              <Button
                type="button"
                onClick={handleSignUpSubmit}
                disabled={
                  !acceptedTerms ||
                  !signupEmail ||
                  !validateEmail(signupEmail) ||
                  !organization ||
                  regions.length === 0 ||
                  (!isLocalhost && !captchaToken)
                }
              >
                Submit Request
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* T&C Pop-up */}
        <Dialog open={showTCModal} onOpenChange={setShowTCModal}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Terms and Conditions</DialogTitle>
              <SubscriptionAgreement />
              <DialogFooter>
                <Button type="button" onClick={() => setShowTCModal(false)}>
                  Close
                </Button>
              </DialogFooter>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Auth;
